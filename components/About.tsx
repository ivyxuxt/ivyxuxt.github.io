"use client";

const links = [
  { label: "GitHub", href: "https://github.com/ivyxuxt", external: true },
  { label: "LinkedIn", href: "https://linkedin.com/in/ivyxuxt", external: true },
  { label: "Email", href: "mailto:ivyxu127@mit.edu", external: false },
  { label: "CV", href: "/resume.pdf", external: true },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto" style={{ borderTop: "1px solid #91C4C3" }}>
      <h2 className="text-2xl font-bold text-slate-900 mb-8">About</h2>
      <div className="flex gap-8 items-start">
        {/* Photo */}
        <img
          src="/profile.jpg"
          alt="Ivy Xu"
          className="w-36 h-36 rounded-full object-cover shrink-0 hidden sm:block"
          style={{ outline: "3px solid #91C4C3", outlineOffset: "3px" }}
        />
        {/* Content */}
        <div className="flex-1">
          <p className="text-slate-600 leading-relaxed mb-8">
            Ivy Xu is a Master of Business Analytics candidate at MIT Sloan School of Management,
            graduating in August 2026. She graduated from Haverford College in May 2025 with a BS in
            Mathematics and BA in Political Science, summa cum laude. Her work has spanned GenAI,
            machine learning, optimization, and causal inference across industries including tech,
            healthcare, and finance. Ivy enjoys applying data-driven solutions to tackle real-world
            business problems. In her free time, she enjoys snowboarding, doing pottery, and exploring
            restaurants with friends.
          </p>
          {/* Identity + links */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4" style={{ borderTop: "1px solid #e2e8f0" }}>
            <div className="text-sm text-slate-500">
              <span className="font-medium text-slate-700">Ivy Xu</span>
              <span className="mx-2 text-slate-300">·</span>
              Data Science &amp; Analytics · MIT MBAn
            </div>
            <div className="flex gap-4 sm:ml-auto">
              {links.map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-sm transition-colors"
                  style={{ color: "#94a3b8" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#80A1BA")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
