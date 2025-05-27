import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import TechBadge from './TechBadge';
import { skills } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

function getTechIcon(tech: string) {
  const skill = skills.find(s => s.name.toLowerCase().replace(/\W/g, '') === tech.toLowerCase().replace(/\W/g, ''));
  return skill?.icon || '';
}

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: any;
}

export default function ProjectModal({ open, onClose, project }: ProjectModalProps) {
  if (!open || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-zinc-900 rounded-xl shadow-2xl max-w-lg w-full p-6 relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-3 right-3 text-xl text-gray-400 hover:text-gray-900 dark:hover:text-white">&times;</button>
          <div className="mb-4">
            <img src={project.image} alt={project.title} className="rounded-lg w-full object-cover max-h-56 mb-2" />
            <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.techStack?.map((tech: string) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
            <div className="flex gap-3 mt-2">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow transition-all duration-200 text-xs font-semibold">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-900 text-white shadow transition-all duration-200 text-xs font-semibold">
                <Github className="w-4 h-4" /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 