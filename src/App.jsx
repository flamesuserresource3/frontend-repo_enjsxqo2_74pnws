import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function Divider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-200/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Features />
        <section id="pricing" className="py-20 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Flexible pricing</h2>
              <p className="mt-3 text-slate-600">Choose a plan that fits your mission requirements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Starter', price: 'Free', perks: ['Interactive 3D demo', 'Basic telemetry', 'Community support'] },
                { name: 'Pro', price: '$29/mo', perks: ['Advanced controls', 'Priority support', 'Cloud sync'] },
                { name: 'Enterprise', price: 'Contact', perks: ['Fleet management', 'Custom integrations', 'SLA & onboarding'] },
              ].map((tier) => (
                <div key={tier.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-3xl font-extrabold tracking-tight">{tier.price}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {tier.perks.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a href="#get-started" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 text-white py-2.5 font-medium hover:bg-slate-800">Select</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
