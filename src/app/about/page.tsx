'use client';
import { motion } from 'framer-motion';
import { Download, MapPin, Coffee, Code, BookOpen, Music, Brain } from 'lucide-react';

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
          I&apos;m an AI Full-Stack Engineer who enjoys building intelligent, scalable software from the ground up. I work across frontend, backend, cloud, and AI layers to turn complex problems into reliable, production-ready systems with thoughtful user experiences.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          I&apos;m particularly interested in how AI capabilities can be embedded into real products—not as demos, but as dependable features that improve how users interact with software.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Available for Opportunities</span>
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
            I&apos;m passionate about building software that is both technically solid and genuinely useful. My journey started with curiosity about how the web works, and it has evolved into designing and engineering end-to-end systems—from clean interfaces to robust APIs, data pipelines, and AI-powered workflows.
          </p>
          <p>
            I enjoy working on problems that require systems thinking, performance optimization, and careful tradeoffs between usability, scalability, and reliability.
          </p>
          <p>
            Outside of core product work, I actively explore applied AI, contribute to side projects, and experiment with new ideas that bridge engineering and intelligence. I strongly believe in continuous learning and building things that hold up in the real world.
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
          <InterestCard icon={<Code />} title="Coding & building side projects" />
          <InterestCard icon={<Brain />} title="Exploring AI & system design" />
          <InterestCard icon={<BookOpen />} title="Reading" />
          <InterestCard icon={<Music />} title="Music" />
          <InterestCard icon={<Coffee />} title="Coffee ☕" />
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
              Applied Machine Learning & AI Engineering
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF9F00] rounded-full"></span>
              Designing and serving AI-powered features in production
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F4631E] rounded-full"></span>
              System design for scalable, distributed applications
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#309898] rounded-full"></span>
              Performance optimization across frontend, backend, and APIs
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF9F00] rounded-full"></span>
              Modern web patterns with React & Next.js (at scale)
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
