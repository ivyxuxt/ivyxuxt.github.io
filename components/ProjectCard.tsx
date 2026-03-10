"use client";

import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="flex flex-col rounded-2xl overflow-hidden h-full hover:-translate-y-1 transition-all duration-200"
      style={{ backgroundColor: "#ffffff", border: "1.5px solid #91C4C3", boxShadow: "0 1px 4px rgba(128,161,186,0.08)" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(128,161,186,0.18)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 1px 4px rgba(128,161,186,0.08)")}
    >
      <img
        src={project.coverImage}
        alt={project.title}
        className="w-full object-cover"
        style={{ height: "160px" }}
      />
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="font-semibold text-slate-900 leading-snug">{project.title}</h3>
        <ul className="text-sm text-slate-600 leading-relaxed flex-1 list-disc list-outside pl-4 space-y-1">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: "#B4DEBD", color: "#1e4a2a", border: "1px solid #91c4aa" }}
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
              className="text-xs font-medium underline underline-offset-2 transition-colors"
              style={{ color: "#80A1BA" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#5a7a96")}
              onMouseLeave={e => (e.currentTarget.style.color = "#80A1BA")}
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
