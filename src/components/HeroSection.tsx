import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-up">
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-background mb-6 leading-tight">
          THE BEST TRANSPORTATION EXPERIENCE
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6" />
        <p className="font-heading text-xl md:text-2xl text-background/90 font-medium tracking-wide">
          REACH YOUR DESTINATION AS YOU DESERVE IT
        </p>
        <a
          href="https://wa.me/529842494522"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-10 bg-primary text-primary-foreground font-heading font-semibold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition-all"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
