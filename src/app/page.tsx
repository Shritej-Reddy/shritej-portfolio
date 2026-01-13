"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";
import SkillsSection from "@/components/ui/SkillsSection";
import Timeline from "@/components/ui/Timeline";
import ProjectModal from "@/components/ui/ProjectModal";
import StatsSection from "@/components/ui/StatsSection";
import Terminal from "@/components/ui/Terminal";
import { ChevronDown } from "lucide-react";

export default function HomePage() {
  useMagneticEffect(".magnetic", 0.3);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "DevToolKit",
      description:
        "A one-stop toolkit for developers with regex tester, UUID generator, JWT decoder, and more.",
      longDescription:
        "DevToolKit is a comprehensive web application designed to help developers with common tasks. It includes tools for testing regular expressions, generating UUIDs, decoding JWT tokens, and many other utilities that developers use daily. Built with a focus on performance and user experience.",
      image: "devtoolkit.png",
      github: "https://github.com/Shritej-Reddy/devtoolkit",
      live: "https://devtoolkit.vercel.app/",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Regex tester with real-time matching",
        "UUID generator with multiple formats",
        "JWT token decoder and validator",
        "Color palette generator",
        "Base64 encoder/decoder",
      ],
    },
    {
      title: "InspoDeck",
      description:
        "Daily curated design inspiration dashboard with trending Dribbble and Behance shots.",
      longDescription:
        "InspoDeck aggregates the best design inspiration from Dribbble and Behance, providing designers and developers with a daily curated feed of trending shots. The platform features smart filtering, collections, and a beautiful interface for browsing design work.",
      image: "inspodeck.png",
      github: "https://github.com/Shritej-Reddy/InspoDeck",
      live: "https://inspo-deck.vercel.app/",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      features: [
        "Daily curated design inspiration",
        "Integration with Dribbble and Behance APIs",
        "Smart filtering and search",
        "Save favorite designs",
        "Responsive design",
      ],
    },
    {
      title: "FocusScape",
      description:
        "A clean Pomodoro + deep work tracker with animations, sounds, and keyboard control.",
      longDescription:
        "FocusScape is a productivity application that combines the Pomodoro Technique with deep work tracking. It features beautiful animations, customizable sounds, and full keyboard control for a distraction-free focus experience.",
      image: "focusscape.png",
      github: "#",
      live: "#",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Pomodoro timer with customizable intervals",
        "Deep work session tracking",
        "Beautiful animations and transitions",
        "Sound notifications",
        "Keyboard shortcuts",
      ],
    },
  ];

  const { displayedText: typingText } = useTypingEffect(
    "Frontend engineer focused on building performant interfaces, delightful user interactions, and creative developer tools.",
    30,
    500
  );

  return (
    <main className="cursor-none min-h-screen bg-background text-foreground font-sans px-4 sm:px-6 md:px-16 py-12 space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-4 space-y-6 relative min-h-[70vh] flex flex-col justify-center"
      >
        <div className="relative">
          {/* Animated gradient background effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#309898]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF9F00]/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight relative z-10">
            Hi, I&apos;m <span className="text-[#F4631E]">Shritej</span>
            <br />I craft <span className="text-[#309898]">clean</span>,<br />
            <span className="text-[#FF9F00]">interactive</span> web experiences.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto min-h-[3rem]">
            {typingText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-5 py-2 text-sm border border-[#309898] rounded hover:bg-[#309898]/10 transition magnetic"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-5 py-2 text-sm border border-[#CB0404] rounded hover:bg-[#CB0404]/10 transition magnetic"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
        id="projects"
      >
        <h2 className="text-3xl font-semibold mb-8 border-b border-[#CB0404] inline-block pb-2">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card
                className="group relative block overflow-hidden transition-all hover:scale-[1.015] hover:shadow-2xl hover:border-[#FF9F00]/40 border border-border magnetic will-change-transform cursor-pointer"
                onClick={() => setSelectedProject(i)}
              >
                <CardContent className="p-4 sm:p-6 space-y-4">
                  {project.image && (
                    <Image
                      src={`/${project.image}`}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-auto max-h-48 object-cover rounded-md border border-muted"
                      priority={i === 0}
                    />
                  )}
                  <h3 className="text-xl font-bold text-[#FF9F00] group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  {project.techStack && (
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-4 mt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm underline hover:text-[#309898] transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm underline hover:text-[#CB0404] transition"
                    >
                      GitHub
                    </a>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(i);
                      }}
                      className="text-sm underline hover:text-[#FF9F00] transition"
                    >
                      Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Timeline Section */}
      <Timeline />

      {/* Stats Section */}
      <StatsSection />

      {/* Terminal Section */}
      <Terminal />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject !== null ? projects[selectedProject] : null}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
