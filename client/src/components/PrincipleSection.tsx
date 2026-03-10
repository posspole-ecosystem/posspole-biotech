const PrincipleSection = () => {
  return (
    <section
      className="relative -mt-32 pt-32 pb-16 overflow-hidden z-20 bg-[#f7f7f5]"
      id="principle"
    >
      {/* Soft background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-[-120px] w-[420px] h-[140px] bg-[#dcdcdc]/60 rounded-[50%] rotate-[-8deg]" />
        <div className="absolute top-[20px] left-[280px] w-[420px] h-[140px] bg-[#e7e7e7]/60 rounded-[50%] rotate-[8deg]" />
        <div className="absolute top-[40px] right-[-80px] w-[320px] h-[120px] bg-[#ececec]/70 rounded-[50%]" />
        <div className="absolute bottom-[-30px] left-[-100px] w-[420px] h-[120px] bg-[#e3e3e3]/50 rounded-[50%] rotate-[-8deg]" />
        <div className="absolute bottom-[-40px] left-[260px] w-[420px] h-[120px] bg-[#dddddd]/45 rounded-[50%] rotate-[6deg]" />
      </div>

      {/* Light biotech dots */}
      <div className="absolute top-[90px] right-[260px] w-7 h-7 rounded-full bg-white/50 z-[1] hidden md:block" />
      <div className="absolute top-[120px] right-[230px] w-4 h-4 rounded-full bg-white/40 z-[1] hidden md:block" />
      <div className="absolute top-[85px] left-[510px] w-6 h-6 rounded-full bg-white/50 z-[1] hidden md:block" />

      {/* Cyan molecule decoration */}
      <div className="absolute left-[220px] top-[150px] z-[1] hidden md:block">
        <div className="relative w-[170px] h-[120px]">
          <div className="absolute left-0 top-[18px] w-12 h-12 rounded-full bg-cyan-400/90" />
          <div className="absolute left-[34px] top-[48px] w-[90px] h-[10px] bg-cyan-500 rounded-full rotate-[28deg] origin-left" />
          <div className="absolute left-[108px] top-[78px] w-14 h-14 rounded-full bg-cyan-500/95" />
          <div className="absolute left-[92px] top-0 w-9 h-9 rounded-full bg-cyan-400/90" />
        </div>
      </div>

      {/* Blur glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="fade-in-section">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Reproducing the Physiological Environment
            </h2>

            <div className="space-y-6 text-muted-foreground text-black leading-relaxed">
              <p>
                At the core of our innovation lies a proprietary method to
                synthesize an Extracellular Matrix (ECM) that mimics nature
                itself. By combining
                <strong className="text-primary-light">
                  {" "}
                  hyaluronic acid
                </strong>{" "}
                with key structural proteins, we create a scaffold that cells
                recognize as home.
              </p>

              <p>
                Unlike standard petri dishes or synthetic polymers, SYLPOLE's
                matrix provides the biochemical and mechanical cues necessary
                for cells to behave exactly as they would inside the human body.
              </p>
            </div>

            <div className="mt-8">
              <a
                className="inline-flex items-center text-primary hover:text-foreground transition-colors font-medium group"
                href="#"
              >
                <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform"></span>
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="mt-12 lg:mt-0 relative fade-in-section">
            <div className="aspect-square w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-foreground/10 group bg-[#274a31]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />

              <img
                alt="3D molecular protein structure"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCRo38TiauuTkVi0KrgX09wsQ-yBXAJfS-lS_lv9GODYXHOAbnzav1b49qvTee_hEzoAu6gpSkTwKuVzHzWOsk8H8iIXIawLh4Ml4vN0gZat3v7vQmGB4kWsvTZoTqOBvw9NhCJFTRUyy2iE9p2U7NCOc5j9FfY8sbt3pAqXPd4FPxZsWtBo6_gfz5WU8Q37he2xUNXtYvXRdUOMc7HUvX1vO7OYZgCVJTf7aGu2DG7LWx3XAH2uT-UklcWNNW2rI7fUH15kWo_w"
              />

              <div className="absolute bottom-6 left-6 z-20 bg-background-dark/60 backdrop-blur-md px-4 py-2 rounded-lg border border-foreground/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-primary-foreground">
                    ECM Synthesis Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleSection;