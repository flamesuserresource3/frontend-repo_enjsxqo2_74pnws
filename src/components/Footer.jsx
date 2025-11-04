export default function Footer() {
  return (
    <footer className="relative py-12 bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-400 to-blue-500 shadow-md" />
            <div>
              <p className="font-semibold text-white">AeroNeon</p>
              <p className="text-xs text-slate-400">Interactive drone experience</p>
            </div>
          </div>
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} AeroNeon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
