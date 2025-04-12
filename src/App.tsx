// import "./App.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Educations from "./components/Education";
import Blogs from "./components/Blogs";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Educations />
      <Blogs />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
