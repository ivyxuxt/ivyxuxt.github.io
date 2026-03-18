"use client";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e8e8e8]">
      <div className="max-w-[1510px] mx-auto px-8 py-5 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight text-[#1a1a1a]">IX</span>
        <div className="flex gap-8 text-sm font-medium text-[#555]">
          <a href="#about" className="hover:text-[#1a1a1a] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#1a1a1a] transition-colors">Projects</a>
        </div>
      </div>
    </nav>
  );
}
