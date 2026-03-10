"use client";

export default function Nav() {
  return (
    <nav style={{ backgroundColor: "rgba(251,251,251,0.92)" }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-[#91C4C3]/40">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold tracking-tight" style={{ color: "#80A1BA" }}>Ivy Xu</span>
        <div className="flex gap-6 text-sm text-slate-500 items-center">
          <a href="#projects" className="hover:text-slate-800 transition-colors">Projects</a>
          <a href="#about" className="hover:text-slate-800 transition-colors">About</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 py-1 text-white text-sm font-medium transition-colors"
            style={{ backgroundColor: "#80A1BA" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6b8fa8")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#80A1BA")}
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}
