export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <span>© {new Date().getFullYear()} Ivy Xu</span>
        <div className="flex gap-6">
          <a
            href="https://github.com/ivyxuxt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ivyxuxt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ivyxu127@mit.edu"
            className="hover:text-slate-700 transition-colors"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-700 transition-colors"
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
