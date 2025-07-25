const Location = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Location</h2>
            <p className="text-xl mb-6">
              Visit us at our state-of-the-art facility in Velachery, Chennai
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p>123 Fitness Street, Velachery</p>
              <p>Chennai, Tamil Nadu 600042</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
              <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 8:00 PM</p>
            </div>
            
            <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition">
              Get Directions
            </button>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-xl overflow-hidden">
            {/* Embedded Google Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.269036547987!2d80.21985731534432!3d13.021263817428297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679b4a3f7a0d%3A0x5e5e5e5e5e5e5e5e!2sVelachery%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Follow Our Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Check out our Instagram for daily workouts, transformations, and community highlights
          </p>
          
          {/* Instagram Feed - Would need to use Instagram API or a plugin */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
            {/* Placeholder for Instagram images */}
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                {/* Instagram image would go here */}
              </div>
            ))}
          </div>
          
          <a 
            href="https://instagram.com/sub_60_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @sub_60_
          </a>
        </div>
      </div>
    </section>
  )
}
export default Location