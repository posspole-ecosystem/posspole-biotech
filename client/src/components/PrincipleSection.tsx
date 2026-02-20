const PrincipleSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="principle">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="fade-in-section">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Principle</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Reproducing the Physiological Environment
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                At the core of our innovation lies a proprietary method to synthesize an Extracellular Matrix (ECM) that mimics nature itself. By combining <strong className="text-primary-light">hyaluronic acid</strong> with key structural proteins, we create a scaffold that cells recognize as home.
              </p>
              <p>
                Unlike standard petri dishes or synthetic polymers, SYLPOLE's matrix provides the biochemical and mechanical cues necessary for cells to behave exactly as they would inside the human body.
              </p>
            </div>
            <div className="mt-8">
              <a className="inline-flex items-center text-primary hover:text-foreground transition-colors font-medium group" href="#">
                Read scientific paper
                <span className="material-icons ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 relative fade-in-section">
            <div className="aspect-square w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-foreground/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
              <img
                alt="3D visualization of molecular protein structures forming a complex matrix network"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqCRo38TiauuTkVi0KrgX09wsQ-yBXAJfS-lS_lv9GODYXHOAbnzav1b49qvTee_hEzoAu6gpSkTwKuVzHzWOsk8H8iIXIawLh4Ml4vN0gZat3v7vQmGB4kWsvTZoTqOBvw9NhCJFTRUyy2iE9p2U7NCOc5j9FfY8sbt3pAqXPd4FPxZsWtBo6_gfz5WU8Q37he2xUNXtYvXRdUOMc7HUvX1vO7OYZgCVJTf7aGu2DG7LWx3XAH2uT-UklcWNNW2rI7fUH15kWo_w"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-background-dark/60 backdrop-blur-md px-4 py-2 rounded-lg border border-foreground/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-mono text-primary-foreground">ECM Synthesis Active</span>
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
