export const WhatsIncluded = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">What's Included</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 p-6 rounded-lg">
            <p className="text-gray-300">1. After our initial meeting, we'll craft a custom solution plan within 24 hours and schedule a follow-up call to present it.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 p-6 rounded-lg">
            <p className="text-gray-300">2. Once approved, we develop your MVP over 30 working days with weekly check-ins and a final demonstration before collecting the remaining setup fee.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 p-6 rounded-lg">
            <p className="text-gray-300">3. Next, we monitor and refine performance in the second month, ensuring a smooth hand-off and ongoing updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};