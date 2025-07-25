'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ()  => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">SUB</span> & <span className="text-white">O</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="#services" className="hover:text-primary transition">Services</Link>
            <Link href="#pricing" className="hover:text-primary transition">Pricing</Link>
            <Link href="#testimonials" className="hover:text-primary transition">Results</Link>
            <Link href="#contact" className="hover:text-primary transition">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link 
              href="/" 
              className="block hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#services" 
              className="block hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#pricing" 
              className="block hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#testimonials" 
              className="block hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Results
            </Link>
            <Link 
              href="#contact" 
              className="block hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
export default Header