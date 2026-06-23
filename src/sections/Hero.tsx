import { motion } from 'framer-motion';
import CtaButton from '../components/shared/CtaButton';

export default function Hero() {

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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="flex flex-wrap gap-4"
            >
              <CtaButton onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Started Today
              </CtaButton>
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
    </section>
  );
}
