import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Python", level: 90, category: "languages" },
  { name: "SQL", level: 85, category: "languages" },
  { name: "C++", level: 90, category: "languages" },
  { name: "Java", level: 40, category: "languages" },
  { name: "HTML/CSS", level: 80, category: "languages" },
  { name: "JavaScript", level: 80, category: "languages" },
  { name: "TypeScript", level: 70, category: "languages" },

  // tools & Frameworks
  { name: "PyTorch", level: 90, category: "tools" },
  { name: "PySpark", level: 80, category: "tools" },
  { name: "Kafka", level: 60, category: "tools" },
  { name: "Numpy", level: 85, category: "tools" },
  { name: "Pandas", level: 85, category: "tools" },
  { name: "scikit-learn", level: 70, category: "tools" },
  { name: "Matplotlib", level: 80, category: "tools" },
  { name: "Node.js", level: 70, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Git", level: 90, category: "tools" },

  // databasess
  { name: "PostgreSQL", level: 80, category: "databases" },
  { name: "MySQL", level: 75, category: "databases" },
  { name: "Oracle SQL Developer", level: 70, category: "databases" },
  { name: "Cassandra", level: 75, category: "databases" },
  { name: "MongoDB", level: 60, category: "databases" },
  { name: "ElasticSearch", level: 40, category: "databases" },

  // Operating Systems
  { name: "Linux & Bash Scripting", level: 80, category: "Operating Systems" },
  { name: "Windows", level: 90, category: "Operating Systems" }
];

const categories = ["all", "languages", "tools", "databases", "Operating Systems"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");    // To check which category is currently selected

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    )

    return (<section 
                id="skills" className="py-24 px-4 relative bg-secondary/30"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold md-12 text-center">
                        My <span className="text-primary"> Skills</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-6 mt-6">
                        {categories.map((category, key) => (
                            <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                            >
                            {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSkills.map((skill, key) => (
                                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                    <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                            <div 
                                                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                                style={{width: skill.level + "%"}}
                                            />
                                        </div>
                                        <div className="text-right mt-1">
                                            <span className="text-sm text-muted-foregroudn">
                                                {skill.level}%
                                            </span>
                                        </div>
                                    </div>    
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
    );
}