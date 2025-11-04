import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Cloud } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Autonomous Intelligence',
    desc: 'On-board CPU with edge AI for obstacle avoidance, subject tracking, and route optimization.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Safety',
    desc: 'Redundant sensors, geofencing, and encrypted comms keep every mission protected.'
  },
  {
    icon: Zap,
    title: 'High-Performance Motors',
    desc: 'Whisper-quiet propulsion with responsive controls and extended battery efficiency.'
  },
  {
    icon: Cloud,
    title: 'Cloud-Connected',
    desc: 'Fleet management, live telemetry, and OTA updates via secure cloud services.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built for modern aerial missions</h2>
          <p className="mt-3 text-slate-600">A balanced mix of playful interaction and robust, corporate‑grade technology.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-emerald-400 to-blue-500 text-white flex items-center justify-center shadow-md">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
