import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    if (!isHome) return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-foreground">
            SYSPOLE
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            {isHome ? (
              <>
                <button onClick={() => scrollTo("technology")} className="text-muted-foreground hover:text-primary transition-colors">
                  Technology
                </button>
                <button onClick={() => scrollTo("applications")} className="text-muted-foreground hover:text-primary transition-colors">
                  Applications
                </button>
                <button onClick={() => scrollTo("about")} className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </button>
                <button onClick={() => scrollTo("partners")} className="text-muted-foreground hover:text-primary transition-colors">
                  Partners
                </button>
              </>
            ) : (
              <>
                <Link to="/#technology" className="text-muted-foreground hover:text-primary transition-colors">Technology</Link>
                <Link to="/#applications" className="text-muted-foreground hover:text-primary transition-colors">Applications</Link>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                <Link to="/#partners" className="text-muted-foreground hover:text-primary transition-colors">Partners</Link>
              </>
            )}
          </nav>

          <Link
            to="/contact"
            className="btn-animated px-6 py-2 bg-primary rounded-full text-primary-foreground font-medium"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
