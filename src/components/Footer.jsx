import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <div className="flex items-center justify-center gap-6 text-zinc-400">
          <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={18} /></a>
          <a href="#" aria-label="GitHub" className="hover:text-white transition-colors"><Github size={18} /></a>
          <a href="mailto:hello@aigenx.app" aria-label="Email" className="hover:text-white transition-colors"><Mail size={18} /></a>
        </div>
        <p className="mt-4 text-xs text-zinc-500">© {new Date().getFullYear()} AI-GenX. All rights reserved.</p>
      </div>
    </footer>
  );
}
