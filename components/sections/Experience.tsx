import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28">
      <div className="section-panel rise-in">
        <div className="section-panel-header">
          <p className="label-mono text-muted-foreground">Experience</p>
          <h2 className="display-title mt-2 text-3xl sm:text-4xl">
            Practical training and real project execution.
          </h2>
        </div>

        <div className="section-panel-body">
          <ol className="relative ml-1 border-l border-border pl-5 sm:ml-2 sm:pl-6">
            {experiences.map((experience) => (
              <li key={experience.id} className="relative pb-8 last:pb-0">
                <span className="absolute -left-[25px] mt-1.5 h-3 w-3 rounded-full border border-background bg-accent sm:-left-[29px]" />

                <article className="rounded-xl border border-border/80 bg-background/70 p-4">
                  <h3 className="text-lg font-semibold">{experience.position}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {experience.company}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/55 px-2.5 py-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {experience.startDate} - {experience.endDate}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/55 px-2.5 py-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {experience.location}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {experience.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
