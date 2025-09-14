import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  if (typeof window === 'undefined') return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {open && project && (
        <motion.div
          className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black/60 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            className="relative bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden mx-4"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ 
              type: 'spring', 
              stiffness: 400, 
              damping: 30,
              duration: 0.4 
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <button 
                onClick={onClose} 
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background transition-all duration-200 border border-border/50 shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
              
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              <div className="p-8 md:p-12 overflow-y-auto max-h-[60vh]">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {project.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{project.description}</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 mb-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      Problem
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack?.map((tech: string) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex gap-4 pt-6 border-t border-border/50"
                >
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold hover:scale-105"
                    >
                      <Github className="w-5 h-5" /> Source Code
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
} 