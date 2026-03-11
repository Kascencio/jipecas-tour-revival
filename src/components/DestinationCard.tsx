interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
}

const DestinationCard = ({ name, description, image }: DestinationCardProps) => {
  return (
    <div className="space-y-6">
      <div className="overflow-hidden rounded-lg shadow-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-[400px] object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-center space-y-3">
        <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground italic">
          {name}
        </h3>
        <p className="font-body text-muted-foreground text-lg italic max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;
