import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { FAQ } from "@/components/FAQ";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";
import { UniqueMechanism } from "@/components/UniqueMechanism";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Stats } from "@/components/Stats";
import { Process } from "@/components/Process";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <UniqueMechanism />
      <Stats />
      <WhyChooseUs />
      <div id="testimonials">
        <Testimonials />
      </div>
      <Process />
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="faq">
        <FAQ />
      </div>
    </div>
  );
};

export default Index;