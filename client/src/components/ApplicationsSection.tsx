import { useState, useEffect } from "react";

const applications = [
  {
    title: "Pharmaceutical Research",
    description: "Accelerate drug discovery with more accurate predictive models.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgES417MIIUiHdSDSfqaID1HHXfkKHVGRGFZ1wFEyEx0zCOAe-2wdBA0nz5pCsYZKAA9P_5_5Fd81jWmTEZPbRVgV1LxCaYmxBH1-MoCP4s_TjWtmWByKgXIAvgkYxlDcUwJkbXvrXz5ZFCFCTwIvTHM34pHorYG6cqr3ihL9chzpAjKAKK1Esz-VUQ3T-MAHamjzKuL5S6xcifZV-9Z_0YE3DINMMeiw3CYA3zzO1ZKCdr28RMG0kYVijqowWWlp3SIAQd424uas",
    alt: "Close up of scientist holding a petri dish in blue lighting",
    delay: "0ms",
  },
  {
    title: "In Vitro Tests",
    description: "Replacing animal testing with reliable human-based cell models.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQMbtrXc1z0kRXu1Jm7mUAX1ktad2Wnf2xj_p5rV4WWLNOfy6lek5n0Q5p9tAucqrkKot9qWJ-HoOan9yHJcxQuE23sQTmuHCy--mKHw14Jz13Yy3wRFLQ_4eAQQcLWDPnn2TZwwglZGVFXpEI_eWgUS2NS5bFWODv3YkeOZtpsda3qFYpeforye_LucKGIo8u6ICJHpl4U73mPeTjcmmHDfb-HGvv2yaaOx5bG1Ov7gQhJFbesFS5DH2g4ZJxOlHG-LVFA5T-R40",
    alt: "Microscope lens focusing on a slide sample",
    delay: "100ms",
  },
  {
    title: "Regenerative Medicine",
    description: "Developing scaffolds for tissue engineering and organ repair.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQfgRpeoCovI_Mcbdjfw-sRsRp2VL5gthH7q7Bwkmda-HKmHxMDNWU51v79Cl7iQCGPuyMrqWD1d-tQ8QlqrVnOIbhFnfoOU_-OKW2ksrCC5N0CpIQQ6wI6LAgK2PxFettC4wP4IVTgCFVn8ciWCarxzB-6GmYbJM4W2EA0SJYU15NHVeTbDO60MiTDMfZC_qX4wXxy5n_6cHEBKsPlhVF-WmScpRdj2wkzLDCcZcKOf0rbYyXiNcOq7hoIL_6UcC1eC_SZsy_u44",
    alt: "Doctor looking at futuristic digital medical scan data",
    delay: "200ms",
  },
  {
    title: "FoodTech",
    description: "Enabling the cultivation of structured meat products.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaw2F01XS5N9rNzBNr8fxNwkPOPFLk1L569zVHx0RUZJBrLN92nC35FFtQmfwGNXBu56k0QOBUpPHICzkpz-rIDUZSpRPnd1FTypm7Ilol4XTeErqcF7-LCj2PIgBscwgl0rdiwMHA2d5fqS2tIDfu9LgAIdY2qmsapr0Eqo-AIiK8EQjMErYV9nplo9stoP6Exuu7hYnDe4TZ-5_7DtSv-RHwu2J6LahhxeC9_OGPljYTlsWs5J2WSx8siyKbWgwWWaNpZ6S_I84",
    alt: "Close up of plant sprout in a laboratory test tube",
    delay: "300ms",
  },
];

const ApplicationsSection = () => {
  const [activeApp, setActiveApp] = useState<any>(null);

  // Prevent background scroll when modal opens
  useEffect(() => {
    if (activeApp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeApp]);

  return (
    <>
      <section className="py-24 bg-card border-y border-border/5" id="applications">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              New Perspectives in Biotechnology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app) => (
              <div
                key={app.title}
                onClick={() => setActiveApp(app)}
                className="group relative h-96 rounded-xl overflow-hidden cursor-pointer fade-in-section"
                style={{ transitionDelay: app.delay }}
              >
                <img
                  alt={app.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={app.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="h-1 bg-primary mb-4 w-0 group-hover:w-10 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {app.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
{activeApp && (
  <div
    onClick={() => setActiveApp(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative max-w-5xl w-full bg-[#0f172a] rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2 animate-zoomIn"
    >
      {/* Image */}
      <img
        src={activeApp.image}
        alt={activeApp.alt}
        className="w-full h-72 md:h-full object-cover"
      />

      {/* Content */}
      <div className="p-10 text-white flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6">
          {activeApp.title}
        </h2>

        <p className="text-white/70 leading-relaxed mb-4">
          {activeApp.description}
        </p>

        <p className="text-white/60 leading-relaxed">
          Our advanced extracellular matrix technology enhances predictive
          biological modeling, accelerates research timelines, and reduces
          experimental failure rates.
        </p>

        <button
          onClick={() => setActiveApp(null)}
          className="mt-8 self-start px-6 py-3 bg-primary text-white rounded-lg hover:scale-105 transition-transform duration-300"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
      
    </>
  );
};

export default ApplicationsSection;