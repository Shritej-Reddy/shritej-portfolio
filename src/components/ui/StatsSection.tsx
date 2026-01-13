"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { Github, Code, GitBranch, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
  color: string;
}

const defaultStats: Stat[] = [
  {
    label: "GitHub Repositories",
    value: 25,
    icon: <Github className="w-6 h-6" />,
    color: "text-[#309898]",
  },
  {
    label: "Projects Completed",
    value: 15,
    icon: <Code className="w-6 h-6" />,
    color: "text-[#FF9F00]",
  },
  {
    label: "Commits This Year",
    value: 500,
    suffix: "+",
    icon: <GitBranch className="w-6 h-6" />,
    color: "text-[#F4631E]",
  },
  {
    label: "Lines of Code",
    value: 50,
    suffix: "K+",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-[#CB0404]",
  },
];

export default function StatsSection() {
  const [stats, setStats] = useState<Stat[]>(defaultStats);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        
        const data = await response.json();
        
        setStats([
          {
            label: "GitHub Repositories",
            value: data.repositories || 25,
            icon: <Github className="w-6 h-6" />,
            color: "text-[#309898]",
          },
          {
            label: "Projects Completed",
            value: data.projects || 15,
            icon: <Code className="w-6 h-6" />,
            color: "text-[#FF9F00]",
          },
          {
            label: "Commits This Year",
            value: data.commits || 500,
            suffix: "+",
            icon: <GitBranch className="w-6 h-6" />,
            color: "text-[#F4631E]",
          },
          {
            label: "Lines of Code",
            value: data.linesOfCode || 50,
            suffix: "K+",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "text-[#CB0404]",
          },
        ]);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
        // Keep default values on error
      } finally {
        setIsLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 px-4"
      id="stats"
    >
      <h2 className="text-3xl font-semibold mb-12 border-b border-[#CB0404] inline-block pb-2">
        Stats & Metrics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard 
            key={stat.label} 
            stat={stat} 
            index={index} 
            isLoading={isLoading && index === 0}
          />
        ))}
      </div>

      {/* GitHub Contribution Graph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 p-6 bg-muted/50 rounded-lg border border-border"
      >
        <h3 className="text-lg font-semibold mb-4">GitHub Activity</h3>
        <div className="w-full overflow-hidden rounded-md relative aspect-video">
          <Image
            src={`https://github-readme-activity-graph.vercel.app/graph?username=Shritej-Reddy&theme=github&hide_border=true`}
            alt="GitHub Activity Graph"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

function StatCard({ 
  stat, 
  index,
  isLoading 
}: { 
  stat: Stat; 
  index: number;
  isLoading?: boolean;
}) {
  const { count, elementRef } = useCountUp(stat.value, 2000, true);

  return (
    <motion.div
      ref={elementRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-6 rounded-lg border border-border bg-card hover:border-[#FF9F00]/40 transition-all hover:shadow-lg"
    >
      <div className={`${stat.color} mb-4`}>{stat.icon}</div>
      <div className="text-3xl font-bold mb-2">
        {isLoading ? (
          <span className="inline-block w-16 h-8 bg-muted animate-pulse rounded" />
        ) : (
          <>
            {count}
            {stat.suffix}
          </>
        )}
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
}
