import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section
        ref={ref}
        className="relative h-[500px] overflow-hidden bg-[#0A0A0A]"
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

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() => setShowVideo(true)}
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 font-body text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full border border-current">
              <Play className="w-3 h-3 ml-0.5" />
            </span>
            Watch Our Story
          </motion.button>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#E53935] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <video
              src="/videos/hero-teaser.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-xl"
            />
          </div>
        </motion.div>
      )}
    </>
  );
}
