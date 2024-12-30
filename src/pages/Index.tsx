import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";
import { AboutUs } from "@/components/AboutUs";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Stats />
      <Process />
      <Testimonials />
      <AboutUs />
      <FAQ />
    </div>
  );
};

export default Index;