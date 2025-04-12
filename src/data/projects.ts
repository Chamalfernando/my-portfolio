// src/data/projects.ts
export const projects = [
  {
    title: "Foodstore Microservices Platform",
    overview:
      "A full-stack food management system using Spring Boot microservices, BFF layer, and React frontend.",
    description:
      "This platform is built using a microservices architecture with Spring Boot, each responsible for different business logic such as user, cart, orders, and products. A Node.js Backend-for-Frontend (BFF) serves as a unified entry point. The frontend is built using React with proper component separation and routing for user/admin roles.",
  },
  {
    title: "Donation Platform (MERN + Stellar)",
    overview:
      "A MERN-based donation platform with real-time chat, crypto reward system using Stellar SDK, and role-based access.",
    description:
      "Built with MongoDB, Express, React, and Node.js, this platform enables donors to contribute money and goods. Stellar SDK integration offers crypto rewards to donors. Crew members verify donee requests, and users can chat in real time with each other. Features include role-based access, suggestion system, and dashboard statistics.",
  },
  {
    title: "Freelancing Platform",
    overview:
      "A PHP + MySQL based platform to uplift the Sri Lankan freelancing community with skills and job matching.",
    description:
      "Developed using PHP and MySQL with raw HTML, CSS, and JavaScript. The platform helps freelancers find jobs and showcase their skills. It includes an admin dashboard, authentication, messaging, and a job application flow with filtering and role-based functionalities.",
  },
];
