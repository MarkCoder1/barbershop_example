"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/book", label: "Book" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-neutral-200 bg-white/90 backdrop-blur dark:bg-neutral-900/90 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          Sharp Edge
        </Link>
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden inline-flex items-center justify-center rounded px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-700"
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-amber-600 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2 text-sm font-medium">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 border-b border-neutral-200 dark:border-neutral-700"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
