import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Attention */}
      <Hero />
      
      {/* Interest */}
      <Stats />
      
      {/* Desire */}
      <Testimonials />
      
      {/* Action */}
      <CTASection />
    </div>
  );
};

export default Index;