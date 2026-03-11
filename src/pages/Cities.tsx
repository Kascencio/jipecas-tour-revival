import PageLayout from "@/components/PageLayout";
import DestinationCard from "@/components/DestinationCard";
import valladolidImg from "@/assets/valladolid.jpg";
import meridaImg from "@/assets/merida.jpg";
import cancunImg from "@/assets/cancun.jpg";
import playaImg from "@/assets/playa-del-carmen.jpg";
import citiesImg from "@/assets/cities.jpg";

const cities = [
  {
    name: "Valladolid",
    description: "The pinturesque Valladolid its the second largest city in Yucatán.",
    image: valladolidImg,
  },
  {
    name: "Mérida",
    description: "Mérida its a city rich in art, history and tradition.",
    image: meridaImg,
  },
  {
    name: "Chetumal",
    description: "The capital city of Quintana Roo, the bay of Chetumal sorrounds the city.",
    image: citiesImg,
  },
  {
    name: "Cancún",
    description: "Swim in its turquoise beaches or visit the shopping malls.",
    image: cancunImg,
  },
  {
    name: "Playa del Carmen",
    description: "Full a lively bars, restaurants, beach clubs, shops and hotels. Spend a night in the party city.",
    image: playaImg,
  },
];

const CitiesPage = () => {
  return (
    <PageLayout>
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-20">
            {cities.map((city, i) => (
              <DestinationCard key={city.name + i} {...city} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CitiesPage;
