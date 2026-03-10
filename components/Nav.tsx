"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-slate-900 tracking-tight">Ivy Xu</span>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#projects" className="hover:text-slate-900 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-slate-900 transition-colors">
            About
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}
