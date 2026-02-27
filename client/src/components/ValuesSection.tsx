const values = [
  { icon: "lightbulb", title: "Innovation", desc: "Pushing boundaries daily.", delay: "0ms" },
  { icon: "public", title: "Impact", desc: "Changing lives globally.", delay: "100ms" },
  { icon: "balance", title: "Ethics", desc: "Responsible science.", delay: "200ms" },
  { icon: "language", title: "International", desc: "Borderless collaboration.", delay: "300ms" },
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-card border-t border-border/5" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center fade-in-section" style={{ transitionDelay: v.delay }}>
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <span className="material-icons text-3xl">{v.icon}</span>
                </div>
                <h4 className="font-bold text-foreground">{v.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* About Team */}
        <div className="bg-background rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row fade-in-section">
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <img
              alt="Group of diverse scientists collaborating around a table"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Z6Xar2K0hHrIE6umU9pTIq89c3-5k18iylnr0kVG44HFqGH7o-UbVavdwI_eSyW4SeGUNURCXXJ2xCfpDKnbMNfdpCCQLJ96zij7RK59Cov6T4oRkczaUbrLAypsr2mFHCPY2izmHAkIFxaGejZ93FOO5Sx_Ot_0GIBxS5S4cN0GisA20cLtAD1iHAHIobaw-LNqWXWz-PvPj0-yr_EzY5aEIXE0nwG_k405Q2NWFd6OW6wCD5QLNtJFZreiIiBixi6b4SqGLBo"
            />
          </div>
          <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Who Are We?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              SYLPOLE is a diverse collective of dreamers and doers. From molecular biologists to business strategists, we are united by a single mission: to harness the power of biology to heal.
            </p>
            <a className="text-primary font-medium hover:text-primary-light inline-flex items-center" href="#">
              Meet the team
              <span className="material-icons ml-1 text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
