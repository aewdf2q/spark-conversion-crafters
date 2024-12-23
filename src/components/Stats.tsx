export const Stats = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary mb-2">93%</h3>
            <p className="text-gray-300">Client Satisfaction Rate</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary mb-2">2X</h3>
            <p className="text-gray-300">Average Revenue Increase</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold text-primary mb-2">50+</h3>
            <p className="text-gray-300">Success Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
};