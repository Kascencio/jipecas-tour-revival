import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutSection from "@/components/AboutSection";
import TransfersSection from "@/components/TransfersSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="inicio">
        <HeroSection />
      </div>
      <div id="destinations">
        <DestinationsSection />
      </div>
      <AboutSection />
      <div id="transfers">
        <TransfersSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <footer className="bg-foreground text-background/60 text-center py-6 font-body text-sm">
        © {new Date().getFullYear()} Jipeca's Tours and Transportation. All rights reserved.
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
