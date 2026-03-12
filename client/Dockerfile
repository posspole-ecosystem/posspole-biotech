FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
# npm ci can miss Rollup optional platform packages on some npm versions.
RUN npm install --no-audit --no-fund

COPY . .
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*
COPY --from=builder /app/dist ./
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
