import Link from 'next/link'
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-primary">SUB</span> & <span className="text-white">O</span>
            </h3>
            <p className="mb-4">
              REDEFINING LIFESTYLE through innovative fitness programs and personalized training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition">Home</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">Services</Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-primary transition">Pricing</Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary transition">Results</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="hover:text-primary transition">Weight Loss Program</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">Muscle Building</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">Team Training</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">Sports Training</Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-primary transition">Outdoor Boot Camp</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">CONTACT US</h4>
            <address className="not-italic">
              <p className="mb-2">123 Fitness Street</p>
              <p className="mb-2">Velachery, Chennai</p>
              <p className="mb-4">Tamil Nadu 600042</p>
              <p className="mb-2">Phone: +91 9876543210</p>
              <p>Email: info@sub60.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SUB & O. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer   