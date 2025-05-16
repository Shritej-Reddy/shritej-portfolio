'use client';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto py-20 px-4"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#F4631E]">Let&apos;s Talk</h1>
      <p className="text-muted-foreground text-lg mb-4">
        Feel free to drop me a message — whether it’s a project, opportunity, or just a hello.
      </p>
      <a href="mailto:youremail@example.com" className="underline text-[#309898]">
        youremail@example.com
      </a>
    </motion.section>
  );
}
