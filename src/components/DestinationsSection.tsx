import archeological from "@/assets/archeological.jpg";
import cenotes from "@/assets/cenotes.jpg";
import lagoons from "@/assets/lagoons.jpg";
import cities from "@/assets/cities.jpg";

const destinations = [
  { name: "Archeological Sites", image: archeological },
  { name: "Cenotes", image: cenotes },
  { name: "Lagoons", image: lagoons },
  { name: "Cities", image: cities },
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
            <div key={dest.name} className="group cursor-pointer">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
