import Hero from '../sections/Hero';
import Marquee from '../sections/Marquee';
import Programs from '../sections/Programs';
import Stats from '../sections/Stats';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import Coaches from '../sections/Coaches';
import Pricing from '../sections/Pricing';
import CtaBanner from '../sections/CtaBanner';
import Testimonials from '../sections/Testimonials';
import FinalCta from '../sections/FinalCta';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Programs />
      <Stats />
      <section className="py-16 lg:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </section>
      <Coaches />
      <Pricing />
      <CtaBanner />
      <Testimonials />
      <FinalCta />
    </>
  );
}
