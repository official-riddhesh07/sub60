import { FaFire, FaDumbbell, FaUsers, FaRunning, FaCampground } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: <FaFire className="text-4xl text-primary" />,
      title: "Weight Loss Program",
      description: "Targeted fat burning workouts designed to help you shed pounds efficiently."
    },
    {
      icon: <FaDumbbell className="text-4xl text-primary" />,
      title: "Muscle Building Program",
      description: "Structured strength training to help you build lean muscle mass."
    },
    {
      icon: <FaUsers className="text-4xl text-primary" />,
      title: "Personalized Team Training",
      description: "Small group sessions with personalized attention from our coaches."
    },
    {
      icon: <FaRunning className="text-4xl text-primary" />,
      title: "Sports Specific Training",
      description: "Enhance your athletic performance with sport-focused conditioning."
    },
    {
      icon: <FaCampground className="text-4xl text-primary" />,
      title: "Outdoor Boot Camp",
      description: "Weekend outdoor sessions to challenge your limits in nature."
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">WHAT WE PROVIDE</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Services
