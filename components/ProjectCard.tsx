"use client";

import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="flex flex-col rounded-3xl overflow-hidden h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: "#ffffff", border: "1.5px solid #e8e8e8" }}
    >
      <div className="p-4 pb-0">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full object-cover rounded-2xl"
          style={{ aspectRatio: "4/3" }}
        />
      </div>

      <div className="flex flex-col gap-3 p-6 flex-1">
        <h3 className="font-bold text-xl text-[#1a1a1a] leading-snug text-center">
          {project.title}
        </h3>

        <ul className="text-base text-[#666] leading-relaxed flex-1 list-disc list-outside pl-4 space-y-1">
          {project.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {/* All labels in one flowing row */}
        <div className="flex flex-wrap gap-1.5 justify-center">
          {[...project.industries, ...project.tags].map((label) => (
            <span
              key={label}
              className="text-sm px-3 py-1 rounded-full font-medium"
              style={{ backgroundColor: "#f2f2f2", color: "#555", border: "1px solid #e0e0e0" }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Link buttons */}
        <div className="flex gap-3 pt-2 justify-center flex-wrap">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="px-5 py-2 rounded-full text-base font-semibold border-2 border-[#d0d0d0] text-[#555] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
