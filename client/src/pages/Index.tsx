import { useEffect } from "react";
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

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div ref={containerRef}>
      <Header />
      <HeroSection />
      <PrincipleSection />
      <ApplicationsSection />
      <TechnologySection />
      <ResearchBanner />
      <PatentSection />
      <PartnersSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
