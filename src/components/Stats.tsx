export const Stats = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Client Logos */}
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="w-32 h-16 bg-gray-800 rounded flex items-center justify-center text-gray-400">
                Logo {index}
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl font-bold text-center text-white mb-12">Common Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-2">Low Conversion Rates</h3>
            <p className="text-gray-300">Struggling to turn visitors into customers?</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-lg">
            <h3 className="text-2xl font-bold text-yellow-500 mb-2">Unclear Messaging</h3>
            <p className="text-gray-300">Your value proposition isn't resonating?</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">Lost Opportunities</h3>
            <p className="text-gray-300">Missing out on potential clients?</p>
          </div>
        </div>
      </div>
    </section>
  );
};