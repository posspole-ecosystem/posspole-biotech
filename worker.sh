#!/usr/bin/env bash
set -euo pipefail

# --- Make sure npm is available (Windows Git Bash friendly) ---
fix_npm_path() {
  if command -v npm >/dev/null 2>&1; then
    return 0
  fi
  CANDIDATES=(
    "/c/Program Files/nodejs"
    "/c/Program Files (x86)/nodejs"
    "/c/Users/$USERNAME/AppData/Roaming/nvm"
    "/c/Users/$USERNAME/AppData/Local/Programs/nodejs"
    "/e/nodejs"
    "/d/nodejs"
  )
  for d in "${CANDIDATES[@]}"; do
    [ -d "$d" ] && export PATH="$d:$PATH"
  done
  if [ -d "/c/Users/$USERNAME/AppData/Roaming/nvm" ]; then
    latest=$(ls -1 "/c/Users/$USERNAME/AppData/Roaming/nvm" 2>/dev/null | grep -E '^v[0-9]+' | sort -Vr | head -n1 || true)
    if [ -n "${latest:-}" ] && [ -d "/c/Users/$USERNAME/AppData/Roaming/nvm/$latest" ]; then
      export PATH="/c/Users/$USERNAME/AppData/Roaming/nvm/$latest:$PATH"
    fi
  fi
  if ! command -v npm >/dev/null 2>&1; then
    echo "npm was not found on PATH."
    echo "Install Node.js and reopen Git Bash."
    exit 127
  fi
}
fix_npm_path

# ====== EDIT THESE ======
SSH_USER="crmadmin"
SSH_HOST="139.59.73.56"
SSH_KEY="${HOME}/.ssh/id_rsa"
REMOTE_DIR="/srv/apps/posspole-biotech"
PROJECT_NAME="posspole-biotech"
APP_PORT="8086"
# ========================

TS="$(date +%Y%m%d%H%M%S)"
ARCHIVE="${PROJECT_NAME}_${TS}.tar.gz"

echo "==> Running local Vite build (client)"
if [ -f client/package.json ]; then
  (
    cd client
    case "$(uname -s)" in
      MINGW*|MSYS*|CYGWIN*)
        echo "Windows shell detected. Using npm install to avoid npm ci EPERM lock issues."
        npm install --no-audit --no-fund
        ;;
      *)
        if ! npm ci --no-audit --no-fund; then
          echo "npm ci failed. Retrying with npm install."
          npm install --no-audit --no-fund
        fi
        ;;
    esac
    npm run build
  )
else
  echo "No client/package.json found. Skipping local build."
fi

echo "==> Removing old local archives"
find . -maxdepth 1 -type f -name "${PROJECT_NAME}_*.tar.gz" -delete 2>/dev/null || true

echo "==> Packing source archive"
tar -czf "$ARCHIVE" \
  --ignore-failed-read \
  --warning=no-file-changed \
  --exclude='.git' \
  --exclude='node_modules' \
  --exclude='client/node_modules' \
  --exclude='client/dist' \
  --exclude='.npm' \
  --exclude='.vscode' \
  --exclude='.DS_Store' \
  --exclude='*.log' \
  --exclude='*.map' \
  --exclude='*.tar' \
  --exclude='*.tar.gz' \
  --exclude='*.tgz' \
  --exclude='.env' \
  --exclude='.env*' \
  --exclude='*.pem' \
  --exclude='*.key' \
  --exclude='*.crt' \
  --exclude='*.pfx' \
  --exclude='secrets' \
  --exclude='keys' \
  .

echo "Archive created: $ARCHIVE"

SCP_OPTS=(-o StrictHostKeyChecking=no)
SSH_OPTS=(-o StrictHostKeyChecking=no)
if [ -f "$SSH_KEY" ]; then
  SCP_OPTS+=(-i "$SSH_KEY")
  SSH_OPTS+=(-i "$SSH_KEY")
else
  echo "SSH key not found at '$SSH_KEY'. Password prompt will be used."
fi

echo "==> Uploading archive to $SSH_USER@$SSH_HOST"
scp "${SCP_OPTS[@]}" "$ARCHIVE" "$SSH_USER@$SSH_HOST:/tmp/" || { echo "SCP failed"; exit 1; }

echo "==> Deploying remotely"
ssh "${SSH_OPTS[@]}" "$SSH_USER@$SSH_HOST" bash -s <<EOF
set -euo pipefail

REMOTE_DIR="$REMOTE_DIR"
ARCHIVE="/tmp/$ARCHIVE"
APP_PORT="$APP_PORT"

mkdir -p "\$REMOTE_DIR"
cd "\$REMOTE_DIR"

if [ ! -f .env ]; then
  {
    echo "NODE_ENV=production"
    echo "APP_PORT=\$APP_PORT"
  } > .env
fi

echo " - Cleaning old app files (keep infra + persistent dirs)"
find . -mindepth 1 -maxdepth 1 \
  ! -name 'Dockerfile' \
  ! -name 'docker-compose.yml' \
  ! -name '.env' \
  ! -name 'worker.sh' \
  ! -name '.dockerignore' \
  ! -name 'logs' \
  ! -name 'data' \
  -exec rm -rf {} +

echo " - Extracting new code"
tar -xzf "\$ARCHIVE" -C "\$REMOTE_DIR"

export COMPOSE_PROJECT_NAME="posspole_biotech"
echo " - Rebuilding and restarting container"
docker compose down --rmi local --remove-orphans || true
docker compose up -d --build
docker image prune -f >/dev/null 2>&1 || true

echo " - Cleaning uploaded archive"
rm -f "\$ARCHIVE"

echo " - Running containers:"
docker ps --format "table {{.Names}}\t{{.Image}}\t{{.Ports}}"
EOF

echo "==> Cleaning local archive"
rm -f "$ARCHIVE"

echo "==> Deployment complete"
echo "Check app on: http://$SSH_HOST:$APP_PORT"
