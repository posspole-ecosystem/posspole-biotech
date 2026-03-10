import { useState, useEffect } from "react";

const applications = [
  {
    title: "Pharmaceutical Research",
    description: "Accelerate drug discovery with more accurate predictive models.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgES417MIIUiHdSDSfqaID1HHXfkKHVGRGFZ1wFEyEx0zCOAe-2wdBA0nz5pCsYZKAA9P_5_5Fd81jWmTEZPbRVgV1LxCaYmxBH1-MoCP4s_TjWtmWByKgXIAvgkYxlDcUwJkbXvrXz5ZFCFCTwIvTHM34pHorYG6cqr3ihL9chzpAjKAKK1Esz-VUQ3T-MAHamjzKuL5S6xcifZV-9Z_0YE3DINMMeiw3CYA3zzO1ZKCdr28RMG0kYVijqowWWlp3SIAQd424uas",
    alt: "Close up of scientist holding a petri dish in blue lighting",
    delay: "0ms",
  },
  {
    title: "In Vitro Tests",
    description: "Replacing animal testing with reliable human-based cell models.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDQMbtrXc1z0kRXu1Jm7mUAX1ktad2Wnf2xj_p5rV4WWLNOfy6lek5n0Q5p9tAucqrkKot9qWJ-HoOan9yHJcxQuE23sQTmuHCy--mKHw14Jz13Yy3wRFLQ_4eAQQcLWDPnn2TZwwglZGVFXpEI_eWgUS2NS5bFWODv3YkeOZtpsda3qFYpeforye_LucKGIo8u6ICJHpl4U73mPeTjcmmHDfb-HGvv2yaaOx5bG1Ov7gQhJFbesFS5DH2g4ZJxOlHG-LVFA5T-R40",
    alt: "Microscope lens focusing on a slide sample",
    delay: "100ms",
  },
  {
    title: "Regenerative Medicine",
    description: "Developing scaffolds for tissue engineering and organ repair.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQfgRpeoCovI_Mcbdjfw-sRsRp2VL5gthH7q7Bwkmda-HKmHxMDNWU51v79Cl7iQCGPuyMrqWD1d-tQ8QlqrVnOIbhFnfoOU_-OKW2ksrCC5N0CpIQQ6wI6LAgK2PxFettC4wP4IVTgCFVn8ciWCarxzB-6GmYbJM4W2EA0SJYU15NHVeTbDO60MiTDMfZC_qX4wXxy5n_6cHEBKsPlhVF-WmScpRdj2wkzLDCcZcKOf0rbYyXiNcOq7hoIL_6UcC1eC_SZsy_u44",
    alt: "Doctor looking at futuristic digital medical scan data",
    delay: "200ms",
  },
  {
    title: "FoodTech",
    description: "Enabling the cultivation of structured meat products.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAaw2F01XS5N9rNzBNr8fxNwkPOPFLk1L569zVHx0RUZJBrLN92nC35FFtQmfwGNXBu56k0QOBUpPHICzkpz-rIDUZSpRPnd1FTypm7Ilol4XTeErqcF7-LCj2PIgBscwgl0rdiwMHA2d5fqS2tIDfu9LgAIdY2qmsapr0Eqo-AIiK8EQjMErYV9nplo9stoP6Exuu7hYnDe4TZ-5_7DtSv-RHwu2J6LahhxeC9_OGPljYTlsWs5J2WSx8siyKbWgwWWaNpZ6S_I84",
    alt: "Close up of plant sprout in a laboratory test tube",
    delay: "300ms",
  },
];

const ApplicationsSection = () => {
  const [activeApp, setActiveApp] = useState<any>(null);

  useEffect(() => {
    if (activeApp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeApp]);

  return (
    <>
      <section
        className="relative overflow-hidden pt-20 pb-36 bg-[#f4f4f2]"
        id="applications"
      >
        {/* Top soft abstract blobs */}
        <div className="absolute top-0 left-[-80px] w-[300px] h-[110px] bg-[#d9d9d9]/60 rounded-[50%] rotate-[-8deg] z-0" />
        <div className="absolute top-[-20px] left-[220px] w-[340px] h-[100px] bg-[#e3e3e3]/70 rounded-[50%] rotate-[4deg] z-0" />
        <div className="absolute top-[-10px] right-[180px] w-[280px] h-[90px] bg-[#dddddd]/60 rounded-[50%] rotate-[-6deg] z-0" />
        <div className="absolute top-[5px] right-[-60px] w-[260px] h-[95px] bg-[#e7e7e7]/70 rounded-[50%] rotate-[8deg] z-0" />

        {/* Large left molecule decoration */}
        <div className="absolute left-[70px] bottom-[75px] z-[1] hidden md:block">
          <div className="relative w-[110px] h-[110px]">
            <div className="absolute left-0 bottom-0 w-10 h-10 rounded-full bg-[#e0e0e0]" />
            <div className="absolute left-[28px] bottom-[26px] w-[62px] h-[8px] bg-[#e0e0e0] rotate-[-42deg] origin-left rounded-full" />
            <div className="absolute left-[72px] bottom-[68px] w-5 h-5 rounded-full bg-[#e0e0e0]" />
          </div>
        </div>

        {/* Small cyan dot left */}
        <div className="absolute left-[255px] bottom-[95px] w-5 h-5 rounded-full bg-cyan-400 z-[1] hidden md:block" />

        {/* Right side cyan molecule */}
        <div className="absolute right-[210px] bottom-[82px] z-[1] hidden md:block">
          <div className="relative w-[36px] h-[36px]">
            <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-cyan-400" />
            <div className="absolute left-[8px] top-[8px] w-[24px] h-[3px] bg-cyan-400 rotate-45 origin-left rounded-full" />
            <div className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-cyan-400" />
          </div>
        </div>

        {/* Bottom dark wave */}
        <div className="absolute bottom-0 left-0 w-full z-0 leading-none">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[190px] md:h-[220px]"
          >
            <path
              fill="#46576b"
              d="M0,192L48,218.7C96,245,192,299,288,304C384,309,480,267,576,250.7C672,235,768,245,864,245.3C960,245,1056,235,1152,192C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-section">
            <span className="text-[#3f4d5c] font-extrabold tracking-[0.22em] uppercase text-sm mb-2 block">
              Applications
            </span>
            <h2 className="text-[2rem] md:text-[2.35rem] font-extrabold text-cyan-500 leading-tight">
              New Perspectives in Biotechnology
            </h2>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {applications.map((app) => (
              <div
                key={app.title}
                onClick={() => setActiveApp(app)}
                className="group relative h-[280px] rounded-2xl overflow-hidden cursor-pointer fade-in-section shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                style={{ transitionDelay: app.delay }}
              >
                <img
                  alt={app.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={app.image}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071120] via-[#071120]/55 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="h-[3px] w-8 bg-cyan-500 rounded-full mb-4 transition-all duration-300 group-hover:w-12" />
                  <h3 className="text-white text-lg md:text-[1.35rem] font-bold leading-snug mb-2">
                    {app.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
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
            <img
              src={activeApp.image}
              alt={activeApp.alt}
              className="w-full h-72 md:h-full object-cover"
            />

            <div className="p-10 text-white flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">{activeApp.title}</h2>

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