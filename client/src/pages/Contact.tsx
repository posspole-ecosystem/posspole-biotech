import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/UseScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";

const Contact = () => {
  const containerRef = useScrollReveal();
  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    email: "",
    topic: "",
    message: "",
  });

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={containerRef}>
      <Header />

      {/* Hero */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/90 to-background-dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting science with solutions. Reach out to our team of experts.
          </p>
        </div>
      </header>

      {/* Contact Content */}
      <main className="relative z-10 -mt-10 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border flex flex-col lg:flex-row">
            {/* Left Info */}
            <div className="lg:w-5/12 p-8 lg:p-12 bg-secondary">
              <h2 className="text-3xl font-bold text-foreground mb-6">Let's Be Partners</h2>
              <p className="text-muted-foreground mb-8">
                Our solutions are for you. Whether you are a research laboratory or industrial company, SYSPOLE opens the way to concrete and reliable solutions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons">location_on</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-foreground">Headquarters</h3>
                    <p className="text-muted-foreground mt-1">
                      Biotech Valley, Building 4<br />
                      123 Innovation Drive, Cambridge, MA
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons">email</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground mt-1">contact@sylpole.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-icons">phone</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-7/12 p-8 lg:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground"
                    placeholder="Full Name"
                  />
                  <input
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground"
                    placeholder="Organization"
                  />
                </div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground"
                  placeholder="Email"
                />
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground"
                >
                  <option value="">Select Topic...</option>
                  <option value="research">Research Collaboration</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="investment">Investment Inquiry</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground"
                  placeholder="Message"
                />
                <AnimatedButton text="Send Message" type="button" />
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
