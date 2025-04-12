// src/components/Projects.tsx
import React from "react";
import { projects } from "../data/projects";

const Projects = () => (
  <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-6">Projects</h3>
    <div className="space-y-6">
      {projects.map((proj, idx) => (
        <div key={idx} className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-semibold text-lg">{proj.title}</h4>
          <p className="text-sm">{proj.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
