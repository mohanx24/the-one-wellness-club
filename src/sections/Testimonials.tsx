import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

// Real scraped testimonials from Google Maps for THE ONE Jubilee Hills
const testimonials = [
  {
    category: 'MEMBER REVIEW',
    quote: '"One of the best premium gyms in Hyderabad. The facilities are world-class with advanced equipment, a luxurious spa, and a dedicated staff."',
    author: 'Shabarish Atyam',
    role: 'Local Guide',
  },
  {
    category: 'WELLNESS & NUTRITION',
    quote: '"The One is India\'s first 5-star gym with a wellness cafe. The facility is clean, spacious, and well-organized, with a wide variety of machines and free weights."',
    author: 'Naveen Shah',
    role: 'Elite Member',
  },
  {
    category: 'FOUNDER\'S EXPERTISE',
    quote: '"I’ve been following and known Kumar for more than a decade. His knowledge and dedication is something else and it definitely reflects in this place. One of the best gyms in the country."',
    author: 'Rajiv Polur',
    role: 'Local Guide',
  },
  {
    category: 'EXPERT COACHING',
    quote: '"Best fitness club in the country so far. A premium place run by an evolved human Kumar Mannava with all his expertise and skill."',
    author: 'Mahesh Kumar',
    role: 'VIP Member',
  },
  {
    category: 'WORLD CLASS DESIGN',
    quote: '"This is by far the best gym facility I have come across in India or maybe the world. The place was done very thoughtfully with best possible equipment and heavy focus on wellness."',
    author: 'K Poorna Kapil Reddy',
    role: 'Club Member',
  },
  {
    category: 'LUXURY RETREAT',
    quote: '"From the moment you walk in, this gym redefines what luxury fitness means. Every inch of the space is curated with precision — from the state-of-the-art equipment to the spa-like changing rooms."',
    author: 'Pooja Rao',
    role: 'VIP Elite Member',
  },
  {
    category: 'COMPLETE DESTINATION',
    quote: '"The One – Jubilee Hills is more than just a gym — it’s a complete wellness destination. The state-of-the-art equipment, luxurious spa, and healthy café create an unmatched environment."',
    author: 'Afnan Naveed',
    role: 'Elite Member',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-[#111111]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-body text-sm font-medium uppercase tracking-widest text-[#E53935] mb-3">
            / Testimonials
          </p>
          <h2 className="font-heading font-bold uppercase text-section-heading text-white">
            REAL MEMBERS. <span className="font-italic-accent text-[#E53935]">real reviews.</span>
          </h2>
          <p className="font-body text-base text-[#B0B0B0] max-w-md mx-auto mt-4">
            Hear from our members about their transformation journey and luxury wellness experience at THE ONE.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-[#111111] border border-[#222222] rounded-xl p-8 hover:border-[#E53935]/30 transition-colors flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#E53935]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#222222] mb-4" />

                {/* Quote Text */}
                <p className="font-body text-base text-white/90 italic leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
              </div>

              <div>
                <div className="border-t border-[#222222] pt-4 flex justify-between items-center">
                  <div>
                    <p className="font-body text-sm font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="font-body text-[10px] text-[#666666] font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                  <span className="font-body text-[9px] font-bold text-[#E53935] uppercase tracking-wider bg-[#E53935]/10 px-2.5 py-0.5 rounded border border-[#E53935]/20">
                    {testimonial.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

