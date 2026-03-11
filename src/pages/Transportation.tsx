import PageLayout from "@/components/PageLayout";
import transfersImg from "@/assets/transfers.jpg";
import { Plane, Hotel, Car } from "lucide-react";

const services = [
  {
    title: "Cancún - Aeropuerto",
    description: "Private transfers to and from Cancún International Airport. Comfortable and safe rides for your arrival and departure.",
    icon: Plane,
  },
  {
    title: "Mérida - Aeropuerto",
    description: "Comfortable rides to and from Mérida Airport. Reliable service with professional drivers.",
    icon: Plane,
  },
  {
    title: "Hoteles",
    description: "Door-to-door service to any hotel in the Riviera Maya. We cover all major hotel zones and resorts.",
    icon: Hotel,
  },
];

const TransportationPage = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-foreground mb-16 uppercase">
            Transportación
          </h1>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-card rounded-lg p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3 uppercase">
                  {service.title}
                </h2>
                <p className="font-body text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src={transfersImg}
              alt="Professional transportation van"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/529842494522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-primary-foreground font-heading font-semibold text-lg px-8 py-4 rounded-lg hover:brightness-110 transition-all"
            >
              Book Your Transfer
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TransportationPage;
