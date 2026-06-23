import { useParams, Link, Navigate } from 'react-router';
import { CheckCircle2 } from 'lucide-react';
import { handleImageError } from '../lib/utils';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import FaqAccordion from '../components/FaqAccordion';

interface ProgramContent {
  title: string;
  category: string;
  heroImage: string;
  tagline: string;
  intro: string;
  features: string[];
  schedule: string;
  duration: string;
  intensity: string;
  equipment: string[];
  coaches: string[];
  faqs: { question: string; answer: string }[];
}

const programsData: Record<string, ProgramContent> = {
  'strength-powerlifting': {
    title: 'STRENGTH & POWERLIFTING',
    category: 'STRENGTH & MUSCLE',
    heroImage: '/images/pt-session.jpg',
    tagline: 'Build raw power and high-density muscle mass.',
    intro: 'Our Strength and Powerlifting program is structured around progressive overload, compound movements, and elite athletic tracking. Whether you are aiming to increase your Squat, Bench, and Deadlift, or simply build functional core power, this is your path.',
    features: [
      'Structured strength cycles (5/3/1, linear progression)',
      'Video analysis of form and biomechanical breakdowns',
      'Powerlifting-spec platforms and competition bars',
      'Max 8 athletes per group for highly personalized coaching attention',
    ],
    schedule: 'Mon, Wed, Fri (Morning & Evening sessions)',
    duration: '60 Mins',
    intensity: 'High (Progressive Overload)',
    equipment: ['Eleiko Competition Bars & Plates', 'Rogue Combo Racks', 'Calibrated Steel Plates', 'Chalk Stations'],
    coaches: ['Kumar Mannava', 'Priya Sharma'],
    faqs: [
      {
        question: 'Is this program suitable for complete beginners?',
        answer: 'Yes, absolutely. Our coaches tailor the weight and volume to your baseline strength. We focus heavily on teaching proper mechanics (Squat, Bench, Deadlift) before adding heavy load.',
      },
      {
        question: 'What is the group size for strength sessions?',
        answer: 'To ensure safety and personalized instruction, we cap groups at 8 members per coach.',
      },
    ],
  },
  'hiit-cardio': {
    title: 'HIIT & CARDIO',
    category: 'FAT LOSS & ATHLETICISM',
    heroImage: '/images/group-class.jpg',
    tagline: 'High-intensity intervals to torch calories and build endurance.',
    intro: 'HIIT & Cardio combines high-energy aerobic intervals with functional resistance movements. Designed to spike your metabolic rate, increase aerobic capacity, and tone your body in a fast-paced group setting.',
    features: [
      'Heart-rate zoned cardiovascular training',
      'Varying daily workouts (Tabata, EMOM, AMRAP)',
      'Fat loss optimization and athletic conditioning',
      'High-energy music and motivational atmosphere',
    ],
    schedule: 'Tue, Thu, Sat (Morning & Evening sessions)',
    duration: '45 Mins',
    intensity: 'Very High (Cardio Focus)',
    equipment: ['Assault AirBikes', 'Concept2 Rowers & SkiErgs', 'Kettlebells & Wall Balls', 'Plyo Boxes'],
    coaches: ['Rahul Verma', 'Priya Sharma'],
    faqs: [
      {
        question: 'How many calories do I burn in a typical HIIT class?',
        answer: 'Depending on effort level, members burn between 500 to 800 calories per session. The metabolic afterburn effect continues to burn calories for hours post-workout.',
      },
      {
        question: 'What if I cannot keep up with the pace?',
        answer: 'Our HIIT workouts are fully scaleable. Coaches provide modifications for every movement to match your cardiovascular conditioning.',
      },
    ],
  },
  'personal-training': {
    title: 'PERSONAL TRAINING',
    category: '1-ON-1 ELITE COACHING',
    heroImage: '/images/cta-barbell.jpg',
    tagline: '1-on-1 coaching built entirely around your body and lifestyle.',
    intro: 'The ultimate fitness service. Get one-on-one sessions, custom-built training cycles, 24/7 accountability, and chef-designed nutritional planning tailored to your exact metabolic profile.',
    features: [
      'Custom biomechanical and movement screen assessment',
      'Fully personalized workout programming via THE ONE Member App',
      'Dedicated nutrition profiling and lifestyle habits coaching',
      'Priority scheduling and private training rooms access',
    ],
    schedule: 'Flexible / By Appointment',
    duration: '60 Mins',
    intensity: 'Customized (Tailored to client)',
    equipment: ['Private training zones', 'Biomechanical testing tools', 'All premium gym equipment'],
    coaches: ['Kumar Mannava', 'Rahul Verma', 'Arvind Rathod'],
    faqs: [
      {
        question: 'How do I choose the right personal coach?',
        answer: 'We pair you with a trainer based on your fitness goals (e.g. fat loss, athletic rehab, bodybuilding) and scheduling preferences during your initial consultation.',
      },
      {
        question: 'Is nutrition included in the Personal Training program?',
        answer: 'Yes, a customized nutritional roadmap and weekly food tracking reviews are standard across all personal coaching memberships.',
      },
    ],
  },
  'group-classes': {
    title: 'GROUP CLASSES',
    category: 'COMMUNITY & ENERGY',
    heroImage: '/images/gym-interior.jpg',
    tagline: 'Train harder together. Pushing limits as one.',
    intro: 'Find your rhythm and feed off the collective energy of our group classes. From strength conditioning to metabolic conditioning, our classes are programmed by head coaches to ensure you build fitness while having fun.',
    features: [
      '85+ classes offered weekly across multiple disciplines',
      'High-energy, team-oriented training environment',
      'Led by certified instructors who correct form and drive energy',
      'Access to premium group class studio rooms',
    ],
    schedule: 'Every Day (Check class timetable)',
    duration: '50 Mins',
    intensity: 'Moderate to High',
    equipment: ['Group fitness studio rigs', 'Light dumbbells & bands', 'Yoga mats & steps'],
    coaches: ['Anjali Desai', 'Priya Sharma'],
    faqs: [
      {
        question: 'Do I need to book group classes in advance?',
        answer: 'Yes, class bookings open 48 hours in advance via our member app. We cap class sizes to ensure instructor supervision.',
      },
      {
        question: 'Can I attend any class with my membership?',
        answer: 'Yes, all Group Class, Pro, and Elite memberships grant unlimited access to all scheduled group classes.',
      },
    ],
  },
};

interface ProgramDetailProps {
  id?: string;
}

export default function ProgramDetail({ id }: ProgramDetailProps) {
  const { id: paramId } = useParams();
  const programId = id || paramId;

  if (!programId || !programsData[programId]) {
    return <Navigate to="/programs" replace />;
  }

  const program = programsData[programId];

  return (
    <div className="bg-[#0A0A0A] text-white">
      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={program.heroImage}
            alt={program.title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E53935]/15 border border-[#E53935]/30 text-[10px] font-bold uppercase tracking-wider text-[#E53935]">
              {program.category}
            </span>
            <h1 className="font-heading text-5xl sm:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              {program.title}
            </h1>
            <p className="font-body text-lg sm:text-xl text-[#B0B0B0] font-medium">
              {program.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Program Details Overview */}
      <section className="py-16 lg:py-24 border-t border-[#111111] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: About The Discipline */}
            <div className="lg:col-span-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">/ Overview</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white">
                What is the Program?
              </h2>
              <p className="font-body text-base text-[#B0B0B0] leading-relaxed">
                {program.intro}
              </p>

              {/* Core Offerings */}
              <div className="space-y-4 pt-4">
                <h3 className="font-heading text-xl font-semibold uppercase text-white">
                  Program Highlights
                </h3>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#B0B0B0]">
                      <CheckCircle2 className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Quick Stats Sidebar */}
            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 space-y-6 h-fit">
              <h3 className="font-heading text-2xl font-bold uppercase text-white pb-3 border-b border-[#222222]">
                Program Info
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#666666]">Schedule</p>
                  <p className="text-sm font-bold text-white mt-1">{program.schedule}</p>
                </div>
                
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#666666]">Session Length</p>
                  <p className="text-sm font-bold text-white mt-1">{program.duration}</p>
                </div>
                
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#666666]">Workout Intensity</p>
                  <p className="text-sm font-bold text-white mt-1">{program.intensity}</p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#666666]">Key Equipment</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {program.equipment.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 rounded bg-[#1A1A1A] border border-[#222222] text-[10px] text-white/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[#666666]">Lead Coaches</p>
                  <p className="text-sm font-bold text-[#E53935] mt-1">{program.coaches.join(', ')}</p>
                </div>
              </div>

              <Link
                to="/contact"
                className="block text-center btn-red-gradient py-3.5 rounded-xl font-body text-xs font-semibold uppercase tracking-wide text-white"
              >
                Inquire & Book Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Free Luxury Amenities Block */}
      <section className="py-16 bg-[#111111]/30 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">Complimentary Recovery</span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white">
              OPTIMIZED RECOVERY AT THE ONE.
            </h2>
            <p className="font-body text-sm text-[#B0B0B0] leading-relaxed">
              Every training session includes full access to our premium facilities. Accelerate recovery with our high-end amenities including clean towels, private shower suites, saunas, and access to wellness lounges.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-20 lg:py-28 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 lg:py-28 bg-[#111111]/10 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">FAQs</span>
            <h2 className="font-heading text-4xl font-bold uppercase text-white mt-3">
              PROGRAM FAQS
            </h2>
          </div>

          <FaqAccordion items={program.faqs} />
        </div>
      </section>
    </div>
  );
}
