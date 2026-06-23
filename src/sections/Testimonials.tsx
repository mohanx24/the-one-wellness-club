import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeader from '../components/shared/SectionHeader';
import StarRating from '../components/shared/StarRating';

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

// Split testimonials into two sets for the two scrolling rows
const row1 = [...testimonials];
const row2 = [testimonials[4], testimonials[5], testimonials[6], testimonials[0], testimonials[1], testimonials[2], testimonials[3]];

// Custom marquee styles to inject dynamically
const customStyles = `
  @keyframes marquee-scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  @keyframes marquee-scroll-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0%); }
  }
  .animate-marquee-left {
    display: flex;
    width: max-content;
    animation: marquee-scroll-left var(--speed, 45s) linear infinite;
  }
  .animate-marquee-right {
    display: flex;
    width: max-content;
    animation: marquee-scroll-right var(--speed, 45s) linear infinite;
  }
  .marquee-container:hover .animate-marquee-left,
  .marquee-container:hover .animate-marquee-right {
    animation-play-state: paused;
  }
  .glass-testimonial-card {
    background: rgba(17, 17, 17, 0.4);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  }
`;

interface Testimonial {
  category: string;
  quote: string;
  author: string;
  role: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.author
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="glass-testimonial-card w-[320px] sm:w-[420px] shrink-0 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#E53935]/30 hover:shadow-[0_0_25px_rgba(229,57,53,0.08)] transition-all duration-300">
      <div>
        {/* Star Rating */}
        <div className="mb-4">
          <StarRating />
        </div>

        {/* Quote Icon */}
        <Quote className="w-7 h-7 text-white/5 mb-4" />

        {/* Quote Text */}
        <p className="font-body text-sm sm:text-base text-white/85 italic leading-relaxed mb-6">
          {testimonial.quote}
        </p>
      </div>

      <div>
        {/* Divider and Author details */}
        <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
          <div className="w-10 h-10 rounded-full bg-[#E53935]/10 border border-[#E53935]/20 flex items-center justify-center text-xs font-bold text-[#E53935]">
            {initials}
          </div>
          <div>
            <p className="font-body text-xs sm:text-sm font-semibold text-white">
              {testimonial.author}
            </p>
            <p className="font-body text-[10px] text-[#666666] font-medium mt-0.5">
              {testimonial.role}
            </p>
          </div>
          <span className="ml-auto font-body text-[8px] sm:text-[9px] font-bold text-[#E53935] uppercase tracking-wider bg-[#E53935]/5 px-2 py-0.5 rounded border border-[#E53935]/15">
            {testimonial.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-[#111111]/30 relative overflow-hidden">
      <style>{customStyles}</style>

      {/* Subtle ambient gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#E53935]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#E53935]/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Side Fading Overlays (Framer-like edge fade out) */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-44 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-44 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16" ref={ref}>
        <SectionHeader
          tag="/ Testimonials"
          title={<>REAL MEMBERS. <span className="font-italic-accent text-[#E53935]">real results.</span></>}
          description="Hear from our members about their transformation journey and luxury wellness experience at THE ONE."
          isInView={isInView}
          centered
        />
      </div>

      {/* Loop Carousel Tracks Container */}
      <div className="space-y-6 w-full overflow-hidden marquee-container relative py-2">
        {/* Track 1: Scrolling Left */}
        <div className="flex gap-6 overflow-hidden w-full">
          <div 
            className="animate-marquee-left flex gap-6" 
            style={{ '--speed': '45s' } as React.CSSProperties}
          >
            {/* Render two copies of row1 for seamless wrap-around loop */}
            {[...row1, ...row1].map((item, idx) => (
              <TestimonialCard key={`track1-${idx}`} testimonial={item} />
            ))}
          </div>
        </div>

        {/* Track 2: Scrolling Right */}
        <div className="hidden md:flex gap-6 overflow-hidden w-full">
          <div 
            className="animate-marquee-right flex gap-6" 
            style={{ '--speed': '55s' } as React.CSSProperties}
          >
            {/* Render two copies of row2 for seamless wrap-around loop */}
            {[...row2, ...row2].map((item, idx) => (
              <TestimonialCard key={`track2-${idx}`} testimonial={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

