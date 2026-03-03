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
    <section className="py-24 bg-background" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

         {/* ================= OUR TECHNOLOGY ================= */}
<div
  onClick={() => setOpenModal(true)}
  className="relative rounded-2xl overflow-hidden bg-surface-dark border border-foreground/5 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
>
  <div className="p-8 md:p-12 flex flex-col h-full">
    <div className="mb-6 w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
      <span className="material-icons text-4xl">biotech</span>
    </div>

    <h3 className="text-2xl font-bold text-primary-foreground mb-4">
      Our Technology
    </h3>

    <p className="text-muted-foreground mb-8 flex-grow">
      Discover the bio-fabrication process that allows us to build ECMs with atomic precision, tailored to specific organ tissues.
    </p>

    {/* Button (visual only — card handles click) */}
    <div className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors w-max">
      Learn more
      <span className="material-icons ml-2 text-sm">arrow_forward</span>
    </div>
  </div>
</div>

          {/* ================= CLINICAL APPLICATIONS ================= */}
          <div
            onClick={() => setOpenClinicalModal(true)}
            className="relative rounded-2xl overflow-hidden bg-surface-dark border border-foreground/5 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:scale-[1.02]"
          >
            <div className="p-8 md:p-12 flex flex-col h-full">
              <div className="mb-6 w-16 h-16 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400">
                <span className="material-icons text-4xl">science</span>
              </div>

              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Clinical Applications
              </h3>

              <p className="text-muted-foreground mb-8 flex-grow">
                From skin grafts to cardiac patches, explore how our technology is being deployed in pre-clinical and clinical settings.
              </p>

             <div className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors w-max">
      Learn more
      <span className="material-icons ml-2 text-sm">arrow_forward</span>
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
            className={`max-w-5xl w-full rounded-[20px] p-[3rem_2rem] relative overflow-y-auto max-h-[90vh] shadow-2xl
            scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            ${isClosingModal ? "animate-zoomOut" : "animate-zoomIn"}`}
            style={{ backgroundImage: 'radial-gradient(ellipse at top, #0d1b3e 0%, #050c1a 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white text-xl transition-colors duration-200 ease z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Gradient Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#4f9eff] to-[#a78bfa] bg-clip-text text-transparent">
              Organisyl Technology
            </h2>

            {/* Gradient Divider */}
            <div 
              className="mx-auto mb-8 h-[1px] w-[60%] border-0" 
              style={{ background: 'linear-gradient(to right, transparent, rgba(79, 158, 255, 0.5), transparent)' }} 
            />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              
              {/* Card 1 */}
              <div className="cursor-pointer flex flex-col items-center rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,100,255,0.2)] hover:border-t-[#4f9eff]/30">
                <div className="overflow-hidden rounded-[12px] w-full">
                  <img
                    src="/organisyl1.jpg"
                    alt="Organisyl ECM"
                    className="w-full h-[220px] object-cover brightness-95 contrast-105 transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <p className="text-[15px] text-white/65 mt-4 text-center leading-relaxed">
                  Organisyl technology is the first and unique in vitro organ-specific Extra-Cellular Matrix allowing to reproduce in vitro organ that faithfully reproduces in vivo organ.
                </p>
              </div>

              {/* Card 2 */}
              <div className="cursor-pointer flex flex-col items-center rounded-[20px] bg-white/[0.04] border border-white/[0.08] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] p-6 transition-all duration-300 ease hover:-translate-y-[6px] hover:shadow-[0_16px_48px_rgba(0,100,255,0.2)] hover:border-t-[#4f9eff]/30">
                <div className="overflow-hidden rounded-[12px] w-full">
                  <img
                    src="/organisyl2.jpg"
                    alt="Organisyl Platform"
                    className="w-full h-[220px] object-cover brightness-95 contrast-105 transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                <p className="text-[15px] text-white/65 mt-4 text-center leading-relaxed">
                  Services and products are developed for biotech, pharmaceutical, cosmetics and nutraceutical industries.
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
            className={`max-w-5xl w-full rounded-[20px] p-[3rem_2rem] relative overflow-y-auto max-h-[90vh] shadow-2xl
            scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
            ${isClosingClinical ? "animate-zoomOut" : "animate-zoomIn"}`}
            style={{ backgroundImage: 'radial-gradient(ellipse at top, #0d1b3e 0%, #050c1a 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseClinical}
              className="absolute top-4 right-4 p-2 text-white/40 hover:text-white text-xl transition-colors duration-200 ease z-20"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Gradient Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 bg-gradient-to-r from-[#4f9eff] to-[#a78bfa] bg-clip-text text-transparent">
              Clinical Applications
            </h2>

            {/* Subtitle matching your spec */}
            <p className="text-center text-white/55 max-w-[600px] mx-auto mb-6 leading-relaxed">
              Our extracellular matrix platform enables regenerative therapies including skin grafts, cardiac tissue patches, and organ-repair scaffolds. The system bridges laboratory research and clinical implementation for improved patient outcomes.
            </p>

            {/* Gradient Divider */}
            <div 
              className="mx-auto mb-8 h-[1px] w-[60%] border-0" 
              style={{ background: 'linear-gradient(to right, transparent, rgba(79, 158, 255, 0.5), transparent)' }} 
            />

            {/* Wrapped in the new Card style */}
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