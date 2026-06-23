import { Compass, Heart, Users } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';
import FaqSection from '../components/shared/FaqSection';
import CtaButton from '../components/shared/CtaButton';

const stats = [
  { value: '2,000+', label: 'Active Members' },
  { value: '12+', label: 'Elite Coaches' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '8 Years', label: 'In Hyderabad' },
];

const values = [
  {
    number: '01',
    title: 'PEOPLE FIRST',
    description: 'Every decision we make starts with one question: is this good for our members? Equipment, coaches, classes — all chosen with your ultimate success in mind.',
    icon: Users,
  },
  {
    number: '02',
    title: 'NO SHORTCUTS',
    description: 'Real results take real work. We don\'t sell quick fixes or empty promises. We sell hard work, consistency, and elite coaches who hold you accountable.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'OPEN TO EVERYONE',
    description: 'Beginner or advanced. Young or old. Whatever your goal — there is a place for you at THE ONE. Always has been, always will be.',
    icon: Heart,
  },
];

const luxuryAmenities = [
  {
    title: 'Red Light Therapy',
    description: 'Accelerate muscle recovery, reduce joint pain, and boost cellular repair in our state-of-the-art photobiomodulation room.',
  },
  {
    title: 'Whole-Body Cryotherapy',
    description: 'Expose the body to sub-zero temperatures for 3 minutes to suppress inflammation, relieve soreness, and spike your metabolism.',
  },
  {
    title: 'Luxurious Recovery Spa',
    description: 'Relax post-workout with our steam rooms, dry saunas, and professional sports massage therapy services.',
  },
];

const aboutFaqs = [
  {
    question: 'Do you offer student or corporate discounts?',
    answer: 'Yes. We offer curated corporate packages for companies in HITEC City and Madhapur, as well as student pricing options. Contact our front desk for verification details.',
  },
  {
    question: 'What\'s included in the free consultation?',
    answer: 'A 30-minute session with one of our head coaches to analyze your body composition, assess your baseline strength, and recommend a personalized training roadmap.',
  },
  {
    question: 'How do I schedule recovery sessions (Cryo/Sauna)?',
    answer: 'Elite members can schedule therapy sessions directly through our member app or by speaking with the reception desk. Sessions are booked in 15-minute intervals.',
  },
];

export default function About() {
  return (
    <div className="pt-24 bg-[#0A0A0A] text-white">
      <PageHeader
        tag="/ About Us"
        title="MORE THAN A GYM."
        description="THE ONE was established in 2018 as Hyderabad's premier fitness sanctuary, designed to offer elite level training in an ultra-premium setting."
        descriptionClassName="font-body text-lg text-[#B0B0B0] max-w-2xl mx-auto mt-6"
      />

      {/* Story Section */}
      <section className="py-16 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#222222]">
              <img
                src="/images/athlete-corridor.jpg"
                alt="Gym history"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Story Text */}
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold uppercase text-white">
                WHERE IT ALL STARTED.
              </h2>
              <div className="space-y-4 font-body text-base text-[#B0B0B0]">
                <p>
                  THE ONE was founded in 2018 by celebrity trainer Kumar Mannava from a simple belief — that everyone deserves access to science-backed elite coaching, premium equipment, and a luxury wellness ecosystem.
                </p>
                <p>
                  We started with one exclusive studio in Jubilee Hills, twelve initial members, and Kumar as the sole head coach. Today, we have over 2,000 active members, 12 certified elite trainers, and 85+ weekly classes — but our core belief has not changed one bit.
                </p>
                <p>
                  This is not just a gym. It\'s a wellness sanctuary where ordinary people do extraordinary things.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-[#111111] border border-[#222222] rounded-xl p-4 text-center">
                    <p className="font-heading text-3xl font-bold text-[#E53935]">{stat.value}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[#666666] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-[#111111]/40 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">Our Beliefs</span>
            <h2 className="font-heading text-4xl font-bold uppercase text-white mt-3">
              WHAT WE STAND FOR.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="bg-[#111111] border border-[#222222] rounded-2xl p-8 hover:border-[#E53935]/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-heading font-bold text-[#333333] group-hover:text-[#E53935]/50 transition-colors">
                      {value.number}
                    </span>
                    <Icon className="w-6 h-6 text-[#666666] group-hover:text-[#E53935] transition-colors" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-white mt-6 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm text-[#B0B0B0] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxury Amenities Recovery Section */}
      <section className="py-20 lg:py-28 border-t border-[#111111] relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#E53935]/5 rounded-full filter blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">Premium Recovery</span>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold uppercase text-white">
                THE BIOHACKING ECOSYSTEM.
              </h2>
              <p className="font-body text-sm text-[#B0B0B0] leading-relaxed">
                At THE ONE, we believe recovery is just as important as training. We are the only facility in Jubilee Hills to offer a comprehensive suite of recovery therapies designed to optimize human performance.
              </p>
            </div>
            
            <div className="lg:col-span-3 space-y-6">
              {luxuryAmenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="bg-[#111111] border border-[#222222] rounded-xl p-6 hover:bg-[#151515] transition-all"
                >
                  <h3 className="font-heading text-xl font-bold uppercase text-white mb-2">
                    {amenity.title}
                  </h3>
                  <p className="font-body text-sm text-[#B0B0B0]">
                    {amenity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={aboutFaqs} />

      {/* CTA Footer Block */}
      <section className="py-16 lg:py-24 border-t border-[#111111] text-center bg-[#111111]/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold uppercase text-white mb-6">
            READY TO BE PART OF THE STORY?
          </h2>
          <CtaButton to="/contact">Join Today</CtaButton>
        </div>
      </section>
    </div>
  );
}
