import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";

export function Projects() {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="scroll-mt-28">
      <div className="section-panel rise-in">
        <div className="section-panel-header">
          <p className="label-mono text-muted-foreground">Projects</p>
          <h2 className="display-title mt-2 text-3xl sm:text-4xl">
            Selected projects with clear outcomes.
          </h2>
        </div>

        <div className="section-panel-body">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex h-full flex-col rounded-xl border border-border/80 bg-background/70 p-4 sm:p-5"
              >
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-secondary/55 px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-4">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  ) : null}
                  {project.repoUrl ? (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/90 hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      Repository
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
