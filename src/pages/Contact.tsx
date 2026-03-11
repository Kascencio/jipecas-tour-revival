import PageLayout from "@/components/PageLayout";
import { Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const ContactPage = () => {
  return (
    <PageLayout>
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-foreground" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-background tracking-wider uppercase">
            Contáctanos
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto mt-4" />
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <a
            href="https://wa.me/529842494522"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-heading font-semibold text-lg px-12 py-4 rounded-lg hover:brightness-110 transition-all mb-16"
          >
            Contact us
          </a>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col items-center gap-4">
              <Mail className="w-16 h-16 text-primary" />
              <a
                href="mailto:jjservicetransportation@gmail.com"
                className="font-body text-primary hover:underline text-lg"
              >
                jjservicetransportation@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-4">
              <Phone className="w-16 h-16 text-secondary" />
              <a
                href="https://wa.me/529842494522"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-primary hover:underline text-lg"
              >
                + 52 984-249-45-22
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
