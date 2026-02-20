import AnimatedButton from "./AnimatedButton";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-dark to-background-dark text-center relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 fade-in-section">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">Accelerate your projects with SYSPOLE</h2>
        <p className="text-xl text-primary-foreground/70 mb-10">
          Ready to transform your research or explore partnership opportunities?
        </p>
        <AnimatedButton text="Contact Us" href="/contact" variant="light" />
      </div>
    </section>
  );
};

export default CTASection;
