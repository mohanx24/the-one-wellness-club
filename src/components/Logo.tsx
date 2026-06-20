interface LogoProps {
  className?: string;
  iconSize?: string;
  textSize?: string;
}

export default function Logo({ className = '', iconSize = 'w-10 h-10', textSize = 'text-lg sm:text-xl' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric SVG Emblem: "O" intersected by "1" */}
      <svg 
        className={`${iconSize} text-[#E53935]`} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle O */}
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="6" />
        {/* Vertical line 1 */}
        <line x1="50" y1="15" x2="50" y2="85" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        {/* Angled tick of 1 */}
        <line x1="38" y1="30" x2="50" y2="15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      </svg>

      {/* Typography wordmark */}
      <div className="flex flex-col">
        <span className={`font-heading font-semibold uppercase tracking-[0.25em] leading-none text-white ${textSize}`}>
          THE
        </span>
        <span className={`font-heading font-black uppercase tracking-[0.25em] leading-none text-[#E53935] ${textSize} mt-0.5`}>
          ONE
        </span>
      </div>
    </div>
  );
}
