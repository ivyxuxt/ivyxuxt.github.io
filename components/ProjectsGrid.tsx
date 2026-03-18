"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimateIn from "./AnimateIn";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="pt-10 pb-20 px-8 md:px-16 lg:px-24 border-t border-[#e8e8e8]">
      {/* Section header */}
      <div className="text-center mb-12">
        <p style={{ fontFamily: "'Space Mono', monospace" }} className="text-sm text-[#999] mb-2">
          Browse My Recent
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">Projects</h2>
      </div>

      <div className="max-w-[1510px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <AnimateIn key={project.title} delay={i * 80}>
            <ProjectCard project={project} />
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
