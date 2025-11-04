import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Interactive 3D Experience
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
                Futuristic Drone Tech, Reimagined
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed">
                Explore a playful, corporate-grade drone built with next‑gen robotics. Move your cursor to interact with the model in real‑time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 font-semibold shadow-md transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-lg bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 font-semibold border border-slate-200 shadow-sm transition-colors"
                >
                  See Features
                </a>
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div className="text-slate-700">
                  <span className="text-2xl font-bold">4K</span>
                  <p className="text-xs text-slate-500">Ultra HD Camera</p>
                </div>
                <div className="text-slate-700">
                  <span className="text-2xl font-bold">34 min</span>
                  <p className="text-xs text-slate-500">Max Flight Time</p>
                </div>
                <div className="text-slate-700">
                  <span className="text-2xl font-bold">12 km</span>
                  <p className="text-xs text-slate-500">Transmission</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative h-[360px] sm:h-[520px] lg:h-[640px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
              <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
