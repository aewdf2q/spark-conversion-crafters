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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <img src="/lovable-uploads/3ada8791-ef32-47f8-82b2-fedbbe573583.png" alt="Logo" className="h-12 w-12" />
        <div className="flex items-center gap-8">
          <button onClick={() => scrollToSection("about-us")} className="text-white hover:text-primary">
            About Us
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-white hover:text-primary">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-white hover:text-primary">
            FAQ
          </button>
        </div>
        <button 
          onClick={() => document.querySelector('[data-calendly-url]')?.click()}
          className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 hover:opacity-90 text-white px-4 py-2 rounded-md"
        >
          Let's Connect
        </button>
      </div>
    </nav>
  );
};