import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'GOLD ACCESS',
    price: '15,000',
    description: 'Perfect for independent athletes who want access to premium, world-class equipment.',
    popular: false,
    features: [
      { text: 'Full luxury gym floor access', included: true },
      { text: '7/24 fingerprint entry', included: true },
      { text: 'Premium locker & shower suite access', included: true },
      { text: '2 group classes / week', included: true },
      { text: 'Biohacking recovery suite access', included: false },
      { text: 'Dedicated 1-on-1 personal trainer', included: false },
    ],
  },
  {
    name: 'THE ONE CLUB',
    price: '35,000',
    description: 'The standard choice for those serious about accelerating their progress with coaching.',
    popular: true,
    features: [
      { text: 'Full luxury gym floor access', included: true },
      { text: 'Premium locker & shower suite access', included: true },
      { text: 'Unlimited group classes access', included: true },
      { text: '2 personal training sessions / month', included: true },
      { text: 'Biohacking recovery suite access', included: true },
      { text: 'Chef-designed custom nutrition plans', included: false },
    ],
  },
  {
    name: 'VIP ELITE',
    price: '55,000',
    description: 'All-inclusive luxury. For those who want the absolute ultimate fitness experience.',
    popular: false,
    features: [
      { text: 'Full luxury gym floor access', included: true },
      { text: 'Premium locker & shower suite access', included: true },
      { text: 'Unlimited personal training sessions', included: true },
      { text: 'Unlimited Cryotherapy & Red Light Therapy', included: true },
      { text: 'Chef-designed custom nutrition plans', included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-[#0A0A0A] border-t border-[#111111]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-sm font-medium uppercase tracking-widest text-[#E53935] mb-3">
            / Pricing
          </p>
          <h2 className="font-heading font-bold uppercase text-section-heading text-white">
            CHOOSE YOUR PLAN.
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.7,
                delay: plan.popular ? 0.2 : 0.15 * index,
              }}
              className={`relative rounded-xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-3 ${
                plan.popular
                  ? 'bg-[#1A1A1A] border-2 border-[#E53935] shadow-[0_0_40px_rgba(229,57,53,0.15)]'
                  : 'bg-[#111111] border border-[#222222]'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E53935] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                {/* Plan Name */}
                <p
                  className={`font-body text-sm font-semibold uppercase tracking-wider mb-4 ${
                    plan.popular ? 'text-[#E53935]' : 'text-[#B0B0B0]'
                  }`}
                >
                  {plan.name}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-heading text-4xl font-bold text-white">
                    ₹{plan.price}
                  </span>
                  <span className="font-body text-base text-[#B0B0B0]">/mo</span>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-[#B0B0B0] mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8 border-t border-[#222222]/50 pt-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-3"
                    >
                      {feature.included ? (
                        <Check className="w-4 h-4 text-[#E53935] shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-[#333333] shrink-0" />
                      )}
                      <span
                        className={`font-body text-sm ${
                          feature.included ? 'text-white' : 'text-[#666666]'
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Link */}
              <Link
                to="/contact"
                className={`w-full py-4 rounded-full font-body text-sm font-semibold uppercase tracking-wide text-center transition-all duration-300 block ${
                  plan.popular
                    ? 'btn-red-gradient text-white'
                    : 'border border-[#333333] text-white hover:bg-white hover:text-[#0A0A0A] hover:border-white'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center font-body text-sm text-[#666666]"
        >
          Cancel anytime. No questions asked.
        </motion.p>
      </div>
    </section>
  );
}
