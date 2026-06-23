import { Link } from 'react-router';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#0A0A0A] text-white">
      <div className="text-center max-w-md space-y-6">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-widest text-[#E53935] block"
        >
          / Error 404
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-6xl sm:text-8xl font-bold uppercase tracking-tight text-white"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-sm text-[#B0B0B0] leading-relaxed"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-4 pt-2"
        >
          <Link
            to="/"
            className="btn-red-gradient px-6 py-3 rounded-xl font-body text-xs font-semibold uppercase tracking-wide text-white"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl border border-[#333333] font-body text-xs font-semibold uppercase tracking-wide text-white hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
