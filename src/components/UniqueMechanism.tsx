export const UniqueMechanism = () => {
  return (
    <section id="unique-mechanism" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Unique Approach</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-gray-300 text-lg">
            We help fitness coaches consistently book new clients from Instagram using our IG Flow Protocol without wasting hours manually qualifying leads or scheduling calls.
          </p>
          <div className="space-y-6">
            {[
              {
                q: "What is our approach?",
                a: "We deploy a specialized automation and Conversational AI framework, targeted at eliminating repetitive tasks like DM handling and appointment scheduling."
              },
              {
                q: "How does it work?",
                a: "Our IG Flow Protocol seamlessly qualifies leads, books appointments, and runs ongoing conversations 24/7."
              },
              {
                q: "Why does it work?",
                a: "We eliminate the root cause of lost time—manual back-and-forth messaging—by letting smart AI flows do the heavy lifting."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-2">{item.q}</h3>
                <p className="text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};