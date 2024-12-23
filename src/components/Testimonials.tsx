import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with Spark Chamber transformed our messaging completely. Our conversion rates doubled in just 3 months.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    content: "The team's attention to detail and understanding of our market was impressive. Best investment we've made.",
    image: "/placeholder.svg"
  },
  {
    name: "Emma Davis",
    role: "Founder, GrowthLabs",
    content: "The ROI we've seen from their copy has been incredible. They truly understand how to speak to our audience.",
    image: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-none">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};