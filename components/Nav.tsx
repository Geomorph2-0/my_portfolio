"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/building", label: "Building" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastY.current || currentY < 80);
      lastY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-(--border)">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-accent"
        >
          ~/portfolio
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors hover:text-accent ${
                pathname === href
                  ? "text-accent font-medium"
                  : "text-(--muted)"
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-1.5 rounded-md text-(--muted) hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-1.5 text-(--muted)"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="p-1.5 text-(--muted)"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-(--border) px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm ${
                pathname === href
                  ? "text-accent font-medium"
                  : "text-(--muted)"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
