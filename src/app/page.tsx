'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function HomePage() {
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
          Selected Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#FF9F00] mb-2">
                  Project Title {i}
                </h3>
                <p className="text-muted-foreground mb-4">
                  A short description of the project. Explains what it does and why it’s cool.
                </p>
                <Button data-cursor-hover variant="outline">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
