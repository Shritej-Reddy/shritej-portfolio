'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const email = 'tejureddy47@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto py-20 px-4 space-y-12"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#F4631E]">
          Let&apos;s Work Together
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Have a project in mind? Want to collaborate? Or just say hello? I&apos;d love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[#309898] mb-4">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[#309898] focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[#309898] focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-[#309898] focus:border-transparent resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-3 bg-[#309898] text-white rounded-md hover:bg-[#309898]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info & Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-2xl font-semibold text-[#FF9F00] mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Prefer email? Feel free to reach out directly or connect with me on social media.
            </p>
          </div>

          {/* Email */}
          <div className="p-4 rounded-lg border border-border bg-card">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#309898]" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{email}</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                title="Copy email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-[#309898]" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect on Social Media</h3>
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/shritej-reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-[#309898]/40 hover:bg-muted/50 transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[#309898] group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Shritej-Reddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:border-[#FF9F00]/40 hover:bg-muted/50 transition-all group"
              >
                <Github className="w-5 h-5 text-[#FF9F00] group-hover:scale-110 transition-transform" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>

          {/* Availability Status */}
          <div className="p-4 rounded-lg border border-border bg-muted/50">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#309898] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Available for opportunities</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Currently open to freelance projects and full-time opportunities
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tally Form (Alternative) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12"
      >
        <h3 className="text-lg font-semibold mb-4 text-center">Or use the form below</h3>
        <iframe
          src="https://tally.so/r/3lZOkk"
          width="100%"
          height="500"
          className="rounded-md border border-muted"
          title="Contact Form"
        />
      </motion.div>
    </motion.section>
  );
}
