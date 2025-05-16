'use client';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
      <Link href="/" className="text-2xl font-bold text-[#F4631E]">
        Shritej.dev
      </Link>
      <nav className="flex gap-6 items-center text-muted-foreground">
        <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
