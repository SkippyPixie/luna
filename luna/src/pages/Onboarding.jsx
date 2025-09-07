import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Onboarding() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold text-gray-700"
      >
        Welcome to Luna
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-base text-gray-700"
      >
        What’s present for you right now?
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link
          to="/"
          className="p-4 rounded-xl border border-indigo-500 text-indigo-500"
        >
          Let’s begin
        </Link>
      </motion.div>
    </div>
  );
}
