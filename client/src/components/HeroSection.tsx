import { useEffect, useRef } from "react";
import AnimatedButton from "./AnimatedButton";
import heroBg from "../assets/hero.png";


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
    <section className="relative min-h-screen flex items-center overflow-hidden hero-scene">
     <img
  ref={imgRef}
  src={heroBg}
  alt="Biotech background"
 className="absolute inset-0 w-full min-h-full object-cover object-center hero-bg-image"
 />
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div ref={glowRef} className="hero-glow" />
      <div className="absolute inset-0 hero-main-overlay" />
      <div className="absolute inset-0 hero-spotlight" />

     <div className="relative z-10 max-w-7xl mx-auto px-6 mt-20 text-center">
        <p className="text-2xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-5xl mx-auto text-white mb-12 hero-copy-pop">
  The first in vitro extracellular matrix faithfully reproducing the physiological environment of organs.
</p>
        <div className="inline-block scale-110 md:scale-125">
        <AnimatedButton
  text="Discover Our Technology"
  href="#principle"
  variant="light"
/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
