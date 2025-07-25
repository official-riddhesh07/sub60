"use client";
import { motion } from "framer-motion";
import { Dumbbell, Flame, Trees, Trophy, Users } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

type PlanKey = "monthly" | "quarterly" | "halfYearly" | "annual";

export default function Home() {
  const [activePlan, setActivePlan] = useState<PlanKey>("monthly");

  const testimonials = [
    {
      id: 1,
      name: "Rahul K.",
      location: "Velachery",
      quote: "Lost 12kg in 3 months with Sub 60! The trainers are phenomenal.",
      before: "/before1.jpg",
      after: "/after1.jpg",
    },
    {
      id: 2,
      name: "Priya M.",
      location: "Velachery",
      quote: "Gained 5kg of muscle in my first quarter. Best decision ever!",
      before: "/before2.jpg",
      after: "/after2.jpg",
    },
    {
      id: 3,
      name: "Vikram S.",
      location: "Velachery",
      quote:
        "My athletic performance improved dramatically with their sports training.",
      before: "/before3.jpg",
      after: "/after3.jpg",
    },
  ];

  const services = [
    {
      id: 1,
      title: "Weight Loss Program",
      description: "Science-backed fat loss programs",
      icon: <Flame className="w-10 h-10 text-red-500" />,
    },
    {
      id: 2,
      title: "Muscle Building Program",
      description: "Structured hypertrophy training",
      icon: <Dumbbell className="w-10 h-10 text-red-500" />,
    },
    {
      id: 3,
      title: "Personalized Team Training",
      description: "Small group coaching",
      icon: <Users className="w-10 h-10 text-red-500" />,
    },
    {
      id: 4,
      title: "Sports Specific Training",
      description: "Sport-specific conditioning",
      icon: <Trophy className="w-10 h-10 text-red-500" />,
    },
    {
      id: 5,
      title: "Outdoor Boot Camps",
      description: "Weekend functional training",
      icon: <Trees className="w-10 h-10 text-red-500" />,
    },
  ];

  const pricingPlans = {
    monthly: {
      price: "₹5,500",
      period: "per month",
      features: [
        "Access to all programs",
        "Affordable Personal Training",
        "Free Bootcamp Every Weekend",
      ],
    },
    quarterly: {
      price: "₹13,500",
      period: "for 3 months",
      features: [
        "Access to all programs",
        "Affordable Personal Training",
        "Free Bootcamp Every Weekend",
        "1 Free Nutrition Consultation",
      ],
    },
    halfYearly: {
      price: "₹19,500",
      period: "for 6 months",
      features: [
        "Access to all programs",
        "Affordable Personal Training",
        "Free Bootcamp Every Weekend",
        "2 Free Nutrition Consultations",
        "1 Free Body Composition Analysis",
      ],
    },
    annual: {
      price: "₹29,500",
      period: "for 12 months",
      features: [
        "Access to all programs",
        "Affordable Personal Training",
        "Free Bootcamp Every Weekend",
        "4 Free Nutrition Consultations",
        "2 Free Body Composition Analyses",
        "Free Sub 60 Merchandise",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>
          Sub 60 | Redefining Lifestyle - Velachery's Elite Fitness Zone
        </title>
        <meta
          name="description"
          content="Velachery's elite transformation zone for fat loss, muscle gain, and athlete training."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-8 right-8 bg-green-500 p-3 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://wa.me/yournumber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </motion.div>

      {/* Navigation */}
      <nav className="bg-white py-4 px-6  top-0 z-40 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="Sub 60 Logo"
              width={100}
              height={100}
              className="mr-2"
            />
          </motion.div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-black hover:text-red-500 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black hover:text-red-500 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-black hover:text-red-500 transition"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-black hover:text-red-500 transition"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-black hover:text-red-500 transition"
            >
              Results
            </a>
            <a
              href="#contact"
              className="text-black hover:text-red-500 transition"
            >
              Contact
            </a>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 px-6 py-2 rounded-md font-medium"
          >
            Book Free Trial
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        {/* Replace with your actual video or image */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Achieve More in </span>
            <span className="text-red-500">Less Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Velachery's elite transformation zone for fat loss, muscle gain, and
            athlete training.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#cc0000" }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 px-8 py-3 rounded-md font-bold text-lg"
          >
            Book a Free Trial
          </motion.button>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Alpha Fitness to Sub 60: A New Era
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <div className="relative h-64 md:h-96 w-96 bg-gray-800 rounded-lg overflow-hidden">
                {/* Replace with your actual image */}
                <div className="absolute inset-0 bg-[url('/about-image.jpg')] bg-cover bg-center"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h3 className="text-2xl font-bold mb-6">
                Redefining Fitness Lifestyles
              </h3>
              <p className="mb-4 text-gray-300">
                Our journey began with Alpha Fitness, where we transformed
                hundreds of lives through dedicated training and nutrition
                guidance. Now, as Sub 60, we're taking that experience to the
                next level.
              </p>
              <p className="mb-4 text-gray-300">
                Sub 60 represents our philosophy: maximum results in minimum
                time. We've refined our methods to deliver faster, more
                sustainable transformations through science-backed training
                protocols.
              </p>
              <p className="text-gray-300">
                Every program at Sub 60 is designed to help you break through
                plateaus and achieve what you thought was impossible in less
                time than you imagined.
              </p>

              <motion.div whileHover={{ x: 5 }} className="mt-8">
                <a
                  href="#pricing"
                  className="text-red-500 font-semibold flex items-center"
                >
                  Explore Our Programs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Services We Offer
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, backgroundColor: "#2C2C2C" }}
                className="bg-gray-900 p-8 rounded-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Membership Plans
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="flex justify-center mb-8 md:mb-12">
            <div className="bg-gray-800 p-1 rounded-lg flex flex-wrap justify-center gap-1 md:gap-0 md:flex-nowrap">
              <button
                onClick={() => setActivePlan("monthly")}
                className={`px-3 py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-md text-sm md:text-base ${
                  activePlan === "monthly"
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-300 hover:text-white"
                } transition-colors duration-200`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActivePlan("quarterly")}
                className={`px-3 py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-md text-sm md:text-base ${
                  activePlan === "quarterly"
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-300 hover:text-white"
                } transition-colors duration-200`}
              >
                Quarterly
              </button>
              <button
                onClick={() => setActivePlan("halfYearly")}
                className={`px-3 py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-md text-sm md:text-base ${
                  activePlan === "halfYearly"
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-300 hover:text-white"
                } transition-colors duration-200`}
              >
                Half-Yearly
              </button>
              <button
                onClick={() => setActivePlan("annual")}
                className={`px-3 py-1 md:px-4 md:py-1 lg:px-6 lg:py-2 rounded-md text-sm md:text-base ${
                  activePlan === "annual"
                    ? "bg-red-500 text-white"
                    : "bg-transparent text-gray-300 hover:text-white"
                } transition-colors duration-200`}
              >
                Annual
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black p-8 rounded-lg max-w-2xl mx-auto border border-gray-800"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 capitalize">
                {activePlan} Plan
              </h3>
              <div className="text-4xl font-bold text-red-500 mb-2">
                {pricingPlans[activePlan].price}
              </div>
              <div className="text-gray-400">
                {pricingPlans[activePlan].period}
              </div>
            </div>

            <ul className="mb-8 space-y-3">
              {pricingPlans[activePlan].features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#cc0000" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-red-500 py-3 rounded-md font-bold"
            >
              Book Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformation Stories
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="relative h-48 bg-gray-800">
                  {/* Replace with actual before/after images */}
                  <div className="absolute inset-0 bg-[url('/before-after.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Instagram Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="h-64 bg-gray-800 rounded-lg overflow-hidden mb-4">
                {/* Replace with actual map embed */}
                <div className="w-full h-[250px] md:h-[400px] overflow-hidden">
                  <iframe
                    className="w-full h-full border-0"
                    src="https://www.google.com/maps/embed/v1/place?q=Alpha+Fitness+Club,+Velachery,+Chennai&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <p className="text-gray-300">
                123 Fitness Street, Velachery, Chennai
              </p>
              <p className="text-gray-300">Open: Mon-Sat 6AM - 10PM</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6">Follow Our Journey</h2>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {/* Replace with actual Instagram feed */}
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="aspect-square bg-gray-800 rounded overflow-hidden"
                  >
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-gray-400">IG Post {item}</span>
                    </div>
                  </div>
                ))}
              </div>
              <motion.a
                href="https://instagram.com/sub_60_"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-md font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                @sub_60_
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <span className="text-red-500 font-bold text-2xl mr-2">
                  SUB
                </span>
                <span className="text-white font-bold text-2xl">60</span>
              </div>
              <p className="text-gray-400 mt-2">Redefining Lifestyle</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6 md:mb-0">
              <div>
                <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#home"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#pricing"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#about"
                      className="text-gray-400 hover:text-white transition"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#testimonials"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Results
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Sub 60. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}