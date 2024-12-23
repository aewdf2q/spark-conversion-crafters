import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#0A0A0A]">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl">
        Transform Your Business With{" "}
        <span className="text-primary">High-Converting Copy</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        Partner with Spark Chamber to create compelling content that drives results
        and grows your revenue
      </p>
      <Button
        size="lg"
        className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg animate-float"
      >
        Start Your Journey Today
      </Button>
    </section>
  );
};