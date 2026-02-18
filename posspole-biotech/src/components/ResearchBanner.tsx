const ResearchBanner = () => {
  return (
    <section
      className="relative py-32 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC39QP3xAtNJfUFgQ5u0NynNaHljTRfN9aI3zDFiIIPY2rdmYWb5FgMp5T4QVbBSA7h1BqNGa25FC4C-_NSV6sTgpLkoTbQpwO3M6pvj0WeSGq_pjszlOUIr7V-0gTyi-ViZrvl04ZGEGnwKmw_lmyQkYbeEI1c7CKg7hrPYqz_KnKaaJp6gqhkSnKtDLoakqaRl504LgsKExFMcpcGZrE8ZmfytgbVEfxy_tw7SmAM61RHaaVmkxa73_IC_v2LaEHPLBvOErkfpsI')`,
      }}
    >
      <div className="absolute inset-0 bg-background-dark/80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">From Research to Solutions</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light">
          Bridging the gap between fundamental biology and scalable medical therapies.
        </p>
      </div>
    </section>
  );
};

export default ResearchBanner;
