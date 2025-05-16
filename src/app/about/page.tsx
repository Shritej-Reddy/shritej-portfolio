'use client';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto py-20 px-4"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#F4631E]">About Me</h1>
      <p className="text-muted-foreground text-lg leading-relaxed">
        I&apos;m a front-end developer who loves crafting functional, beautiful web experiences.
        I enjoy building tools, interfaces, and interactive moments that feel alive and intuitive.
      </p>
    </motion.section>
  );
}
