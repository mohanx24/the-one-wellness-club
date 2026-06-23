import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { handleImageError } from '../lib/utils';
import TrainerModal from '../components/TrainerModal';

interface Trainer {
  name: string;
  role: string;
  image: string;
  bio?: string;
  specialties?: string[];
  certifications?: string[];
  experience?: string;
}

const coaches: Trainer[] = [
  {
    name: 'Kumar Mannava',
    role: 'FOUNDER & HEAD COACH',
    image: '/images/coach-1.jpg',
    experience: '15+ Years',
    bio: 'Kumar is India\'s first "Physique Elite" Master Trainer. He trained in Los Angeles and has coached Tollywood A-listers (Jr. NTR, Mahesh Babu, Allu Arjun). He famously engineered Jr. NTR\'s 9.5 kg transformation in 7 weeks.',
    specialties: ['Celebrity Transformations', 'Biomechanical Assessments', 'Athletic Strength Cycles', 'High-Protein Nutrition'],
    certifications: ['Physique Elite Master Trainer (USA)', 'ISSA Performance Nutrition Specialist', 'NASM Certified Personal Trainer', 'Kettlebell Training Master'],
  },
  {
    name: 'Arvind Rathod',
    role: 'HEAD OF OPERATIONS & NUTRITION',
    image: '/images/coach-3.jpg',
    experience: '10+ Years',
    bio: 'Arvind leads operations and nutrition programs at THE ONE. He designs metabolic meal-prep paths and curates high-performance food menus for members at The One Café.',
    specialties: ['Metabolic Diet Design', 'Macro Coaching', 'Sports Supplementation', 'Specialty Health Cafe Operations'],
    certifications: ['Precision Nutrition Level 1 & 2', 'ISSN Sports Nutritionist', 'HACCP Culinary Safety Certified'],
  },
  {
    name: 'Dr. Srinivas Reddy',
    role: 'SPORTS PHYSIOTHERAPIST & REHAB',
    image: '/images/coach-2.jpg',
    experience: '12+ Years',
    bio: 'Dr. Srinivas is a licensed physical therapist who specializes in sports injury rehabilitation. He works with elite members to restore posture, fix mechanical errors, and optimize movement patterns.',
    specialties: ['Sports Injury Rehabilitation', 'Active Release Techniques (ART)', 'Postural Alignment', 'Joint Mobility'],
    certifications: ['Doctor of Physical Therapy (DPT)', 'Certified Strength & Conditioning Specialist (CSCS)', 'Dry Needling L2', 'FMS Level 1 & 2'],
  },
  {
    name: 'Priya Sharma',
    role: 'SENIOR STRENGTH COACH',
    image: '/images/coach-2.jpg',
    experience: '9+ Years',
    bio: 'Priya specializes in women\'s body recomposition and high-performance strength training. She creates custom strength programs that focus on heavy compound lifts and injury prevention.',
    specialties: ['Body Recomposition', 'Hypertrophy Training', 'Olympic Weightlifting', 'Powerlifting Program Design'],
    certifications: ['NSCA Certified Personal Trainer', 'USA Weightlifting (USAW) L1', 'FMS Level 1', 'PN1 Nutrition Coach'],
  },
  {
    name: 'Rahul Verma',
    role: 'FUNCTIONAL & KETTLEBELL SPECIALIST',
    image: '/images/coach-4.jpg',
    experience: '8+ Years',
    bio: 'Rahul brings high-intensity energy and technical precision to functional training. He specializes in kettlebell mechanics, core conditioning, and functional movement screening.',
    specialties: ['Kettlebell Mechanics', 'Core Stability & Strength', 'Metabolic Conditioning', 'Functional Movement Systems'],
    certifications: ['SFG I Kettlebell Instructor (StrongFirst)', 'NASM Corrective Exercise Specialist (CES)', 'IKFF Kettlebell Specialist'],
  },
  {
    name: 'Anjali Desai',
    role: 'YOGA & MIND-BODY SPECIALIST',
    image: '/images/coach-4.jpg',
    experience: '7+ Years',
    bio: 'Anjali teaches restorative Hatha and dynamic Vinyasa flow classes. She blends traditional yoga principles with modern recovery science to help members manage stress, increase mobility, and reset.',
    specialties: ['Restorative Hatha Yoga', 'Vinyasa Flow', 'Mobility & Flexibility training', 'Mindfulness & Meditation'],
    certifications: ['RYT 500 Certified Yoga Teacher', 'Advanced Mobility Specialist', 'PRT Restorative Breathing Coach'],
  },
];

export default function CoachesPage() {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <div className="pt-24 bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold uppercase tracking-widest text-[#E53935]"
          >
            / Expert Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl font-bold uppercase tracking-tight mt-4 text-white"
          >
            MEET THE EXPERTS.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-base text-[#B0B0B0] max-w-lg mx-auto mt-6"
          >
            12+ certified elite coaches ready to guide you every step of the way. Click any coach to view their profile.
          </motion.p>
        </div>
      </section>

      {/* Coaches Grid */}
      <section className="py-12 border-t border-[#111111] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {coaches.map((coach, index) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedTrainer(coach)}
                className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#E53935]/40 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <p className="text-[9px] font-bold text-[#E53935] uppercase tracking-widest">{coach.role}</p>
                    <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
                      {coach.name}
                    </h4>
                    <p className="text-[10px] text-[#B0B0B0] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Profile →
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Modal Overlay */}
      <AnimatePresence>
        {selectedTrainer && (
          <TrainerModal
            trainer={selectedTrainer}
            onClose={() => setSelectedTrainer(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
