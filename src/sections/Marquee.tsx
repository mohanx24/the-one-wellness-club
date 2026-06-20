const tickerItems = [
  '2,000+ ACTIVE MEMBERS',
  '4.9 RATED',
  'NO CONTRACTS. NO EXCUSES.',
  '8+ YEARS OF EXCELLENCE',
  'OPEN EVERY DAY',
  'RESULTS GUARANTEED',
  '15+ CERTIFIED COACHES',
  'WELLNESS CAFE',
];

export default function Marquee() {
  // Duplicate items for seamless loop
  const allItems = [...tickerItems, ...tickerItems];

  return (
    <section className="w-full py-4 border-y border-[#222222] bg-[#0A0A0A] overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="font-heading text-lg font-semibold uppercase tracking-[0.05em] text-white px-6">
              {item}
            </span>
            <span className="text-[#E53935] text-lg">★</span>
          </div>
        ))}
      </div>
    </section>
  );
}
