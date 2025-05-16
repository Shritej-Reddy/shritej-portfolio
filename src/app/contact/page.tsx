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
      <h1 className="text-4xl font-bold mb-6 text-[#F4631E]">Let’s Work Together</h1>
      <p className="text-muted-foreground text-lg mb-6">
        Fill out the form below and I’ll get back to you as soon as possible.
      </p>
      <iframe
        src="https://tally.so/r/3lZOkk"
        width="100%"
        height="500"
        className="rounded-md border border-muted"
        title="Contact Form"
      />
    </motion.section>
  );
}
