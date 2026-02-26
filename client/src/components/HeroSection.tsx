import { useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";


const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Parallax
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.05)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Mouse glow
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    // DNA Particles
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d")!;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: { x: number; y: number; r: number; v: number }[] = [];
      for (let i = 0; i < 40; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 2 + 1,
          v: Math.random() * 0.3 + 0.1,
        });
      }

      let animId: number;
      function animate() {
        ctx.clearRect(0, 0, canvas!.width, canvas!.height);
        ctx.fillStyle = "rgba(59,118,232,0.25)";
        particles.forEach((p) => {
          p.y -= p.v;
          if (p.y < 0) p.y = canvas!.height;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        });
        animId = requestAnimationFrame(animate);
      }
      animate();

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("scroll", handleScroll);
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <img
        ref={imgRef}
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC39QP3xAtNJfUFgQ5u0NynNaHljTRfN9aI3zDFiIIPY2rdmYWb5FgMp5T4QVbBSA7h1BqNGa25FC4C-_NSV6sTgpLkoTbQpwO3M6pvj0WeSGq_pjszlOUIr7V-0gTyi-ViZrvl04ZGEGnwKmw_lmyQkYbeEI1c7CKg7hrPYqz_KnKaaJp6gqhkSnKtDLoakqaRl504LgsKExFMcpcGZrE8ZmfytgbVEfxy_tw7SmAM61RHaaVmkxa73_IC_v2LaEHPLBvOErkfpsI"
        className="hero-bg-image"
        alt="Lab background"
      />
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div ref={glowRef} className="hero-glow" />
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-dark/70 to-background-dark/90" />

     <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 text-center">

  {/* 🔥 Logos Row */}
  <div className="flex justify-center items-center gap-10 mb-8">
    <img
      src={logo1}
      alt="Partner Logo 1"
      className="h-14 md:h-16 w-auto object-contain opacity-90"
    />
    
    <img
      src={logo2}
      alt="Partner Logo 2"
      className="h-14 md:h-16 w-auto object-contain opacity-90"
    />
  </div>

  <h1 className="text-5xl md:text-7xl font-extrabold text-primary-foreground mb-6">
    SYLPOLE
  </h1>
        <h2 className="text-2xl md:text-3xl text-primary-light mb-6">
          Disruptive Technology for Regenerative Medicine
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-10">
          The first in vitro extracellular matrix faithfully reproducing the physiological environment of organs.
        </p>
        <AnimatedButton text="Discover Our Technology" href="#principle" />
      </div>
    </section>
  );
};

export default HeroSection;
