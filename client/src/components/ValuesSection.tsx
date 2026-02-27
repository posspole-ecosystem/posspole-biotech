import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background-dark pt-16 pb-8 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <Link to="/" className="text-xl font-bold text-primary-foreground flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">P</span>
              </span>
              SYLPOLE
            </Link>
            <p className="text-muted-foreground text-sm">
              Pioneering the future of extracellular matrix technology.
            </p>
          </div>
          
          <div>
            <h5 className="text-primary-foreground font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {/* Linked to ValuesSection via /about route */}
              <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/careers">Careers</Link></li>
              <li><Link className="hover:text-primary transition-colors" to="/news">News</Link></li>
            </ul>
          </div>
          
          {/* Updated Section: Technology -> Quick Links */}
          <div>
            <h5 className="text-primary-foreground font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
              {/* Linked to TechnologySection.tsx */}
              <li><Link className="hover:text-primary transition-colors" to="/technology">Technology</Link></li>
              {/* Linked to ApplicationsSection.tsx */}
              <li><Link className="hover:text-primary transition-colors" to="/applications">Applications</Link></li>
              {/* Linked to ValuesSection.tsx */}
              <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
              {/* Linked to PartnersSection.tsx */}
              <li><Link className="hover:text-primary transition-colors" to="/partners">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-primary-foreground font-bold mb-4">Social Networks</h5>
            <div className="flex space-x-4">
              <a className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors" href="#">
                <span className="text-xs">LI</span>
              </a>
              <a className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors" href="#">
                <span className="text-xs">TW</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2023 SYLPOLE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="hover:text-primary-foreground transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary-foreground transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;