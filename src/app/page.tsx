"use client";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <main className="cursor-none min-h-screen bg-background text-foreground font-sans px-6 py-12 md:px-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I’m <span className="text-[#F4631E]">Shritej</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          I will look for you and I will find you, and I will kill you
        </p>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Good Luck!!!
        </p>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-semibold mb-8 border-b border-[#CB0404] inline-block pb-2">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 magnetic relative">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="transition-all hover:shadow-xl magnetic relative block will-change-transform">
                <CardContent className="p-6 space-y-4">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-md border border-muted"
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
