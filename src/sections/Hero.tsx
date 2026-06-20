import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="/images/hero-athlete.jpg"
          alt="Athlete training"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full items-center pt-20">
          {/* Left - Text Content */}
          <div className="max-w-xl">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-sm font-medium uppercase tracking-[0.1em] text-[#B0B0B0] mb-6"
            >
              THE ONE FITNESS STUDIO — EST. 2018
            </motion.p>

            {/* Headline */}
            <div className="mb-6">
              {['BUILD YOUR LEGACY.', 'SEIZE YOUR', 'POWER.'].map((line, index) => (
                <motion.h1
                  key={line}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.35 + index * 0.15 }}
                  className={`font-heading font-bold uppercase text-display ${
                    index === 2 ? 'text-[#E53935]' : 'text-white'
                  }`}
                >
                  {line}
                </motion.h1>
              ))}
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-body text-lg text-[#B0B0B0] mb-8 max-w-md"
            >
              Elite coaching. Premium equipment. A community that pushes you further — whatever your goal.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => {
                  document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-red-gradient px-8 py-4 rounded-full font-body text-sm font-semibold uppercase tracking-wide text-white"
              >
                Get Started Today
              </button>
              <button
                onClick={() => setShowVideo(true)}
                className="group flex items-center gap-3 px-8 py-4 rounded-full border border-white/30 font-body text-sm font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-[#0A0A0A] transition-all duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full border border-current">
                  <Play className="w-3 h-3 ml-0.5" />
                </span>
                Watch Teaser
              </button>
            </motion.div>
          </div>

          {/* Right - Floating Cards */}
          <div className="hidden lg:block relative h-[500px]">
            {/* Trending Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="glass-card absolute top-8 right-0 rounded-xl p-4 max-w-[180px]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E53935] mb-1">
                Trending
              </p>
              <p className="text-sm font-semibold text-white">HIIT Training</p>
              <p className="text-xs text-[#B0B0B0]">Mon & Wed 7PM</p>
            </motion.div>

            {/* This Week Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="glass-card absolute top-40 right-12 rounded-xl p-4 max-w-[180px]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E53935] mb-1">
                This Week
              </p>
              <p className="text-lg font-bold text-white">110+</p>
              <p className="text-xs text-[#B0B0B0]">new members joined THE ONE</p>
            </motion.div>

            {/* Trusted Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4, type: 'spring', stiffness: 200 }}
              className="absolute bottom-20 right-4 flex items-center gap-3"
            >
              {/* Avatar Stack */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br from-[#E53935] to-[#FF6F60] flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-white">{i}</span>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#B0B0B0]">
                  Trusted By
                </p>
                <p className="text-sm font-bold text-white">2,000+ Members</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

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
    </section>
  );
}
