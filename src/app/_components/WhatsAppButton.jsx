import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/919876543210?text=I'm%20interested%20in%20joining%20Sub%2060"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </a>
  )
}
export default WhatsAppButton