import Image from 'next/image'
const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          From <span className="text-gray-500">Alpha Fitness</span> to <span className="text-primary">Sub 60</span>: A New Era
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Our journey began with Alpha Fitness, where we helped hundreds transform their lives. Now, we're taking it to the next level with Sub 60 - a fitness revolution focused on delivering maximum results in minimum time.
            </p>
            <p className="text-lg mb-6">
              Sub 60 represents our commitment to helping you achieve your fitness goals in under 60 minutes through scientifically-backed training methods and personalized coaching.
            </p>
            <p className="text-lg">
              We're not just a gym - we're a transformation zone where lifestyles are redefined.
            </p>
          </div>
          
          <div className="relative h-80 bg-gray-200 rounded-xl overflow-hidden">
            {/* Timeline or comparison image */}
            <Image 
              src="/images/about/evolution.jpg"
              alt="Alpha to Sub 60 evolution"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default About