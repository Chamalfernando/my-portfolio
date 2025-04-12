import React from "react";

// src/components/Footer.tsx
const Footer = () => (
  <>
    <section id="contact" className="py-12 px-6 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
      <p>Interested in working together? Let's connect!</p>
      <p className="mt-2">📧 chamaldeshitha2001@gmail.com</p>
      <p>
        🔗{" "}
        <a
          href="https://www.linkedin.com/in/chamal-fernando/"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </section>

    <footer className="bg-white text-center py-6 mt-12 shadow-inner">
      <p className="text-sm">© 2025 Chamal Fernando. All rights reserved.</p>
    </footer>
  </>
);

export default Footer;
