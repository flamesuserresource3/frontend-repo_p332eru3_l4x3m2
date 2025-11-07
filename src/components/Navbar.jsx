import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_0_rgba(168,85,247,0.25)]'
          : 'bg-transparent'
      } rounded-2xl`}
      aria-label="Primary"
    >
      <div className="flex items-center gap-6 px-5 py-3">
        <a href="#home" className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 font-extrabold tracking-tight text-lg">
          AI-GenX
        </a>
        <ul className="hidden md:flex items-center gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-zinc-300 hover:text-white px-3 py-1 rounded-full transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto">
          <a
            href="#pricing"
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
