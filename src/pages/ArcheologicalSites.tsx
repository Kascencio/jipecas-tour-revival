import PageLayout from "@/components/PageLayout";
import DestinationCard from "@/components/DestinationCard";
import tulumImg from "@/assets/tulum.jpg";
import chichenItzaImg from "@/assets/chichen-itza.jpg";
import cobaImg from "@/assets/coba.jpg";

const sites = [
  {
    name: "Tulum",
    description: "This ruin is one of the very few walled cities built by the Maya and the only Maya settlement located on the beach.",
    image: tulumImg,
  },
  {
    name: "Chichen Itza",
    description: "This sublime mayan city it's one of the seven wonders of the world.",
    image: chichenItzaImg,
  },
  {
    name: "Cobá",
    description: "Historical, cultural and natural record of great majesty and excellent conservation.",
    image: cobaImg,
  },
];

const ArcheologicalSites = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-primary mb-16 uppercase">
            Visit the Mayan Ruins...
          </h1>
          <div className="space-y-20">
            {sites.map((site) => (
              <DestinationCard key={site.name} {...site} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ArcheologicalSites;
