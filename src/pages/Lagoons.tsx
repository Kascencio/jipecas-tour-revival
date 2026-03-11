import PageLayout from "@/components/PageLayout";
import DestinationCard from "@/components/DestinationCard";
import kaanLuumImg from "@/assets/laguna-kaan-luum.jpg";
import bacalarImg from "@/assets/laguna-bacalar.jpg";
import lagoonsImg from "@/assets/lagoons.jpg";

const lagoons = [
  {
    name: "Laguna Kaan Luum",
    description: "A quiet getaway in one of Tulum's best-kept secrets.",
    image: kaanLuumImg,
  },
  {
    name: "Laguna de Bacalar",
    description: "The main attraction of the town of Bacalar is the Bacalar Lagoon, also known as the Lagoon of the Seven Colors.",
    image: bacalarImg,
  },
  {
    name: "Yal-Ku",
    description: "Yal Ku Lagoon is a inland lagoon that connects to the Caribbean.",
    image: lagoonsImg,
  },
  {
    name: "Xul-Ha",
    description: "A freshwater lagoon may be more to your liking than the salty waves of the ocean.",
    image: bacalarImg,
  },
];

const LagoonsPage = () => {
  return (
    <PageLayout>
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bacalarImg})` }}
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-semibold text-background tracking-wider uppercase">
            Lagoons
          </h1>
          <div className="w-32 h-1 bg-primary mx-auto mt-4" />
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-20">
          {lagoons.map((lagoon, i) => (
            <DestinationCard key={lagoon.name + i} {...lagoon} />
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default LagoonsPage;
