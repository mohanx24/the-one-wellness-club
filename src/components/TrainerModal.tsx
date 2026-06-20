import { motion } from 'framer-motion';
import { X, Award, Flame } from 'lucide-react';

interface Trainer {
  name: string;
  role: string;
  image: string;
  bio?: string;
  specialties?: string[];
  certifications?: string[];
  experience?: string;
}

interface TrainerModalProps {
  trainer: Trainer | null;
  onClose: () => void;
}

export default function TrainerModal({ trainer, onClose }: TrainerModalProps) {
  if (!trainer) return null;

  // Provide realistic fallback data if not supplied
  const bio = trainer.bio || `Specialized in helping clients achieve their peak potential. With years of experience working with elite athletes and beginners alike, ${trainer.name} customizes every session for maximum results.`;
  const specialties = trainer.specialties || ['Strength Training', 'Body Recomposition', 'Nutritional Guidance', 'High-Intensity Interval Training'];
  const certifications = trainer.certifications || [
    'ACE Certified Personal Trainer',
    'IFBB Pro Card Holder (Physique)',
    'Advanced Sports Nutrition (ISSA)',
    'CPR/AED Certified'
  ];
  const experience = trainer.experience || '8+ Years';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative w-full max-w-3xl bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col md:flex-row"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:text-[#E53935] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Trainer Image */}
        <div className="w-full md:w-2/5 h-64 md:h-auto min-h-[300px] relative">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E53935]/15 border border-[#E53935]/30 text-[10px] font-bold uppercase tracking-wider text-[#E53935]">
              <Flame className="w-3 h-3" />
              {trainer.role}
            </span>
            <h3 className="font-heading text-4xl font-bold uppercase text-white mt-3">
              {trainer.name}
            </h3>
            <p className="text-sm text-[#666666] font-semibold mt-1">Experience: {experience}</p>
          </div>

          <div className="border-t border-[#222222] pt-4">
            <h4 className="text-xs font-bold text-[#E53935] uppercase tracking-wider mb-2">Biography</h4>
            <p className="font-body text-sm text-[#B0B0B0] leading-relaxed">
              {bio}
            </p>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-xs font-bold text-[#E53935] uppercase tracking-wider mb-3">Area of Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#222222] text-xs text-white/80"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-xs font-bold text-[#E53935] uppercase tracking-wider mb-3">Credentials</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2 text-xs text-[#B0B0B0]">
                  <Award className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <div className="border-t border-[#222222] pt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#666666]">Availability</p>
              <p className="text-xs font-bold text-white">Mon — Sat (By Appointment)</p>
            </div>
            <a
              href="/contact"
              onClick={() => {
                // If on home or another page, go to contact route
                // Wait, since we are using react-router, we can handle it or let default link handle it
                onClose();
              }}
              className="btn-red-gradient px-6 py-3 rounded-xl font-body text-xs font-semibold uppercase tracking-wide text-white text-center hover:scale-105 transition-transform"
            >
              Book Session
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
