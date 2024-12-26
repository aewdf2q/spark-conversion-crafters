import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria",
    role: "Fitness Coach",
    content: "My inbox was chaotic, but not anymore. Now I have more time to communicate with clients faster.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  },
  {
    name: "James",
    role: "Business Owner",
    content: "Their system is like an extra team member who never sleeps. I've saved countless hours and noticed better lead quality.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
  {
    name: "Laura",
    role: "Online Coach",
    content: "I was skeptical at first, but this automation is smart, responsive, and human-like. My clients and I absolutely love it.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border-none">
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