import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { AboutUs } from "@/components/AboutUs";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";
import { Metrics } from "@/components/Metrics";
import { CalendlyButton } from "@/components/CalendlyButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Stats />
      <Process />
      <Testimonials />
      <CalendlyButton className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 hover:opacity-90 text-white px-8 py-6 text-lg rounded-md" />
      <Metrics />
      <AboutUs />
      <FAQ />
    </div>
  );
};

export default Index;