import { useState } from "react";

const TechnologySection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isClosingModal, setIsClosingModal] = useState(false);

  const [openClinicalModal, setOpenClinicalModal] = useState(false);
  const [isClosingClinical, setIsClosingClinical] = useState(false);

  const handleCloseModal = () => {
    setIsClosingModal(true);
    setTimeout(() => {
      setOpenModal(false);
      setIsClosingModal(false);
    }, 300);
  };

  const handleCloseClinical = () => {
    setIsClosingClinical(true);
    setTimeout(() => {
      setOpenClinicalModal(false);
      setIsClosingClinical(false);
    }, 300);
  };

  return (
    <section
      id="technology"
      className="relative overflow-hidden bg-[#020817] min-h-[760px] md:min-h-[820px] lg:min-h-[860px]"
    >
      {/* Organic white background behind cards */}
      <img
        src="/webpage-bg.png"
        alt="Technology organic background"
        className="absolute inset-x-0 bottom-[40px] w-full h-[88%] md:h-[92%] lg:h-[95%] object-cover object-top z-0 pointer-events-none select-none"
      />

      {/* Blue decorative elements — refined spacing */}
      <div className="absolute inset-0 z-[5] pointer-events-none">
        {/* left small white dot */}
        <div className="absolute left-[7%] top-[56%] w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/70" />

        {/* left cyan dot */}
        <div className="absolute left-[6%] top-[61%] w-5 h-5 md:w-6 md:h-6 rounded-full bg-cyan-500" />

        {/* lower left molecule */}
        <div className="absolute left-[13%] bottom-[18%] flex items-end">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-cyan-500" />
          <div className="-ml-1 mb-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-cyan-500" />
        </div>

        {/* center-left single cyan dot */}
        <div className="absolute left-[28%] bottom-[23%] w-7 h-7 md:w-8 md:h-8 rounded-full bg-cyan-500 shadow-[0_0_0_8px_rgba(255,255,255,0.08)]" />

        {/* faint white molecule */}
        <div className="absolute left-[46%] bottom-[20%] flex items-center opacity-55">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/50" />
          <div className="-ml-1 mt-6 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/45" />
        </div>

        {/* right paired cyan dots */}
        <div className="absolute right-[22%] bottom-[20%] flex items-center gap-2">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-500" />
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-500" />
        </div>

        {/* far right tiny cyan dot */}
        <div className="absolute right-[14%] bottom-[18%] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-cyan-500" />
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ================= OUR TECHNOLOGY ================= */}
          <div
            onClick={() => setOpenModal(true)}
            className="relative rounded-[28px] overflow-hidden bg-surface-dark border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
          >
            <div className="p-8 md:p-12 flex flex-col min-h-[460px]">
              <div className="mb-6 w-20 h-20 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                <span className="material-icons text-4xl">biotech</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Our Technology
              </h3>

              <p className="text-muted-foreground text-[17px] leading-8 mb-10 flex-grow">
                Discover the bio-fabrication process that allows us to build
                ECMs with atomic precision, tailored to specific organ tissues.
              </p>

              <div className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors w-max">
                Learn more
                <span className="material-icons ml-2 text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>

          {/* ================= CLINICAL APPLICATIONS ================= */}
          <div
            onClick={() => setOpenClinicalModal(true)}
            className="relative rounded-[28px] overflow-hidden bg-surface-dark border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
          >
            <div className="p-8 md:p-12 flex flex-col min-h-[460px]">
              <div className="mb-6 w-20 h-20 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
                <span className="material-icons text-4xl">science</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Clinical Applications
              </h3>

              <p className="text-muted-foreground text-[17px] leading-8 mb-10 flex-grow">
                From skin grafts to cardiac patches, explore how our technology
                is being deployed in pre-clinical and clinical settings.
              </p>

              <div className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors w-max">
                Learn more
                <span className="material-icons ml-2 text-sm">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= OUR TECHNOLOGY MODAL ================= */}
      {openModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={handleCloseModal}
        >
          <div
            className={`max-w-5xl w-full rounded-[20px] p-[3rem_2rem] relative overflow-y-auto max-h-[90vh] shadow-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
              isClosingModal ? "animate-zoomOut" : "animate-zoomIn"
            }`}
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top, #0d1b3e 0%, #050c1a 100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white text-xl transition-colors duration-200 ease z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#4f9eff] to-[#a78bfa] bg-clip-text text-transparent">
              Organisyl Technology
            </h2>

            <div
              className="mx-auto mb-8 h-[1px] w-[60%] border-0"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(79, 158, 255, 0.5), transparent)",
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="cursor-pointer flex flex-col items-center rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,100,255,0.2)] hover:border-t-[#4f9eff]/30">
                <div className="overflow-hidden rounded-[12px] w-full">
                  <img
                    src="/organisyl1.jpg"
                    alt="Organisyl ECM"
                    className="w-full h-[220px] object-cover brightness-95 contrast-105 transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <p className="text-[15px] text-white/65 mt-4 text-center leading-relaxed">
                  Organisyl technology is the first and unique in vitro
                  organ-specific Extra-Cellular Matrix allowing to reproduce in
                  vitro organ that faithfully reproduces in vivo organ.
                </p>
              </div>

              <div className="cursor-pointer flex flex-col items-center rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,100,255,0.2)] hover:border-t-[#4f9eff]/30">
                <div className="overflow-hidden rounded-[12px] w-full">
                  <img
                    src="/organisyl2.jpg"
                    alt="Organisyl Platform"
                    className="w-full h-[220px] object-cover brightness-95 contrast-105 transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <p className="text-[15px] text-white/65 mt-4 text-center leading-relaxed">
                  Services and products are developed for biotech,
                  pharmaceutical, cosmetics and nutraceutical industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= CLINICAL APPLICATIONS MODAL ================= */}
      {openClinicalModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          onClick={handleCloseClinical}
        >
          <div
            className={`max-w-5xl w-full rounded-[20px] p-[3rem_2rem] relative overflow-y-auto max-h-[90vh] shadow-2xl scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
              isClosingClinical ? "animate-zoomOut" : "animate-zoomIn"
            }`}
            style={{
              backgroundImage:
                "radial-gradient(ellipse at top, #0d1b3e 0%, #050c1a 100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseClinical}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white text-xl transition-colors duration-200 ease z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#4f9eff] to-[#a78bfa] bg-clip-text text-transparent">
              Clinical Applications
            </h2>

            <p className="text-center text-white/55 max-w-[600px] mx-auto mb-6 leading-relaxed">
              Our extracellular matrix platform enables regenerative therapies
              including skin grafts, cardiac tissue patches, and organ-repair
              scaffolds. The system bridges laboratory research and clinical
              implementation for improved patient outcomes.
            </p>

            <div
              className="mx-auto mb-8 h-[1px] w-[60%] border-0"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(79, 158, 255, 0.5), transparent)",
              }}
            />

            <div className="cursor-pointer flex flex-col items-center rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,100,255,0.2)] hover:border-t-[#4f9eff]/30 w-full md:w-3/4 mx-auto mb-6">
              <div className="overflow-hidden rounded-[12px] w-full">
                <img
                  src="/clinical.jpg"
                  alt="Clinical Applications"
                  className="w-full h-[220px] md:h-[300px] object-cover brightness-95 contrast-105 transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TechnologySection;