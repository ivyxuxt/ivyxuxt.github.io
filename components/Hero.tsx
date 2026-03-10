export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-slate-900 tracking-tight mb-2">Ivy Xu</h1>
      <p className="text-xl text-slate-500 mb-6">Data Science &amp; Analytics · MIT MBAn</p>
      <div className="flex gap-4 text-sm">
        <a
          href="https://github.com/ivyxuxt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ivyxuxt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ivyxu127@mit.edu"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 hover:text-slate-900 transition-colors"
        >
          Email
        </a>
      </div>
    </section>
  );
}
