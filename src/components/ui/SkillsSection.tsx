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
  Cloud,
  TestTube,
  Brain,
  Lock,
  Layers,
  Box,
  Network,
  FileCode,
  Server,
  Container,
  Rocket,
  BarChart3,
} from "lucide-react";

interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  icon?: React.ReactNode;
}

const skills: Skill[] = [
  // Frontend Core
  { name: "JavaScript (ES6+)", level: 95, category: "Frontend", icon: <Code /> },
  { name: "TypeScript", level: 92, category: "Frontend", icon: <Code /> },
  { name: "HTML5", level: 95, category: "Frontend", icon: <FileCode /> },
  { name: "CSS3", level: 95, category: "Frontend", icon: <Palette /> },
  
  // Frontend Frameworks
  { name: "React (Hooks)", level: 93, category: "Frontend", icon: <Code /> },
  { name: "Next.js", level: 90, category: "Frontend", icon: <Globe /> },
  { name: "jQuery", level: 85, category: "Frontend", icon: <Code /> },
  
  // Styling & UI
  { name: "Tailwind CSS", level: 95, category: "Frontend", icon: <Palette /> },
  { name: "Sass / LESS", level: 88, category: "Frontend", icon: <Palette /> },
  { name: "Framer Motion", level: 90, category: "Frontend", icon: <Zap /> },
  { name: "Responsive Design", level: 95, category: "Frontend", icon: <Smartphone /> },
  { name: "Cross-browser Compatibility", level: 92, category: "Frontend", icon: <Globe /> },
  { name: "Accessibility (a11y)", level: 88, category: "Frontend", icon: <Settings /> },
  
  // Frontend Tooling
  { name: "Webpack", level: 85, category: "Frontend", icon: <Box /> },
  { name: "Frontend Performance Optimization", level: 90, category: "Frontend", icon: <Zap /> },
  { name: "Client-side Caching", level: 88, category: "Frontend", icon: <Zap /> },
  { name: "Asset Optimization", level: 90, category: "Frontend", icon: <Zap /> },
  
  // Backend Languages
  { name: "Node.js", level: 92, category: "Backend", icon: <Server /> },
  { name: "Python", level: 90, category: "Backend", icon: <Code /> },
  { name: "Java", level: 85, category: "Backend", icon: <Code /> },
  { name: "C#", level: 80, category: "Backend", icon: <Code /> },
  
  // Backend Frameworks
  { name: "Express.js", level: 92, category: "Backend", icon: <Server /> },
  
  // API & Communication
  { name: "REST APIs", level: 95, category: "Backend", icon: <Network /> },
  { name: "SOAP APIs", level: 85, category: "Backend", icon: <Network /> },
  { name: "GraphQL", level: 88, category: "Backend", icon: <Network /> },
  { name: "Swagger / OpenAPI", level: 90, category: "Backend", icon: <FileCode /> },
  
  // Auth & Security
  { name: "OAuth 2.0", level: 90, category: "Backend", icon: <Lock /> },
  { name: "JWT", level: 92, category: "Backend", icon: <Lock /> },
  { name: "Role-Based Access Control (RBAC)", level: 88, category: "Backend", icon: <Lock /> },
  { name: "Secure API Design", level: 90, category: "Backend", icon: <Lock /> },
  
  // Backend Patterns
  { name: "Server-Driven UI", level: 85, category: "Backend", icon: <Layers /> },
  { name: "Middleware Development", level: 90, category: "Backend", icon: <Layers /> },
  { name: "Request Lifecycle Optimization", level: 88, category: "Backend", icon: <Zap /> },
  { name: "Regex-based Search", level: 90, category: "Backend", icon: <Code /> },
  
  // Databases
  { name: "PostgreSQL", level: 92, category: "Database", icon: <Database /> },
  { name: "SQL", level: 93, category: "Database", icon: <Database /> },
  { name: "MongoDB", level: 88, category: "Database", icon: <Database /> },
  { name: "Database Schema Design", level: 90, category: "Database", icon: <Database /> },
  { name: "Performance Tuning", level: 88, category: "Database", icon: <Zap /> },
  { name: "Query Optimization", level: 90, category: "Database", icon: <Zap /> },
  
  // Cloud & Azure
  { name: "Azure Function Apps", level: 88, category: "Cloud", icon: <Cloud /> },
  { name: "Azure Service Bus", level: 85, category: "Cloud", icon: <Cloud /> },
  { name: "Azure App Services", level: 90, category: "Cloud", icon: <Cloud /> },
  { name: "Azure App Registration", level: 88, category: "Cloud", icon: <Cloud /> },
  { name: "Cloud-native Deployments", level: 90, category: "Cloud", icon: <Cloud /> },
  { name: "Scalable Microservices Architecture", level: 88, category: "Cloud", icon: <Cloud /> },
  
  // DevOps
  { name: "Git", level: 95, category: "DevOps", icon: <GitBranch /> },
  { name: "GitHub", level: 95, category: "DevOps", icon: <GitBranch /> },
  { name: "GitHub Actions", level: 90, category: "DevOps", icon: <GitBranch /> },
  { name: "Docker", level: 88, category: "DevOps", icon: <Container /> },
  { name: "Containerized Development", level: 88, category: "DevOps", icon: <Container /> },
  { name: "Deployment Pipelines", level: 90, category: "DevOps", icon: <Rocket /> },
  
  // Testing
  { name: "Jest", level: 90, category: "Testing", icon: <TestTube /> },
  { name: "Mocha", level: 85, category: "Testing", icon: <TestTube /> },
  { name: "Code Reviews", level: 92, category: "Testing", icon: <TestTube /> },
  { name: "Agile Development Practices", level: 90, category: "Testing", icon: <Settings /> },
  
  // ML / AI Core
  { name: "Supervised & Unsupervised Learning", level: 85, category: "ML/AI", icon: <Brain /> },
  { name: "Feature Engineering", level: 88, category: "ML/AI", icon: <Brain /> },
  { name: "Model Evaluation & Metrics", level: 85, category: "ML/AI", icon: <BarChart3 /> },
  { name: "Bias / Variance Tradeoffs", level: 82, category: "ML/AI", icon: <Brain /> },
  
  // ML Stack
  { name: "Python for ML", level: 90, category: "ML/AI", icon: <Code /> },
  { name: "NumPy", level: 88, category: "ML/AI", icon: <BarChart3 /> },
  { name: "Pandas", level: 90, category: "ML/AI", icon: <BarChart3 /> },
  { name: "Scikit-learn", level: 88, category: "ML/AI", icon: <Brain /> },
  
  // Deep Learning
  { name: "PyTorch", level: 85, category: "ML/AI", icon: <Brain /> },
  { name: "TensorFlow", level: 82, category: "ML/AI", icon: <Brain /> },
  { name: "Neural Networks", level: 80, category: "ML/AI", icon: <Brain /> },
  { name: "Training / Validation Pipelines", level: 85, category: "ML/AI", icon: <Layers /> },
  
  // Applied AI
  { name: "Model Inference APIs", level: 88, category: "ML/AI", icon: <Network /> },
  { name: "AI-powered Feature Integration", level: 90, category: "ML/AI", icon: <Zap /> },
  { name: "Data Pipelines for ML", level: 88, category: "ML/AI", icon: <Layers /> },
  { name: "Model Versioning Concepts", level: 85, category: "ML/AI", icon: <Settings /> },
  
  // AI Engineering Production
  { name: "Serving ML Models", level: 88, category: "ML/AI", icon: <Server /> },
  { name: "API-based Inference", level: 90, category: "ML/AI", icon: <Network /> },
  { name: "Latency & Cost Optimization", level: 88, category: "ML/AI", icon: <Zap /> },
  { name: "Monitoring Model Performance", level: 85, category: "ML/AI", icon: <BarChart3 /> },
  { name: "Data Drift Awareness", level: 82, category: "ML/AI", icon: <BarChart3 /> },
  
  // LLM / Modern AI
  { name: "Prompt Engineering", level: 88, category: "ML/AI", icon: <Brain /> },
  { name: "Embedding-based Search", level: 85, category: "ML/AI", icon: <Brain /> },
  { name: "RAG (Retrieval Augmented Generation)", level: 85, category: "ML/AI", icon: <Brain /> },
  { name: "OpenAI / Open-source LLM APIs", level: 88, category: "ML/AI", icon: <Network /> },
];

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code className="w-5 h-5" />,
  Backend: <Server className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  DevOps: <GitBranch className="w-5 h-5" />,
  Testing: <TestTube className="w-5 h-5" />,
  "ML/AI": <Brain className="w-5 h-5" />,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState<boolean>(false);
  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  // When category changes, reset showAll
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  // Determine which skills to display
  const shouldLimitSkills = selectedCategory === "All" && !showAll;
  const displayedSkills = shouldLimitSkills ? filteredSkills.slice(0, 15) : filteredSkills;
  const hasMoreSkills = filteredSkills.length > 15 && selectedCategory === "All";

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
            onClick={() => handleCategoryChange(category)}
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
        {displayedSkills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>

      {/* Show More Button */}
      {hasMoreSkills && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 rounded-md text-sm font-medium transition-all border border-[#309898] text-[#309898] hover:bg-[#309898] hover:text-white"
          >
            {showAll ? "Show less" : `Show more (${filteredSkills.length - 15} more)`}
          </button>
        </div>
      )}
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
      <div className="p-6 rounded-lg border border-border bg-card hover:border-[#FF9F00]/40 transition-all hover:shadow-lg hover:scale-[1.02] magnetic will-change-transform">
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
