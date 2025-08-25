import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontent
  { name: "Adobe Photoshop", level: 80, category: "frontend" },
  { name: "AJAX", level: 95, category: "frontend" },
  { name: "Bootstrap", level: 97, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Expo CLI", level: 100, category: "frontend" },
  { name: "Expo Vector Icons", level: 100, category: "frontend" },
  { name: "Flutter", level: 60, category: "frontend" },
  { name: "Firebase", level: 80, category: "frontend" },
  { name: "Figma", level: 75, category: "frontend" },
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "JQuery", level: 95, category: "frontend" },
  { name: "lucide-react", level: 100, category: "frontend" },
  { name: "NextJS", level: 60, category: "frontend" },
  { name: "ReactJS", level: 97, category: "frontend" },
  { name: "React Hooks", level: 90, category: "frontend" },
  { name: "React Native", level: 98, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },
  { name: "Redux Thunk", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Typescript", level: 90, category: "frontend" },
  { name: "Vite", level: 95, category: "frontend" },
  { name: "Zustand", level: 90, category: "frontend" },

  //   Backend
  { name: "codeIgniter", level: 70, category: "backend" },
  { name: "Fastlane", level: 80, category: "backend" },
  { name: "GraphQL", level: 80, category: "backend" },
  { name: "MySQL", level: 98, category: "backend" },
  { name: "NodeJS", level: 80, category: "backend" },
  { name: "NPM", level: 95, category: "backend" },
  { name: "PHP", level: 95, category: "backend" },
  { name: "PostgreSQL", level: 95, category: "backend" },
  { name: "prisma", level: 90, category: "backend" },
  { name: "RESTful API", level: 95, category: "backend" },
  { name: "Typo3CMS", level: 50, category: "backend" },

  //   Tools & DevOps
  { name: "Confluence", level: 90, category: "tools" },
  { name: "FileZilla", level: 98, category: "tools" },
  { name: "Git", level: 95, category: "tools" },
  { name: "Github Actions", level: 80, category: "tools" },
  { name: "Jest", level: 65, category: "tools" },
  { name: "Jira", level: 95, category: "tools" },
  { name: "Scrum", level: 100, category: "tools" },
  { name: "SugarCRM", level: 50, category: "tools" },
  { name: "SVN", level: 100, category: "tools" },
  { name: "Trello", level: 100, category: "tools" },
  { name: "Vercel", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
