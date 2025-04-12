import React from "react";

const Header = () => (
  <header className="bg-white shadow-md">
    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Chamal Fernando</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-blue-600">
          About
        </a>
        <a href="#skills" className="hover:text-blue-600">
          Skills
        </a>
        <a href="#projects" className="hover:text-blue-600">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
