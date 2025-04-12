// src/components/Skills.tsx
import React from "react";
import { skills } from "../data/skills";

const Skills = () => (
  <section id="skills" className="py-12 px-6 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-4">Skills</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

export default Skills;
