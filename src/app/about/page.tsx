'use client';
import { motion } from 'framer-motion';
import { Download, MapPin, Coffee, Code, BookOpen, Music } from 'lucide-react';

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto py-20 px-4 space-y-16"
    >
      {/* Hero Section */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F4631E]">
          About Me
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          I&apos;m a front-end developer who loves crafting functional, beautiful web experiences.
          I enjoy building tools, interfaces, and interactive moments that feel alive and intuitive.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-[#309898]">Who I Am</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I&apos;m passionate about creating digital experiences that are not just functional,
            but delightful. My journey in web development started with curiosity about how things
            work on the internet, and it has evolved into a career focused on building performant,
            accessible, and beautiful interfaces.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
            to open-source projects, or working on side projects that solve real-world problems.
            I believe in continuous learning and staying updated with the latest trends in web
            development.
          </p>
        </div>
      </motion.div>

      {/* Interests Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-[#FF9F00]">Interests & Hobbies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <InterestCard icon={<Code />} title="Coding" />
          <InterestCard icon={<BookOpen />} title="Reading" />
          <InterestCard icon={<Music />} title="Music" />
          <InterestCard icon={<Coffee />} title="Coffee" />
        </div>
      </motion.div>

      {/* Currently Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold text-[#CB0404]">Currently Learning</h2>
        <div className="bg-muted/50 rounded-lg p-6 border border-border">
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#309898] rounded-full"></span>
              Advanced React patterns and performance optimization
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF9F00] rounded-full"></span>
              Three.js and WebGL for 3D web experiences
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F4631E] rounded-full"></span>
              System design and architecture patterns
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Resume Download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-center"
      >
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-[#309898] text-white rounded-md hover:bg-[#309898]/90 transition-colors font-medium"
        >
          <Download className="w-5 h-5" />
          Download Resume
        </a>
      </motion.div>
    </motion.section>
  );
}

function InterestCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="p-4 rounded-lg border border-border bg-card hover:border-[#FF9F00]/40 transition-all text-center">
      <div className="flex justify-center mb-2 text-[#309898]">
        {icon}
      </div>
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}
