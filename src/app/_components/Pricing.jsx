const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">MEMBERSHIP PLANS</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl max-w-2xl mx-auto">
            PERSONAL TRAINING MADE AFFORDABLE
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2">MONTHLY</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹5,500</p>
              <button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition">
                Book Now
              </button>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2">HALF-YEARLY</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹19,500</p>
              <p className="text-sm text-gray-500 mb-4">Save ₹3,000 compared to monthly</p>
              <button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition">
                Book Now
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2">QUARTERLY</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹13,500</p>
              <p className="text-sm text-gray-500 mb-4">Save ₹3,000 compared to monthly</p>
              <button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition">
                Book Now
              </button>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold mb-2">ANNUAL</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹29,500</p>
              <p className="text-sm text-gray-500 mb-4">Save ₹36,500 compared to monthly</p>
              <button className="bg-primary hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">
            All plans include access to our weekend Outdoor Boot Camp
          </p>
        </div>
      </div>
    </section>
  )
}
export default Pricing