import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import TechBadge from './TechBadge';
import { skills } from '@/lib/data';
import { ExternalLink, Github, X } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

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
  // Lock scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Refresh GSAP ScrollTrigger after modal closes, with a small delay
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[1000] w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto mx-4"
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 25,
              duration: 0.2 
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              <div className="relative h-48 md:h-64">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Problem</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.problem}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack?.map((tech: string) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow transition-all duration-200 text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-900 text-white shadow transition-all duration-200 text-sm font-semibold"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 