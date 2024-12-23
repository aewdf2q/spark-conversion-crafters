import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the growing list of businesses that have revolutionized their
          content strategy with Spark Chamber
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg"
        >
          Schedule Your Strategy Call
        </Button>
      </div>
    </section>
  );
};