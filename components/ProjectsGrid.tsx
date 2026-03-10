"use client";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import AnimateIn from "./AnimateIn";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-8 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <AnimateIn key={project.title} delay={i * 80}>
            <ProjectCard project={project} />
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
