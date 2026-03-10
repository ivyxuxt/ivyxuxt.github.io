"use client";

export default function Hero() {
  return (
    <div style={{ background: "linear-gradient(135deg, #FBFBFB 0%, #e8f4f4 100%)" }}>
      <section className="pt-24 pb-8 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-6">
          <img
            src="/profile.jpg"
            alt="Ivy Xu"
            className="w-20 h-20 rounded-full object-cover shrink-0"
            style={{ outline: "3px solid #91C4C3", outlineOffset: "2px" }}
          />
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-1">Ivy Xu</h1>
            <p className="text-base text-slate-500 mb-4">Data Science &amp; Analytics · MIT MBAn</p>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://github.com/ivyxuxt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white font-medium transition-colors"
                style={{ backgroundColor: "#80A1BA" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#6b8fa8")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#80A1BA")}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/ivyxuxt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-medium transition-colors"
                style={{ border: "1.5px solid #91C4C3", color: "#4a7a7a" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#91C4C3"; e.currentTarget.style.color = "#1e293b"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ""; e.currentTarget.style.color = "#4a7a7a"; }}
              >
                LinkedIn
              </a>
              <a
                href="mailto:ivyxu127@mit.edu"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-medium transition-colors"
                style={{ border: "1.5px solid #91C4C3", color: "#4a7a7a" }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#91C4C3"; e.currentTarget.style.color = "#1e293b"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ""; e.currentTarget.style.color = "#4a7a7a"; }}
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
