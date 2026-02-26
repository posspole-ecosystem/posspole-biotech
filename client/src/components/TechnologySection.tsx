import { useState } from "react";

const TechnologySection = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="py-24 bg-background" id="technology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ================= OUR TECHNOLOGY ================= */}
          <div className="relative rounded-2xl overflow-hidden bg-surface-dark border border-foreground/5 shadow-xl hover:shadow-2xl transition-shadow group">
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

              <button
                onClick={() => setOpenModal(true)}
                className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors w-max"
              >
                Learn more
                <span className="material-icons ml-2 text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* ================= CLINICAL APPLICATIONS ================= */}
          <div className="relative rounded-2xl overflow-hidden bg-surface-dark border border-foreground/5 shadow-xl hover:shadow-2xl transition-shadow group">
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

              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-primary-foreground rounded-lg transition-colors w-max"
              >
                Learn more
                <span className="material-icons ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>
      </div>
{/* ================= MODAL ================= */}
{openModal && (
  <div
    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
    onClick={() => setOpenModal(false)}
  >
    <div
      className="bg-white dark:bg-surface-dark max-w-5xl w-full rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl"
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        Organisyl Technology
      </h2>

      {/* Intro Paragraph */}
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
       
      </p>

      {/* ================= IMAGE SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

        {/* First Image */}
        <div className="flex flex-col items-center">
          <img
            src="/organisyl1.jpg"
            alt="Organisyl ECM"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Organisyl technology is the first and unique in vitro organ-specific Extra-Cellular Matrix allowing to reproduce in vitro organ that faithfully reproduces in vivo organ with cells embedded in the right microenvironment.
          </p>
        </div>

        {/* Second Image */}
        <div className="flex flex-col items-center">
          <img
            src="/organisyl2.jpg"
            alt="HCS Pharma IMCELLYS"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Based on this breakthrough technology, services and products are developed and proposed in India for biotech, pharmaceutical, cosmetics and nutraceutical industries:
          </p>
        </div>
      </div>

      {/* ================= FULL WIDTH CONTENT BELOW ================= */}
      <div className="space-y-4 text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
      
      </div>

    </div>
  </div>
)}
        
      
    </section>
  );
};

export default TechnologySection;