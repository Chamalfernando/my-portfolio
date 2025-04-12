import React from "react";
import { socialLinks } from "../data/socialLinks";
import { FaGoogle } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-white py-12 shadow-inner">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
      <p className="mb-4">📧 chamaldeshitha2001@gmail.com</p>

      <ul className="flex justify-center space-x-6 mb-6 text-2xl">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
              title={link.name}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        © 2025 Chamal Fernando. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
