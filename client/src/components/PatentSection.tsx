const PatentSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border border-border/5 fade-in-section">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <span className="text-primary font-semibold uppercase tracking-wide text-xs mb-2 block">Founding Principles</span>
              <h3 className="text-2xl font-bold text-foreground mb-4">Patented Innovation</h3>
              <p className="text-muted-foreground mb-6">
                Founded by a team of cell biologists and bioengineers, SYLPOLE holds 3 international patents protecting our unique synthesis process. Our scientific board ensures rigorous validation at every step.
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">3</span>
                  <span className="text-xs text-muted-foreground uppercase">Patents</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">12+</span>
                  <span className="text-xs text-muted-foreground uppercase">Publications</span>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-primary">5</span>
                  <span className="text-xs text-muted-foreground uppercase">Yrs R&D</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-32 h-40 border-2 border-primary/30 rounded bg-card p-4 transform rotate-3">
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  <span className="material-icons text-sm">check</span>
                </div>
                <div className="h-2 w-16 bg-border mb-2 rounded" />
                <div className="h-2 w-20 bg-border mb-4 rounded" />
                <div className="h-16 w-full bg-primary/10 rounded flex items-center justify-center">
                  <span className="material-icons text-primary/50 text-3xl">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatentSection;
