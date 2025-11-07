import { motion } from 'framer-motion';
import { Sparkles, Wand2, Layers, Images } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Prompt-to-Image',
    desc: 'Turn any idea into stunning visuals with advanced diffusion models.',
    grad: 'from-cyan-500 to-violet-500',
  },
  {
    icon: Wand2,
    title: 'AI Photo Editing',
    desc: 'Erase, enhance, relight, and restyle with natural language.',
    grad: 'from-fuchsia-500 to-cyan-500',
  },
  {
    icon: Layers,
    title: '3D Depth',
    desc: 'Add parallax and depth to your images for immersive results.',
    grad: 'from-violet-500 to-pink-500',
  },
  {
    icon: Images,
    title: 'Image Variations',
    desc: 'Explore multiple styles and compositions in one click.',
    grad: 'from-cyan-500 to-fuchsia-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.12),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          Powerful features for limitless creativity
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl shadow-[0_0_40px_rgba(139,92,246,0.15)]"
            >
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${f.grad} blur-2xl`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
