import React, { useEffect, useRef, useState } from "react";

const TechnologySection: React.FC = () => {
  // scroll animation state
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  // modal state
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // true when section enters viewport, false when leaving
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // animation classes
  const baseCardClass =
    "relative rounded-2xl overflow-hidden bg-surface-dark border border-foreground/5 shadow-xl hover:shadow-2xl transition-all duration-700 ease-out transform";

  const hiddenState = "opacity-0 translate-y-16 scale-90 pointer-events-none";
  const visibleState = "opacity-100 translate-y-0 scale-100 pointer-events-auto";

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background overflow-hidden"
      id="technology"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ================= OUR TECHNOLOGY ================= */}
          <div
            className={`${baseCardClass} ${
              isVisible ? visibleState : hiddenState
            } delay-0`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="mb-6 w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-icons text-4xl">biotech</span>
              </div>

              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Our Technology
              </h3>

              <p className="text-muted-foreground mb-8 flex-grow">
                Discover the bio-fabrication process that allows us to build ECMs
                with atomic precision, tailored to specific organ tissues.
              </p>

              <button
                type="button"
                onClick={() => setOpenModal(true)}
                className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors w-max"
              >
                Learn more
                <span className="material-icons ml-2 text-sm">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* ================= CLINICAL APPLICATIONS ================= */}
          <div
            className={`${baseCardClass} ${
              isVisible ? visibleState : hiddenState
            } delay-[400ms]`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <div className="p-8 md:p-12 relative z-10 flex flex-col h-full">
              <div className="mb-6 w-16 h-16 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                <span className="material-icons text-4xl">science</span>
              </div>

              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Clinical Applications
              </h3>

              <p className="text-muted-foreground mb-8 flex-grow">
                From skin grafts to cardiac patches, explore how our technology
                is being deployed in pre-clinical and clinical settings.
              </p>

              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-primary-foreground rounded-lg transition-colors w-max"
              >
                Learn more
                <span className="material-icons ml-2 text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4 py-8"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
            style={{ backgroundImage: 'radial-gradient(ellipse at top, #0d1b3e 0%, #050c1a 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="absolute top-5 right-5 w-10 h-10 p-2 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200 ease z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Inner padding wrapper + Hide Scrollbar Classes */}
            <div className="py-12 px-8 overflow-y-auto max-h-[90vh] scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              
              {/* Title with Gradient */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center mb-3 bg-gradient-to-r from-[#4f9eff] to-[#a78bfa] bg-clip-text text-transparent">
                Organisyl Technology
              </h2>

              {/* Intro Paragraph */}
              <p className="text-center text-white/55 mb-8 max-w-[600px] mx-auto leading-relaxed">
                Organ-specific ECM microenvironment designed to mimic in-vivo tissue behavior in-vitro.
              </p>

              {/* Gradient Divider Line */}
              <div className="mx-auto mb-8 h-[1px] w-[60%] bg-gradient-to-r from-transparent via-[#4f9eff]/50 to-transparent border-0" />

              {/* ================= IMAGE SECTION ================= */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                
                {/* First Image Card */}
                <div className="cursor-pointer rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,100,255,0.2)] hover:border-t-[#4f9eff]/30">
                  <img
                    src="/organisyl1.jpg"
                    alt="Organisyl ECM"
                    className="w-full h-[220px] sm:h-[260px] object-cover rounded-[12px] brightness-95 contrast-105"
                  />
                  <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/65 text-center">
                    Organisyl technology is the first and unique in vitro
                    organ-specific Extra-Cellular Matrix allowing to reproduce in
                    vitro organ that faithfully reproduces in vivo organ with
                    cells embedded in the right microenvironment.
                  </p>
                </div>

                {/* Second Image Card */}
                <div className="cursor-pointer rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,100,255,0.2)] hover:border-t-[#4f9eff]/30">
                  <img
                    src="/organisyl2.jpg"
                    alt="HCS Pharma IMCELLYS"
                    className="w-full h-[220px] sm:h-[260px] object-cover rounded-[12px] brightness-95 contrast-105"
                  />
                  <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-white/65 text-center">
                    Based on this breakthrough technology, services and products
                    are developed and proposed in India for biotech,
                    pharmaceutical, cosmetics and nutraceutical industries:
                  </p>
                </div>
              </div>

              {/* ================= FULL WIDTH CONTENT BELOW ================= */}
              <div className="space-y-4 text-white/65 leading-relaxed text-center max-w-4xl mx-auto">
                {/* Add more content here if needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnologySection;