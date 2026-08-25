import { useState } from "react";
import { cn } from "@/lib/utils";
import { categories, categoryLabels, skillLevels, skills } from "@/constants";

const levelStyles = {
  core: "bg-primary/15 text-primary border-primary/40",
  proficient: "bg-secondary text-secondary-foreground border-border",
  familiar: "bg-transparent text-muted-foreground border-border",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const grouped = Object.keys(skillLevels)
    .sort((a, b) => skillLevels[a].order - skillLevels[b].order)
    .map((level) => ({
      level,
      label: skillLevels[level].label,
      items: visibleSkills.filter((skill) => skill.level === level),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Grouped by how deep I actually go, not by a number I made up.{" "}
          <strong className="font-medium text-foreground">Core</strong> is what
          I use daily and can lead on,{" "}
          <strong className="font-medium text-foreground">Proficient</strong> is
          what I have shipped production work with, and{" "}
          <strong className="font-medium text-foreground">Familiar</strong> is
          where I am comfortable but still learning.
        </p>

        <div
          role="tablist"
          aria-label="Filter skills by category"
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm rounded-full border transition-colors duration-300",
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/80 hover:bg-secondary hover:text-foreground"
              )}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        <div className="space-y-10">
          {grouped.map(({ level, label, items }) => (
            <div key={level}>
              <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                {label}
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
                <span className="text-xs font-normal normal-case">
                  {items.length}
                </span>
              </h3>

              <ul className="flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <li key={skill.name}>
                    <span
                      className={cn(
                        "inline-block px-3.5 py-1.5 rounded-lg border text-sm font-medium transition-colors",
                        levelStyles[skill.level]
                      )}
                    >
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
