const Navbar = () => {
  return (
    <nav className="w-full border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl px-6 py-4 mb-10 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-300 font-bold text-lg">
          K
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white">
            CD Benefit Analyzer
          </h1>
          <p className="text-slate-400 text-sm">
            Mortgage Closing Disclosure Review Dashboard
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm">
          React + Node + Express
        </span>
      </div>
    </nav>
  );
};

export default Navbar;