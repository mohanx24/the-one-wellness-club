import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../components/shared/SectionHeader';

interface StatItemProps {
  value: string;
  label: string;
  delay: number;
  isInView: boolean;
}

function StatItem({ value, label, delay, isInView }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState('0');

  const isDecimal = value.includes('.');
  const numericValue = isDecimal ? parseFloat(value) : parseInt(value.replace(/\D/g, ''), 10);
  const suffix = isDecimal ? value.replace(/[0-9.]/g, '') : value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      const start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        if (isDecimal) {
          const current = (start + (numericValue - start) * easeOut).toFixed(1);
          setDisplayValue(current + suffix);
        } else {
          const current = Math.floor(start + (numericValue - start) * easeOut);
          setDisplayValue(current + suffix);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, numericValue, suffix, delay, isDecimal]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <p className="font-heading text-5xl lg:text-6xl font-bold text-white mb-2">
        {displayValue}
      </p>
      <p className="font-body text-sm font-medium uppercase tracking-widest text-[#E53935]">
        {label}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: '2000+', label: 'ACTIVE MEMBERS' },
  { value: '49', label: 'RATING' }, // Displayed as 4.9
  { value: '15+', label: 'COACHES' },
  { value: '8+', label: 'YEARS' },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={isInView ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative aspect-[3/4] rounded-xl overflow-hidden"
          >
            <img
              src="/images/athlete-corridor.jpg"
              alt="Athlete training"
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
          </motion.div>

          {/* Right - Stats */}
          <div>
            <SectionHeader
              tag="/ Why THE ONE"
              title={<>PROOF IS IN{' '}<span className="font-italic-accent text-[#E53935]">the progress.</span></>}
              description="Every stat here represents a real member, a real goal, and a real result."
              isInView={isInView}
              className="mb-10"
            />

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {stats.map((stat, index) => (
                <StatItem
                  key={stat.label}
                  value={stat.value === '49' ? '4.9' : stat.value}
                  label={stat.label}
                  delay={index * 100}
                  isInView={isInView}
                />
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-body text-base italic text-[#B0B0B0] text-center"
            >
              — Proud to be Hyderabad's most trusted fitness destination —
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
