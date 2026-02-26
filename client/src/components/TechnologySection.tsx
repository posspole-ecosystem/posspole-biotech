import React, { useEffect, useRef, useState } from 'react';

const TechnologySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This is the key: it sets visibility to true when entering, 
        // and false when leaving, allowing the animation to repeat.
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px" // Slight offset so it triggers cleaner on scroll
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation Styles
  const baseCardClass = "relative rounded-2xl overflow-hidden bg-surface-dark border border-foreground/5 shadow-xl hover:shadow-2xl transition-all duration-700 ease-out transform";
  
  // Hidden: Small, pushed down, and transparent
  const hiddenState = "opacity-0 translate-y-16 scale-90 pointer-events-none";
  
  // Visible: Full size, at rest, and opaque
  const visibleState = "opacity-100 translate-y-0 scale-100 pointer-events-auto";

  return (
    <section ref={sectionRef} className="py-24 bg-background overflow-hidden" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tech Card - Pops up first (0ms delay) */}
          <div className={`${baseCardClass} ${isVisible ? visibleState : hiddenState} delay-[0ms]`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="mb-6 w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-icons text-4xl">biotech</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Technology</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                Discover the bio-fabrication process that allows us to build ECMs with atomic precision, tailored to specific organ tissues.
              </p>
              <a className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors w-max" href="#">
                Learn more
                <span className="material-icons ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
            <img
              alt="Abstract blue digital network"
              className="absolute bottom-0 right-0 w-1/2 h-1/2 object-contain opacity-20 mix-blend-screen pointer-events-none group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyHB3_sufYqa7vsVGsjZiyFQT_bG7jn7BYqYbygHaCacQjatwcS0QhR6E-xdtV9JEFQnCeMhzdkNfmyw3gvtzgriiltFyXU8JFPJx5VMqsDleLux8BTArcLQ4PqCqJkcFvs94rvNVeiKqxme9Ydv1eo2MZxj21gGT1j2emWaN1JzsCB-po8IithIaKmlrnKSabbD1rOz9ncowGf7rb1jRiVLxCuxLTQizUFUe7HP0NrhLa2maOM5uwWYmy_OhNpuZty-PRzUBOys4"
            />
          </div>

          {/* Clinical Apps Card - Pops up second (400ms delay) */}
          <div className={`${baseCardClass} ${isVisible ? visibleState : hiddenState} delay-[400ms]`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="mb-6 w-16 h-16 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                <span className="material-icons text-4xl">science</span>
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">Clinical Applications</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                From skin grafts to cardiac patches, explore how our technology is being deployed in pre-clinical and clinical settings.
              </p>
              <a className="inline-flex items-center px-6 py-3 border border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-primary-foreground rounded-lg transition-colors w-max" href="#">
                Learn more
                <span className="material-icons ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
            <img
              alt="Abstract swirling blue and teal liquid pattern"
              className="absolute bottom-0 right-0 w-1/2 h-1/2 object-contain opacity-20 mix-blend-screen pointer-events-none group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmq4auZbHQPIBAuy3CqyK3p56drVPhLJ5_6EhucO8daSwqOxzDaWLOG3sc_aupn13wc-kI2bJw7Dwdm6Mme0l-vtBmH8U1mgyXIk5SkoVMiKoQlz2r3ZYpRI89bqu4MAzuS23Va8L0NuByIV9GoAYhCbDFGHJfbqkvckvMRt6ufn3KAqa5qAZZmx5A-DMaSeW5C-Rq1OVHNUH5HA3vDpDmwud9VD1zmdrZ0H8sx8L-OwD09up6W7smgGMjMa7bp9q7Ef1ScXWYlsM"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;