import AnimatedButton from "./AnimatedButton";

const PartnersSection = () => {
  return (
    <section className="py-24 bg-background" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Partners Block */}
          <div className="relative rounded-2xl overflow-hidden h-80 group fade-in-section">
            <img
              alt="Two professionals reviewing documents in a modern office"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4AyPumfELzseWwHGX_BG5VXmBdxdn1Cm60_4GBYe2vDCz2NePUWVc8u-08K7WPKEYiahvYgVw622OM7jSAQk-KL60Pr-kzNg_8UZmK_IV4hO7nmYnwaQTNzfiZljiF4E5BAegABSTmmyZ3goOC_2yAioF44rcO3ExGMUrBY_6EEqhns5H0utw-GMBVlkhm8tIFrIwqKGJ0G131AuoziJ2XbvhhZy7YykrLkbFrzzPvmg02PfhLapzLU4NerNC583jqCooBh8LMvs"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end items-start">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Let's Be Partners</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">Collaborate with us to integrate our ECM technology into your research pipeline.</p>
              <AnimatedButton text="Collaborate" href="/contact" variant="light" />
            </div>
          </div>
          {/* Investor Block */}
          <div className="relative rounded-2xl overflow-hidden h-80 group fade-in-section">
            <img
              alt="Business meeting with financial charts on a tablet"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJOWpZozA8oS4-Gb61CeT2fDWNFdONauo5ACMyeyldOla_cmVnBaeDawJXrHzRogPpL9wR_ZPxljMsJ83PbHaUzAOZUbGnjqGI2a5IdD-Hf5H2ieFpaIwuv7nsEZFYiPNGw8-BPb_xM2twGx9XRkPneLC62AKSDpVgtecBLEw5ocDl23UWD08cQHP9fqkm3ODV6OvGTrS-AOqyAT9zUg4CKTS_6EICRhq7qszr5wK29nKQT1dGfiktTN80q6ssNzMlLU3vAVXsW6c"
            />
            <div className="absolute inset-0 p-10 flex flex-col justify-end items-start">
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">Become an Investor</h3>
              <p className="text-muted-foreground mb-6 max-w-sm">Join us in revolutionizing the future of regenerative medicine and biotech.</p>
              <AnimatedButton text="Invest in POSSPOLE" href="/contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
