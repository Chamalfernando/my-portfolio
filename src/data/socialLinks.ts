// src/data/socailLinks.ts
import React from "react";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaGithub } from "react-icons/fa";

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chamal-fernando/",
    icon: React.createElement(FaLinkedin),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: React.createElement(FaFacebook),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/",
    icon: React.createElement(FaWhatsapp),
  },
  {
    name: "GitHub",
    url: "https://github.com/Chamalfernando",
    icon: React.createElement(FaGithub),
  },
];
