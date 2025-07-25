'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image/Video */}
      <div className="absolute inset-0 bg-black/50 z-0">
        <Image 
          src="/images/hero/hero-bg.jpg"
          alt="Sub 60 Fitness"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/images/logo.png"
            alt="Sub 60 Logo"
            width={200}
            height={100}
            className="mx-auto mb-4"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Achieve More in Less Time <span className="text-primary">Sub 60</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Velachery's elite transformation zone for fat loss, muscle gain, and athlete training.
          </p>
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105">
            Book a Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  )
}
export default Hero