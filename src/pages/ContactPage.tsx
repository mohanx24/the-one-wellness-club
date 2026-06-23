import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import PageHeader from '../components/shared/PageHeader';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit behavior
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
      setSubmitted(false);
    }, 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 bg-[#0A0A0A] text-white">
      <PageHeader
        tag="/ Contact"
        title="LET'S TALK."
        description="Ready to start your journey? We're here — reach out anytime."
      />

      {/* Main Grid */}
      <section className="py-12 border-t border-[#111111] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold uppercase text-white mb-6">
                  CONTACT US
                </h2>
                <p className="font-body text-sm text-[#B0B0B0] leading-relaxed">
                  Have a question about memberships, personal training, or recovery therapies? Get in touch, and our relations manager will contact you within 24 hours.
                </p>
              </div>

              {/* Detail Items */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#E53935]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Address</h4>
                    <p className="font-body text-sm text-[#B0B0B0] mt-1 leading-relaxed">
                      Plot No. 339, Road No. 10C,<br />
                      Venkatagiri, Jubilee Hills,<br />
                      Hyderabad, Telangana 500033
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#E53935]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Phone</h4>
                    <p className="font-body text-sm text-[#B0B0B0] mt-1">
                      <a href="tel:+919868611111" className="hover:text-white transition-colors">
                        +91 98686 11111
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#E53935]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Email</h4>
                    <p className="font-body text-sm text-[#B0B0B0] mt-1">
                      <a href="mailto:contact@theonefitness.com" className="hover:text-white transition-colors">
                        contact@theonefitness.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] border border-[#222222] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#E53935]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Work Hours</h4>
                    <div className="font-body text-sm text-[#B0B0B0] mt-1 space-y-1">
                      <p><span className="font-semibold text-white">Mon — Sat:</span> 06:00 — 21:00</p>
                      <p><span className="font-semibold text-white">Sunday:</span> 06:00 — 14:00</p>
                      <p className="text-[10px] text-[#666666] tracking-wider uppercase font-semibold mt-1">Open 365 Days a Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                <h3 className="font-heading text-2xl font-bold uppercase text-white mb-6">
                  Send us message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-4"
                  >
                    <CheckCircle className="w-12 h-12 text-[#E53935] mx-auto animate-bounce" />
                    <h4 className="font-heading text-2xl font-bold uppercase text-white">Message Sent!</h4>
                    <p className="font-body text-sm text-[#B0B0B0] max-w-xs mx-auto">
                      Thank you for reaching out. We will get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-[#1A1A1A] border border-[#222222] focus:border-[#E53935] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-[#1A1A1A] border border-[#222222] focus:border-[#E53935] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-[#1A1A1A] border border-[#222222] focus:border-[#E53935] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full bg-[#1A1A1A] border border-[#222222] focus:border-[#E53935] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Program Information">Program Information</option>
                          <option value="Personal Training">Personal Training</option>
                          <option value="Membership & Pricing">Membership & Pricing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-[#666666]">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full bg-[#1A1A1A] border border-[#222222] focus:border-[#E53935] rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors resize-none"
                        placeholder="Tell us about your fitness goals..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 btn-red-gradient py-4 rounded-xl font-body text-xs font-bold uppercase tracking-wide text-white"
                    >
                      <Send className="w-4 h-4" />
                      Submit
                    </button>
                    
                    <p className="text-center text-[10px] text-[#666666] mt-2">
                      Your information is safe with us. We\'ll get back to you within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Styled Google Maps Container */}
      <section className="h-96 w-full border-t border-[#111111] relative overflow-hidden bg-[#111111]">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        {/* Real Address embedded in static visual overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-3 px-4 z-20">
            <span className="text-[10px] font-bold text-[#E53935] uppercase tracking-widest bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              Flagship Studio Location
            </span>
            <h3 className="font-heading text-3xl font-bold uppercase text-white">THE ONE — JUBILEE HILLS</h3>
            <p className="font-body text-sm text-[#B0B0B0] max-w-sm">
              Plot No. 339, Road No. 10C, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033
            </p>
            <a
              href="https://maps.app.goo.gl/mNWGsCZjLhVEeUft7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#E53935] hover:text-white transition-colors pt-2"
            >
              Get Directions on Google Maps ↗
            </a>
          </div>
        </div>
        {/* Decorative Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </section>
    </div>
  );
}
