import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
      <footer className="bg-foreground text-background/60 text-center py-6 font-body text-sm">
        © {new Date().getFullYear()} Jipeca's Tours and Transportation. All rights reserved.
      </footer>
      <WhatsAppButton />
    </div>
  );
};

export default PageLayout;
