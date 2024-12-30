export const Stats = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Common Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-lg">
            <h3 className="text-2xl font-bold text-red-500 mb-2">Overwhelmed by DMs</h3>
            <p className="text-gray-300">Struggling to manage an influx of messages and missing out on quality leads?</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-lg">
            <h3 className="text-2xl font-bold text-yellow-500 mb-2">Time-Consuming Qualification</h3>
            <p className="text-gray-300">Spending hours manually vetting inquiries instead of focusing on core business activities?</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-lg">
            <h3 className="text-2xl font-bold text-orange-500 mb-2">Lost Leads Due to Delays</h3>
            <p className="text-gray-300">Potential clients drop off because responses aren't quick enough to capture their interest.</p>
          </div>
        </div>
      </div>

      {/* Social Proof Metrics */}
      <div className="container mx-auto px-4 mt-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg">
            <h3 className="text-4xl font-bold text-blue-400 mb-2">85%</h3>
            <p className="text-gray-300">Reduction in Manual DM Handling Time</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-lg">
            <h3 className="text-4xl font-bold text-cyan-400 mb-2">3x</h3>
            <p className="text-gray-300">Increase in Qualified Lead Generation</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-lg">
            <h3 className="text-4xl font-bold text-purple-400 mb-2">24/7</h3>
            <p className="text-gray-300">Automated Lead Response Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};