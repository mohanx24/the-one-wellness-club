import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Clock, Users, Flame, Dumbbell } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import CoachCard from '../components/shared/CoachCard';
import CtaButton from '../components/shared/CtaButton';

const programsList = [
  {
    id: 'strength-powerlifting',
    title: 'STRENGTH & POWERLIFTING',
    description: 'Build raw power and muscle mass with structured progressive training designed for all levels — beginner to advanced.',
    image: '/images/pt-session.jpg',
    tags: [
      { label: 'MAX 8 PER GROUP', icon: Users },
      { label: '60 MIN / SESSION', icon: Clock },
    ],
  },
  {
    id: 'hiit-cardio',
    title: 'HIIT & CARDIO',
    description: 'High-intensity intervals that torch calories and boost your cardiovascular endurance fast.',
    image: '/images/group-class.jpg',
    tags: [
      { label: '45 MIN / SESSION', icon: Clock },
      { label: 'MON · WED · FRI', icon: Flame },
    ],
  },
  {
    id: 'personal-training',
    title: 'PERSONAL TRAINING',
    description: 'One-on-one sessions built entirely around your goals, schedule, and body with dedicated performance mapping.',
    image: '/images/cta-barbell.jpg',
    tags: [
      { label: 'FLEXIBLE SCHEDULE', icon: Flame },
      { label: 'BY APPOINTMENT', icon: Users },
    ],
  },
  {
    id: 'group-classes',
    title: 'GROUP CLASSES',
    description: 'Train harder when you train together. High-energy sessions led by expert coaches — 85+ classes every week.',
    image: '/images/gym-interior.jpg',
    tags: [
      { label: '50 MIN / SESSION', icon: Clock },
      { label: 'UP TO 20 PEOPLE', icon: Users },
      { label: 'EVERY DAY', icon: Dumbbell },
    ],
  },
];

const featuredCoaches = [
  { name: 'Marcus Reid', role: 'HEAD COACH', image: '/images/coach-1.jpg' },
  { name: 'Sofia Alvarez', role: 'SENIOR COACH', image: '/images/coach-2.jpg' },
  { name: 'James Okafor', role: 'PERSONAL TRAINER', image: '/images/coach-3.jpg' },
  { name: 'Lena Müller', role: 'GROUP CLASS INSTRUCTOR', image: '/images/coach-4.jpg' },
];

export default function ProgramsPage() {
  return (
    <div className="pt-24 bg-[#0A0A0A] text-white">
      <PageHeader
        tag="/ Disciplines"
        title="FIND YOUR PERFECT FIT."
      />

      {/* Programs Grid */}
      <section className="py-12 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programsList.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden hover:border-[#E53935]/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-white group-hover:text-[#E53935] transition-colors">
                      {program.title}
                    </h3>
                    <p className="font-body text-sm text-[#B0B0B0] leading-relaxed">
                      {program.description}
                    </p>
                    
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {program.tags.map((tag, idx) => {
                        const Icon = tag.icon;
                        return (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#222222] text-[10px] font-semibold text-white/70"
                          >
                            <Icon className="w-3.5 h-3.5 text-[#E53935]" />
                            {tag.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-8">
                    <Link
                      to={`/programs/${program.id}`}
                      className="inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-[#E53935] hover:text-white transition-colors group/link"
                    >
                      Explore Discipline
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* consultation cta */}
      <section className="py-16 text-center border-t border-[#111111]">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <p className="font-body text-base text-[#B0B0B0]">Not sure which program is right for you?</p>
          <CtaButton to="/contact">Get a Free Consultation</CtaButton>
        </div>
      </section>

      {/* Featured Coaches Teaser */}
      <section className="py-20 lg:py-28 border-t border-[#111111] bg-[#111111]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">Our Coaches</span>
              <h2 className="font-heading text-4xl font-bold uppercase text-white mt-3">
                MEET THE EXPERTS.
              </h2>
            </div>
            <Link
              to="/coach"
              className="font-heading text-sm font-bold uppercase tracking-wider text-[#E53935] hover:text-white transition-colors mt-4 sm:mt-0"
            >
              View All Coaches →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCoaches.map((coach, index) => (
              <CoachCard
                key={index}
                name={coach.name}
                role={coach.role}
                image={coach.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
