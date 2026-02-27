import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PrincipleSection from "@/components/PrincipleSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import TechnologySection from "@/components/TechnologySection";
import ResearchBanner from "@/components/ResearchBanner";
import PatentSection from "@/components/PatentSection";
import PartnersSection from "@/components/PartnersSection";
import ValuesSection from "@/components/ValuesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  const containerRef = useScrollReveal();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // ✅ Scroll to section when coming from Footer links
  useEffect(() => {
    const id = (location.state as any)?.scrollTo;
    if (!id) return;

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }, [location.state]);

  return (
    <div ref={containerRef}>
      <Header />
      <HeroSection />

      <div id="principle">
        <PrincipleSection />
      </div>

      <div id="applications">
        <ApplicationsSection />
      </div>

      <div id="technology">
        <TechnologySection />
      </div>

      <ResearchBanner />

      <div id="patents">
        <PatentSection />
      </div>

      <div id="partners">
        <PartnersSection />
      </div>

      <div id="about">
        <ValuesSection />
      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;