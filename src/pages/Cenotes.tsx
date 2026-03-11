import PageLayout from "@/components/PageLayout";
import DestinationCard from "@/components/DestinationCard";
import casaTortugaImg from "@/assets/cenote-casa-tortuga.jpg";
import granCenoteImg from "@/assets/gran-cenote.jpg";
import cenotesSrc from "@/assets/cenotes.jpg";
import suytunImg from "@/assets/cenote-suytun.jpg";

const cenotes = [
  {
    name: "Cenote Casa Tortuga",
    description: "One of the most visited sites, four cenotes in the same natural park.",
    image: casaTortugaImg,
  },
  {
    name: "Gran Cenote",
    description: "Famous for its ability to receive snorkelers and cave divers. It is the perfect destination for the adventurous and for those who prefer to be in contact with nature.",
    image: granCenoteImg,
  },
  {
    name: "Santuario de Cenotes",
    description: "Enjoy a unique excursion full of culture, history and nature.",
    image: cenotesSrc,
  },
  {
    name: "Cenote Calavera",
    description: "This cenote gets its name from the three holes in the roof of the cenote that resemble a skull.",
    image: casaTortugaImg,
  },
  {
    name: "Zemway",
    description: "A semi-cave that impresses with its jumping platforms and turquoise blue waters.",
    image: granCenoteImg,
  },
  {
    name: "Suytun",
    description: "Noted for having one of the most beautiful cenotes in the Yucatan Peninsula, the Suytun resort is located within a cattle ranch with four cenotes.",
    image: suytunImg,
  },
];

const CenotesPage = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-3xl md:text-5xl font-semibold text-primary mb-16 uppercase">
            Explore the Mysteries of Mexico's Cenotes...
          </h1>
          <div className="space-y-20">
            {cenotes.map((cenote, i) => (
              <DestinationCard key={cenote.name + i} {...cenote} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CenotesPage;
