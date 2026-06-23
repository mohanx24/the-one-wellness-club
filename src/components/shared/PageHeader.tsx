import { motion } from 'framer-motion';

interface PageHeaderProps {
  tag: string;
  title: string;
  description?: string;
  descriptionClassName?: string;
}

export default function PageHeader({ tag, title, description, descriptionClassName }: PageHeaderProps) {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-widest text-[#E53935]"
        >
          {tag}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-5xl sm:text-7xl font-bold uppercase tracking-tight mt-4 text-white"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={descriptionClassName ?? 'font-body text-base text-[#B0B0B0] max-w-md mx-auto mt-6'}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
