export const Metrics = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-4">$2.1M+</h3>
            <p className="text-gray-300">Revenue Generated for Clients</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-4">85%</h3>
            <p className="text-gray-300">Average Conversion Rate Increase</p>
          </div>
          <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg text-center">
            <h3 className="text-4xl font-bold text-primary mb-4">12,000+</h3>
            <p className="text-gray-300">Leads Generated Monthly</p>
          </div>
        </div>
      </div>
    </section>
  );
};