import { Mail, Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-semibold mb-4">
          Contáctanos
        </h2>
        <p className="font-body text-lg mb-12 opacity-80">
          Hablemos directamente. Sin formularios, sin esperas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/529842494522"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 bg-secondary-foreground/10 rounded-lg p-8 hover:bg-secondary-foreground/20 transition-colors"
          >
            <MessageCircle className="w-12 h-12 text-primary" />
            <span className="font-heading font-semibold text-lg">WhatsApp</span>
            <span className="font-body text-sm opacity-80">+52 984-249-45-22</span>
          </a>
          <a
            href="mailto:jjservicetransportation@gmail.com"
            className="flex flex-col items-center gap-4 bg-secondary-foreground/10 rounded-lg p-8 hover:bg-secondary-foreground/20 transition-colors"
          >
            <Mail className="w-12 h-12 text-primary" />
            <span className="font-heading font-semibold text-lg">Email</span>
            <span className="font-body text-sm opacity-80">jjservicetransportation@gmail.com</span>
          </a>
          <a
            href="tel:+529842494522"
            className="flex flex-col items-center gap-4 bg-secondary-foreground/10 rounded-lg p-8 hover:bg-secondary-foreground/20 transition-colors"
          >
            <Phone className="w-12 h-12 text-primary" />
            <span className="font-heading font-semibold text-lg">Llamar</span>
            <span className="font-body text-sm opacity-80">+52 984-249-45-22</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
