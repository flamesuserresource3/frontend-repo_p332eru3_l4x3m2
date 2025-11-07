import { motion } from 'framer-motion';

const items = [
  { title: 'Astral Portrait', img: 'https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Neon City', img: 'https://images.unsplash.com/photo-1491897554428-130a60dd4757?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Dreamy Forest', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Cyber Garden', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center"
        >
          See what you can create
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(14,165,233,0.15)]"
            >
              <img src={it.img} alt={it.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white font-medium">{it.title}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
