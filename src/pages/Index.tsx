import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Hero />
      <Stats />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Index;