"use client";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useMagneticEffect } from "@/hooks/useMagneticEffect";

export default function HomePage() {
  // useMagneticEffect(".magnetic", 0.1);

  const projects = [
    {
      title: "DevToolKit",
      description:
        "A one-stop toolkit for developers with regex tester, UUID generator, JWT decoder, and more.",
      image: "devtoolkit.png",
      github: "https://github.com/Shritej-Reddy/devtoolkit",
      live: "https://devtoolkit.vercel.app/",
    },
    {
      title: "InspoDeck",
      description:
        "Daily curated design inspiration dashboard with trending Dribbble and Behance shots.",
      image: "inspodeck.png",
      github: "https://github.com/Shritej-Reddy/inspodeck",
      live: "https://inspodeck.vercel.app/",
    },
    {
      title: "FocusScape",
      description:
        "A clean Pomodoro + deep work tracker with animations, sounds, and keyboard control.",
      image: "focusscape.png",
      github: "#",
      live: "#",
    },
  ];

  return (
    <main className="cursor-none min-h-screen bg-background text-foreground font-sans px-4 sm:px-6 md:px-16 py-12 space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-4 space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I’m <span className="text-[#F4631E]">Shritej</span>
          <br />I craft <span className="text-[#309898]">clean</span>,<br />
          <span className="text-[#FF9F00]">interactive</span> web experiences.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          Frontend engineer focused on building performant interfaces,
          delightful user interactions, and creative developer tools.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-5 py-2 text-sm border border-[#309898] rounded hover:bg-[#309898]/10 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-5 py-2 text-sm border border-[#CB0404] rounded hover:bg-[#CB0404]/10 transition"
          >
            Contact Me
          </a>
        </div>
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
              <Card className="transition-all hover:shadow-xl magnetic relative block will-change-transform">
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
                  <h3 className="text-xl font-bold text-[#FF9F00]">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mt-2">
                    <a
                      href={project.live}
                      target="_blank"
                      className="text-sm underline"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-sm underline"
                    >
                      GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
