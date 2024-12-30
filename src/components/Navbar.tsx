import { Link } from "react-router-dom";
import { CalendlyButton } from "./CalendlyButton";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img src="/lovable-uploads/3ada8791-ef32-47f8-82b2-fedbbe573583.png" alt="Logo" className="h-12 w-12" />
        <div className="flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-white hover:text-primary">
            Services
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-white hover:text-primary">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-white hover:text-primary">
            FAQ
          </button>
        </div>
        <CalendlyButton className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md">
          Let's Connect
        </CalendlyButton>
      </div>
    </nav>
  );
};