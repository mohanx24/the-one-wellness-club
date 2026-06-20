import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Check, X } from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';

const plans = [
  {
    name: 'GOLD ACCESS',
    price: '₹15,000',
    description: 'Perfect for independent athletes who want access to premium, world-class equipment.',
    features: [
      { text: 'Full luxury gym floor access', included: true },
      { text: '7/24 fingerprint entry', included: true },
      { text: 'Premium locker & shower suite access', included: true },
      { text: '2 group classes / week', included: true },
      { text: 'Biohacking recovery suite access', included: false },
      { text: 'Dedicated 1-on-1 personal trainer', included: false },
      { text: 'Chef-designed custom nutrition plans', included: false },
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'THE ONE CLUB',
    price: '₹35,000',
    description: 'The standard choice for those serious about accelerating their progress with coaching.',
    features: [
      { text: 'Full luxury gym floor access', included: true },
      { text: '7/24 fingerprint entry', included: true },
      { text: 'Premium locker & shower suite access', included: true },
      { text: 'Unlimited group classes access', included: true },
      { text: '2 personal training sessions / month', included: true },
      { text: 'Biohacking recovery suite access', included: true },
      { text: 'Chef-designed custom nutrition plans', included: false },
    ],
    buttonText: 'Get Started',
    popular: true,
  },
  {
    name: 'VIP ELITE',
    price: '₹55,000',
    description: 'All-inclusive luxury. For those who want the absolute ultimate fitness experience.',
    features: [
      { text: 'Full luxury gym floor access', included: true },
      { text: '7/24 fingerprint entry', included: true },
      { text: 'Premium locker & shower suite access', included: true },
      { text: 'Unlimited group classes access', included: true },
      { text: 'Unlimited personal training sessions', included: true },
      { text: 'Unlimited Cryotherapy & Red Light Therapy', included: true },
      { text: 'Chef-designed custom nutrition plans', included: true },
    ],
    buttonText: 'Get Started',
    popular: false,
  },
];

const pricingFaqs = [
  {
    question: 'Do you offer student or corporate discounts?',
    answer: 'Yes. We offer custom group pricing and corporate wellness programs for tech companies in HITEC City and Madhapur. Contact our membership relations team for details.',
  },
  {
    question: 'What\'s included in the free consultation?',
    answer: 'A 30-minute session with one of our head coaches to assess your fitness goals, run a body composition scan, and recommend the best training roadmap.',
  },
  {
    question: 'Can I switch between plans?',
    answer: 'Absolutely. You can upgrade or downgrade your membership tier at the end of any billing cycle with no transfer fees.',
  },
  {
    question: 'Is there a joining or enrollment fee?',
    answer: 'No. We do not charge arbitrary joining, enrollment, or activation fees. You only pay your monthly rate.',
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: 'Yes, all of our memberships are contract-free. You can cancel at any time by providing a 30-day written notice to our membership relations desk.',
  },
];

export default function PricingPage() {
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
            / Membership
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl sm:text-7xl font-bold uppercase tracking-tight mt-4 text-white"
          >
            INVEST IN YOURSELF.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-base text-[#B0B0B0] max-w-md mx-auto mt-6"
          >
            Choose the membership package that matches your standard of training. Cancel anytime.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-12 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between bg-[#111111] border ${
                  plan.popular ? 'border-[#E53935] shadow-lg shadow-[#E53935]/5' : 'border-[#222222]'
                } rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E53935] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                )}

                <div>
                  <h3 className="font-heading text-xl font-bold uppercase tracking-wider text-white">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-4 mb-3">
                    <span className="text-4xl sm:text-5xl font-heading font-black text-white">{plan.price}</span>
                    <span className="text-[#666666] font-semibold text-sm">/mo</span>
                  </div>
                  <p className="font-body text-xs text-[#B0B0B0] leading-relaxed mb-6">
                    {plan.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-4 border-t border-[#222222]/50 pt-6 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs">
                        {feature.included ? (
                          <Check className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-[#666666] shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-[#B0B0B0]' : 'text-[#666666] line-through'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`block text-center py-3.5 rounded-xl font-body text-xs font-semibold uppercase tracking-wide transition-all ${
                    plan.popular
                      ? 'btn-red-gradient text-white'
                      : 'bg-[#1A1A1A] border border-[#333333] text-white hover:bg-white hover:text-black hover:border-white'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-xs text-[#666666] mt-12">
            * All membership plans require automatic monthly billing. Pricing includes GST. Cancel anytime with a 30-day notice.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 lg:py-28 bg-[#111111]/20 border-t border-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">FAQ</span>
            <h2 className="font-heading text-4xl font-bold uppercase text-white mt-3">
              ANY QUESTIONS?
            </h2>
          </div>

          <FaqAccordion items={pricingFaqs} />
        </div>
      </section>
    </div>
  );
}
