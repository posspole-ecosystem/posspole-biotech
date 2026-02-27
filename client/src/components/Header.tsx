import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    if (!isHome) return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-[#00B4D8] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Changed to justify-center and added gap to cluster items together */}
        <div className="flex justify-center items-center h-20 gap-10">
          
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Sylpole Logo"
              // Note: I added "brightness-0 invert" to force your current dark logo to turn white via CSS. 
              // If you upload an actual white logo image, you can remove those two classes!
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>

          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">
              Home
            </Link>
            {isHome ? (
              <>
                <button onClick={() => scrollTo("technology")} className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">
                  Technology
                </button>
                <button onClick={() => scrollTo("applications")} className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">
                  Applications
                </button>
                <button onClick={() => scrollTo("about")} className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">
                  About Us
                </button>
                <button onClick={() => scrollTo("partners")} className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">
                  Partners
                </button>
              </>
            ) : (
              <>
                <Link to="/#technology" className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">Technology</Link>
                <Link to="/#applications" className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">Applications</Link>
                <Link to="/#about" className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">About Us</Link>
                <Link to="/#partners" className="text-white uppercase text-sm tracking-wide hover:opacity-80 transition-opacity">Partners</Link>
              </>
            )}
          </nav>

          <Link
            to="/contact"
            // Changed to an outlined button with white text
            className="btn-animated px-5 py-1.5 border border-white rounded text-white uppercase text-sm tracking-wide hover:bg-white hover:text-[#00B4D8] transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;