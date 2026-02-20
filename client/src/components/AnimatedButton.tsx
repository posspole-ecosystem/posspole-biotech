import { useNavigate } from "react-router-dom";

interface AnimatedButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "light";
  type?: "button" | "submit";
}

const AnimatedButton = ({ text, href, onClick, variant = "primary", type = "button" }: AnimatedButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      if (href.startsWith("#")) {
        const el = document.getElementById(href.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(href);
      }
    }
  };

  const isPrimary = variant === "primary";

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`animated-btn group relative inline-flex items-center gap-1 px-9 py-4 text-base font-semibold rounded-full cursor-pointer overflow-hidden transition-all duration-600 ${
        isPrimary
          ? "text-primary shadow-[0_0_0_2px_hsl(var(--primary))]"
          : "text-primary-foreground shadow-[0_0_0_2px_hsl(var(--primary-foreground))]"
      } bg-transparent border-4 border-transparent hover:rounded-xl hover:shadow-[0_0_0_12px_transparent] active:scale-95`}
    >
      {/* Arrow 2 (enters from left on hover) */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute w-6 -left-1/4 z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-4 ${
          isPrimary ? "fill-primary group-hover:fill-primary-foreground" : "fill-primary-foreground group-hover:fill-[hsl(var(--background-dark))]"
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>

      {/* Text */}
      <span className={`relative z-[1] -translate-x-3 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-3 ${
        isPrimary ? "group-hover:text-primary-foreground" : "group-hover:text-[hsl(var(--background-dark))]"
      }`}>
        {text}
      </span>

      {/* Circle expand */}
      <span
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[400px] group-hover:h-[400px] group-hover:opacity-100 ${
          isPrimary ? "bg-primary" : "bg-primary-foreground"
        }`}
      />

      {/* Arrow 1 (exits to right on hover) */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute w-6 right-4 z-[9] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-right-1/4 ${
          isPrimary ? "fill-primary group-hover:fill-primary-foreground" : "fill-primary-foreground group-hover:fill-[hsl(var(--background-dark))]"
        }`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
      </svg>
    </button>
  );
};

export default AnimatedButton;
