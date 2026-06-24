import { motion } from 'framer-motion';

export default function FinalCta() {
  return (
    <section className="py-16 lg:py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-20 text-center"
          style={{
            background: 'radial-gradient(ellipse at center, #E53935 0%, #8B0000 100%)',
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-heading font-bold uppercase text-3xl sm:text-4xl lg:text-5xl text-white mb-8"
            >
              YOUR STRONGEST SELF STARTS HERE.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={() => {
                  document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-4 rounded-full bg-white text-[#E53935] font-body text-sm font-semibold uppercase tracking-wide hover:bg-[#0A0A0A] hover:text-white transition-all duration-300"
              >
                Book a Free Session
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
