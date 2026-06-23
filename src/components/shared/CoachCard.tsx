interface CoachCardProps {
  name: string;
  role: string;
  image: string;
  onClick?: () => void;
  showViewProfile?: boolean;
  className?: string;
}

export default function CoachCard({
  name,
  role,
  image,
  onClick,
  showViewProfile = false,
  className = '',
}: CoachCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-[#111111] border border-[#222222] rounded-xl overflow-hidden group hover:border-[#E53935]/40 transition-all duration-300 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 space-y-1">
          <p className="text-[9px] font-bold text-[#E53935] uppercase tracking-widest">{role}</p>
          <h4 className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
            {name}
          </h4>
          {showViewProfile && (
            <p className="text-[10px] text-[#B0B0B0] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              View Profile &rarr;
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
