"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  organization?: string;
  location?: string;
  description: string;
  date: string;
  type: "work" | "education" | "achievement";
  tags?: string[];
}

const timelineItems: TimelineItem[] = [
  {
    id: "1",
    title: "Frontend Engineer",
    organization: "Your Company",
    location: "Remote",
    description:
      "Building performant web applications with React and Next.js. Focused on creating delightful user experiences and optimizing performance.",
    date: "2024 - Present",
    type: "work",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    title: "Software Developer",
    organization: "Previous Company",
    location: "City, Country",
    description:
      "Developed and maintained multiple web applications. Collaborated with cross-functional teams to deliver high-quality products.",
    date: "2022 - 2024",
    type: "work",
    tags: ["JavaScript", "React", "Node.js"],
  },
  {
    id: "3",
    title: "Bachelor's Degree",
    organization: "University Name",
    location: "City, Country",
    description:
      "Studied Computer Science with focus on web development and software engineering.",
    date: "2018 - 2022",
    type: "education",
    tags: ["Computer Science", "Web Development"],
  },
];

const typeIcons = {
  work: <Briefcase className="w-5 h-5" />,
  education: <GraduationCap className="w-5 h-5" />,
  achievement: <Award className="w-5 h-5" />,
};

const typeColors = {
  work: "bg-[#309898]",
  education: "bg-[#FF9F00]",
  achievement: "bg-[#F4631E]",
};

export default function Timeline() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto py-20 px-4"
      id="experience"
    >
      <h2 className="text-3xl font-semibold mb-12 border-b border-[#CB0404] inline-block pb-2">
        Experience & Timeline
      </h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <TimelineItemComponent key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function TimelineItemComponent({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex items-start gap-6 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Icon */}
      <div className="relative z-10 flex-shrink-0">
        <div
          className={`w-16 h-16 rounded-full ${typeColors[item.type]} flex items-center justify-center text-white shadow-lg`}
        >
          {typeIcons[item.type]}
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        className={`flex-1 ${
          index % 2 === 0 ? "md:pr-12" : "md:pl-12"
        } cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="bg-card border border-border rounded-lg p-6 hover:border-[#FF9F00]/40 transition-all hover:shadow-lg">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-[#FF9F00] mb-1">
                {item.title}
              </h3>
              {item.organization && (
                <p className="text-muted-foreground font-medium">
                  {item.organization}
                  {item.location && ` • ${item.location}`}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-4 line-clamp-2">
            {item.description}
          </p>

          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Expandable Content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {isExpanded && (
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Click to collapse. Add more detailed information here about
                  your experience, achievements, or responsibilities.
                </p>
              </div>
            )}
          </motion.div>

          <button className="text-sm text-[#309898] hover:text-[#FF9F00] transition-colors mt-2">
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
