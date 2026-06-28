import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { handleImageError } from '../lib/utils';

const coaches = [
  {
    name: 'Kumar Mannava',
    title: 'Founder & Head Coach',
    image: '/images/coach-1.jpg',
  },
  {
    name: 'Arvind Rathod',
    title: 'Head of Nutrition & Cafe',
    image: '/images/coach-3.jpg',
  },
  {
    name: 'Priya Sharma',
    title: 'Senior Strength Coach',
    image: '/images/coach-2.jpg',
  },
  {
    name: 'Rahul Verma',
    title: 'Functional Specialist',
    image: '/images/coach-4.jpg',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-[#111111]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-body text-sm font-medium uppercase tracking-widest text-[#E53935] mb-3">
            / Our Coaches
          </p>
          <h2 className="font-heading font-bold uppercase text-section-heading text-white mb-3">
            MEET THE <span className="font-italic-accent text-[#E53935]">experts.</span>
          </h2>
          <p className="font-body text-base text-[#B0B0B0] max-w-md">
            India's finest fitness minds and celebrity transformation specialists, led by master trainer Kumar Mannava.
          </p>
        </motion.div>

        {/* Coaches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 * index }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-[#111111] cursor-pointer"
            >
              {/* Image */}
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={handleImageError}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

              {/* Content - appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-xl font-bold uppercase text-white mb-1">
                  {coach.name}
                </h3>
                <p className="font-body text-sm text-[#E53935] font-medium">
                  {coach.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/coach"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-wide text-white hover:text-[#E53935] transition-colors group"
          >
            View All Coaches
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
