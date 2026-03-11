import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const destinationLinks = [
  { label: "Zonas Arqueológicas", href: "/destinations/archeological-sites" },
  { label: "Cenotes", href: "/destinations/cenotes" },
  { label: "Lagoons", href: "/destinations/lagoons" },
  { label: "Ciudades", href: "/destinations/cities" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-lg font-semibold text-primary">
          J&J Tours & Transportation
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase"
          >
            Inicio
          </Link>

          {/* Destinations Dropdown */}
          <div className="relative group">
            <button className="font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase flex items-center gap-1">
              Destinations
              <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-foreground/95 backdrop-blur-md rounded-lg shadow-xl border border-background/10 py-2 min-w-[200px]">
                {destinationLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 font-heading text-sm font-medium text-background/80 hover:text-primary hover:bg-background/5 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/transportation"
            className="font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase"
          >
            Transportación
          </Link>
          <Link
            to="/contact"
            className="font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase"
          >
            Contáctanos
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-background"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md px-6 pb-6 space-y-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase"
          >
            Inicio
          </Link>
          <button
            onClick={() => setDestOpen(!destOpen)}
            className="flex items-center gap-1 font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase"
          >
            Destinations
            <ChevronDown className={`w-3 h-3 transition-transform ${destOpen ? "rotate-180" : ""}`} />
          </button>
          {destOpen && (
            <div className="pl-4 space-y-3">
              {destinationLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => { setOpen(false); setDestOpen(false); }}
                  className="block font-heading text-sm font-medium text-background/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
          <Link
            to="/transportation"
            onClick={() => setOpen(false)}
            className="block font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase"
          >
            Transportación
          </Link>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block font-heading text-sm font-medium text-background/80 hover:text-primary transition-colors tracking-wide uppercase"
          >
            Contáctanos
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
