import { skillCategories, skills } from "@/lib/data";

type SkillCategoryId = (typeof skillCategories)[number]["id"];

const categoryLabelMap: Record<(typeof skillCategories)[number]["id"], string> = {
  frontend: "ui engineering",
  backend: "application logic",
  databases: "data systems",
  ai_automation: "automation workflows",
  swe_tools: "engineering tools",
  design_other: "collab & design",
};

const categoryPriorityMap: Record<SkillCategoryId, number> = {
  frontend: 1,
  backend: 2,
  databases: 3,
  swe_tools: 4,
  ai_automation: 5,
  design_other: 6,
};

const skillPriorityMap: Partial<Record<string, number>> = {
  React: 100,
  "Next.js": 99,
  TypeScript: 98,
  JavaScript: 97,
  "Tailwind CSS": 96,
  "HTML/CSS": 95,
  GSAP: 94,
  Laravel: 100,
  PHP: 99,
  Python: 80,
  SQL: 100,
  MySQL: 99,
  PostgreSQL: 98,
  Firebase: 97,
  Supabase: 96,
  "SQL Server": 80,
  Oracle: 79,
  Navicat: 78,
  "Git/GitHub": 100,
  Postman: 99,
  Vercel: 98,
  "VS Code": 97,
  Cursor: 96,
  AWS: 80,
  Linux: 79,
  Trello: 70,
  ClickUp: 69,
  Lucidchart: 68,
  Mermaid: 67,
  n8n: 100,
  Make: 99,
  Codex: 98,
  "Claude Code": 97,
  WordPress: 100,
  Joomla: 99,
  Canva: 98,
  "Adobe Creative Suite": 97,
  "Microsoft Office": 96,
};

const getSkillPriority = (skillName: string) => skillPriorityMap[skillName] ?? 0;

export function Skills() {
  const orderedCategories = [...skillCategories].sort(
    (left, right) => categoryPriorityMap[left.id] - categoryPriorityMap[right.id]
  );

  return (
    <section id="skills" className="scroll-mt-28">
      <div className="section-panel rise-in">
        <div className="section-panel-header">
          <p className="label-mono text-muted-foreground">Skills</p>
          <h2 className="display-title mt-2 text-3xl sm:text-4xl">
            Technologies and tools I use in practice
          </h2>
          <p className="mt-3 max-w-3xl text-sm text-muted-foreground sm:text-base">
            Organized by function, with the tools I use most often in web
            projects listed first and supporting tools included alongside them.
          </p>
        </div>

        <div className="section-panel-body">
          <div className="grid gap-4 md:grid-cols-2">
            {orderedCategories.map((category) => {
              const categorySkills = [...skills]
                .filter((skill) => skill.category === category.id)
                .sort((left, right) => {
                  const priorityDifference =
                    getSkillPriority(right.name) - getSkillPriority(left.name);

                  if (priorityDifference !== 0) {
                    return priorityDifference;
                  }

                  return left.name.localeCompare(right.name);
                });
              const CategoryIcon = category.icon;

              return (
                <article
                  key={category.id}
                  className="rounded-xl border border-border/80 bg-background/70 p-4"
                >
                  <header className="mb-4 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/60 text-muted-foreground">
                      <CategoryIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="label-mono text-muted-foreground">
                        {categorySkills.length} {categoryLabelMap[category.id]}
                      </p>
                    </div>
                  </header>

                  <ul className="space-y-3">
                    {categorySkills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between gap-3 rounded-lg border border-border/60 bg-background/50 px-3 py-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
