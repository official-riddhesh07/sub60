'use client '
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "Rahul K.",
    location: "Velachery",
    text: "Sub 60 transformed my body in just 3 months. The trainers are knowledgeable and push you to your limits. Lost 12kg of fat and gained muscle definition I never thought possible!",
    before: "/images/testimonials/rahul-before.jpg",
    after: "/images/testimonials/rahul-after.jpg"
  },
  {
    name: "Priya M.",
    location: "Velachery",
    text: "The team training sessions are amazing! The energy is contagious and the results speak for themselves. I've never been this consistent with any workout program before.",
    before: "/images/testimonials/priya-before.jpg",
    after: "/images/testimonials/priya-after.jpg"
  },
  {
    name: "Arjun S.",
    location: "Velachery",
    text: "As a former athlete, I needed training that would challenge me. Sub 60's sports-specific program helped me regain my competitive edge and improve my performance significantly.",
    before: "/images/testimonials/arjun-before.jpg",
    after: "/images/testimonials/arjun-after.jpg"
  }
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Success Stories</h2>
        
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-md h-full">
                <div className="flex mb-6 space-x-4">
                  <div className="w-1/2 relative h-40">
                    <Image 
                      src={testimonial.before}
                      alt={`${testimonial.name} before`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-1 text-sm">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative h-40">
                    <Image 
                      src={testimonial.after}
                      alt={`${testimonial.name} after`}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-primary/70 text-white text-center py-1 text-sm">
                      After
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-medium">
                  <p>{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Testimonials