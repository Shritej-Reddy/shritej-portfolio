"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code,
  Database,
  Palette,
  Settings,
  Globe,
  Smartphone,
  Zap,
  GitBranch,
} from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: React.ReactNode;
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "Frontend", icon: <Code /> },
  { name: "Next.js", level: 85, category: "Frontend", icon: <Globe /> },
  { name: "TypeScript", level: 88, category: "Frontend", icon: <Code /> },
  { name: "Tailwind CSS", level: 92, category: "Frontend", icon: <Palette /> },
  { name: "JavaScript", level: 90, category: "Frontend", icon: <Code /> },
  { name: "HTML/CSS", level: 95, category: "Frontend", icon: <Code /> },
  
  // Tools & Others
  { name: "Git", level: 85, category: "Tools", icon: <GitBranch /> },
  { name: "Framer Motion", level: 80, category: "Tools", icon: <Zap /> },
  { name: "Responsive Design", level: 95, category: "Tools", icon: <Smartphone /> },
  { name: "Performance Optimization", level: 85, category: "Tools", icon: <Zap /> },
];

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code className="w-5 h-5" />,
  Backend: <Database className="w-5 h-5" />,
  Tools: <Settings className="w-5 h-5" />,
  Design: <Palette className="w-5 h-5" />,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 px-4"
      id="skills"
    >
      <h2 className="text-3xl font-semibold mb-8 border-b border-[#CB0404] inline-block pb-2">
        Skills & Technologies
      </h2>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-[#309898] text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.section>
  );
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="p-6 rounded-lg border border-border bg-card hover:border-[#FF9F00]/40 transition-all hover:shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-[#309898] group-hover:text-[#FF9F00] transition-colors">
              {skill.icon || categoryIcons[skill.category] || <Code />}
            </div>
            <h3 className="font-semibold text-lg">{skill.name}</h3>
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {skill.level}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`h-full rounded-full ${
              skill.level >= 90
                ? "bg-[#309898]"
                : skill.level >= 75
                ? "bg-[#FF9F00]"
                : "bg-[#F4631E]"
            }`}
          />
        </div>

        {/* 3D Transform Effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 rounded-lg border-2 border-[#FF9F00] pointer-events-none"
            style={{
              transform: "perspective(1000px) rotateX(5deg) rotateY(5deg)",
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
