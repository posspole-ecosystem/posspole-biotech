import researchBg from "../assets/research-bg.png";

const ResearchBanner = () => {
  return (
    <section
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${researchBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          From Research to Solutions
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
          Bridging the gap between fundamental biology and scalable medical therapies.
        </p>
      </div>
    </section>
  );
};

export default ResearchBanner;