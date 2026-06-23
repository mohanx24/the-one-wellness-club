import FaqAccordion from '../FaqAccordion';

interface FaqSectionProps {
  tag?: string;
  title?: string;
  items: { question: string; answer: string }[];
  className?: string;
}

export default function FaqSection({
  tag = 'FAQ',
  title = 'ANY QUESTIONS?',
  items,
  className = 'py-20 lg:py-28 bg-[#111111]/20 border-t border-[#111111]',
}: FaqSectionProps) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E53935]">{tag}</span>
          <h2 className="font-heading text-4xl font-bold uppercase text-white mt-3">
            {title}
          </h2>
        </div>

        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
