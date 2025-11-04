import { useState } from 'react';
import { Menu, X, Rocket, Shield, Cpu, Zap } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Technology', href: '#technology' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center shadow-md">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">AeroNeon</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-slate-800 transition-colors"
            >
              Get Started
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-started"
                className="block rounded-lg px-3 py-2 bg-slate-900 text-white text-center"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 rounded-md bg-white border p-2"><Cpu className="h-4 w-4 text-emerald-500" />CPU</div>
                <div className="flex items-center gap-2 rounded-md bg-white border p-2"><Shield className="h-4 w-4 text-blue-500" />Safe</div>
                <div className="flex items-center gap-2 rounded-md bg-white border p-2"><Zap className="h-4 w-4 text-yellow-500" />Fast</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
