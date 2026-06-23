import { motion } from 'framer-motion';

interface SectionHeaderProps {
  tag: string;
  title: React.ReactNode;
  description?: string;
  isInView: boolean;
  className?: string;
  centered?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  description,
  isInView,
  className = 'mb-12',
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`${className} ${centered ? 'text-center' : ''}`}
    >
      <p className="font-body text-sm font-medium uppercase tracking-widest text-[#E53935] mb-3">
        {tag}
      </p>
      <h2 className="font-heading font-bold uppercase text-section-heading text-white mb-3">
        {title}
      </h2>
      {description && (
        <p className={`font-body text-base text-[#B0B0B0] ${centered ? 'max-w-md mx-auto mt-4' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
