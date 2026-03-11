import transfersImg from "@/assets/transfers.jpg";

const TransfersSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center text-foreground mb-12">
          Transfers
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-lg shadow-xl">
            <img
              src={transfersImg}
              alt="Professional transportation van for private transfers"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Cancún – Airport</h3>
              <p className="font-body text-muted-foreground">Private transfers to and from Cancún International Airport.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Mérida – Airport</h3>
              <p className="font-body text-muted-foreground">Comfortable rides to and from Mérida Airport.</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Hotels</h3>
              <p className="font-body text-muted-foreground">Door-to-door service to any hotel in the Riviera Maya.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransfersSection;
