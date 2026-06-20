import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Users, Calendar } from 'lucide-react';

const programs = [
  {
    title: 'PERSONAL TRAINING',
    description:
      'One-on-one sessions built entirely around your goals, schedule, and body.',
    image: '/images/pt-session.jpg',
    tags: [
      { label: 'Flexible', icon: null },
      { label: 'By appointment', icon: null },
    ],
  },
  {
    title: 'GROUP CLASSES',
    description:
      'Train harder when you train together. High-energy sessions led by expert coaches.',
    image: '/images/group-class.jpg',
    tags: [
      { label: '50 min / session', icon: Clock },
      { label: 'Up to 20 people', icon: Users },
      { label: 'Every day', icon: Calendar },
    ],
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="programs" className="py-24 lg:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-body text-sm font-medium uppercase tracking-widest text-[#E53935] mb-3">
            / Programs
          </p>
          <h2 className="font-heading font-bold uppercase text-section-heading text-white mb-3">
            TRAIN YOUR WAY.
          </h2>
          <p className="font-body text-base text-[#B0B0B0]">
            Choose the path that fits your goals.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="card-hover bg-[#111111] border border-[#222222] rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-heading text-2xl font-semibold uppercase text-white mb-3">
                  {program.title}
                </h3>
                <p className="font-body text-base text-[#B0B0B0] mb-4">
                  {program.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {program.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#333333] text-xs font-medium text-[#B0B0B0]"
                    >
                      {tag.icon && <tag.icon className="w-3 h-3" />}
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-body text-base text-[#B0B0B0] mb-4">
            Not sure where to start?
          </p>
          <button
            onClick={() => {
              document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-red-gradient px-8 py-4 rounded-full font-body text-sm font-semibold uppercase tracking-wide text-white"
          >
            Get a Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
