export const Process = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our 5-Step Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            {
              step: "1",
              title: "Discovery & Analysis",
              description: "We analyze your current workflow to identify major time sinks and opportunities for automation."
            },
            {
              step: "2",
              title: "Strategic Proposal",
              description: "Within 24 hours, we create a custom plan detailing how our ACI Protocol will tackle your specific needs."
            },
            {
              step: "3",
              title: "MVP Creation",
              description: "We develop a minimum viable product (MVP), holding weekly review calls to ensure everything meets your expectations."
            },
            {
              step: "4",
              title: "Presentation & Final Tweaks",
              description: "We showcase functionality, gather final feedback, and make improvements before collecting the remaining setup fee."
            },
            {
              step: "5",
              title: "Monitoring & Optimization",
              description: "We monitor performance in real-time, refining the system before transitioning into an ongoing retainer model."
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};