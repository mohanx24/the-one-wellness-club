import { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useInView } from 'framer-motion';

export default function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative h-[500px] overflow-hidden bg-[#0A0A0A] border-t border-[#111111]/30"
    >
      {/* Background Image with Parallax-like fixed attachment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/cta-barbell.jpg)' }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            THIS IS WHERE
          </h2>
          <h2 className="font-heading font-bold uppercase text-4xl sm:text-5xl lg:text-6xl text-[#E53935] mb-8">
            CHAMPIONS ARE MADE.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full btn-red-gradient font-body text-sm font-semibold uppercase tracking-wide text-white block w-fit mx-auto"
          >
            Book a Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
