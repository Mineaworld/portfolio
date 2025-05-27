import { motion } from 'framer-motion';
import StackIcon from 'tech-stack-icons';

interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-zinc-800/80 border border-gray-200 dark:border-zinc-700 shadow-sm text-xs font-medium text-gray-800 dark:text-gray-100 backdrop-blur"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <StackIcon name={name.toLowerCase().replace(/[^a-z0-9]/g, '')} className="w-5 h-5" />
      {name}
    </motion.div>
  );
} 