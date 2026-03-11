import { Link } from "react-router-dom";
import archeological from "@/assets/archeological.jpg";
import cenotes from "@/assets/cenotes.jpg";
import lagoons from "@/assets/lagoons.jpg";
import cities from "@/assets/cities.jpg";

const destinations = [
  { name: "Archeological Sites", image: archeological, href: "/destinations/archeological-sites" },
  { name: "Cenotes", image: cenotes, href: "/destinations/cenotes" },
  { name: "Lagoons", image: lagoons, href: "/destinations/lagoons" },
  { name: "Cities", image: cities, href: "/destinations/cities" },
];

const DestinationsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center text-foreground mb-16">
          Destinations
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <Link key={dest.name} to={dest.href} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg mb-4 shadow-lg">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-sm md:text-base font-semibold text-center text-foreground tracking-wider uppercase">
                {dest.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
