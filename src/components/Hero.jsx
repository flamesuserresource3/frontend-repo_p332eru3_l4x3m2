import { useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [prompt, setPrompt] = useState('');

  const handleGenerate = (e) => {
    e.preventDefault();
    // In a future iteration, this would call the backend to generate an image.
    alert(`Generating image for: ${prompt || 'your awesome idea'}`);
  };

  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(147,51,234,0.25)]"
        >
          <span className="block">Create. Edit. Transform</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400"> — with AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-zinc-300"
        >
          Generate stunning visuals from text prompts.
        </motion.p>

        <Typewriter className="mt-4 text-zinc-400" phrases={[
          'Cinematic portraits in seconds',
          'Surreal landscapes with depth',
          'Edit photos with natural language',
          'Create variations with one click',
        ]} />

        <motion.form
          onSubmit={handleGenerate}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 w-full max-w-2xl"
        >
          <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.15)]">
            <input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your image idea..."
              className="w-full rounded-xl bg-transparent px-4 py-3 pr-32 text-white placeholder-zinc-400 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-all"
            >
              Generate
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Typewriter({ phrases, className = '' }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Simple typewriter effect
  useState(() => {
    const timeout = setTimeout(() => {
      if (!reverse) {
        if (subIndex < phrases[index].length) setSubIndex(subIndex + 1);
        else setReverse(true);
      } else {
        if (subIndex > 0) setSubIndex(subIndex - 1);
        else {
          setReverse(false);
          setIndex((index + 1) % phrases.length);
        }
      }
    }, reverse ? 40 : 70);
    return () => clearTimeout(timeout);
  }, [index, subIndex, reverse]);

  return (
    <p className={`text-sm md:text-base ${className}`}>
      <span className="text-zinc-300">{phrases[index].substring(0, subIndex)}</span>
      <span className="ml-1 inline-block h-4 w-0.5 animate-pulse bg-zinc-400 align-middle" />
    </p>
  );
}
