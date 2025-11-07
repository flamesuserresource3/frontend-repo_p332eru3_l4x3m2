import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import BackgroundFX from './components/BackgroundFX';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-fuchsia-500/30">
      <BackgroundFX />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Features />
        <Showcase />

        {/* Pricing placeholder section for anchor */}
        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Simple pricing</h2>
            <p className="mt-3 text-zinc-400">Free to try. Pro when you need power.</p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold">Starter</h3>
                <p className="mt-2 text-sm text-zinc-300">50 generations/month</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur-xl ring-1 ring-fuchsia-500/30">
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="mt-2 text-sm text-zinc-300">Unlimited editing + priority</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-lg font-semibold">Studio</h3>
                <p className="mt-2 text-sm text-zinc-300">Teams & commercial use</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
