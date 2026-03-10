import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-sm transition-all">
      <h3 className="font-semibold text-slate-900 leading-snug">{project.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3 pt-1">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-xs font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </div>
  );
}
