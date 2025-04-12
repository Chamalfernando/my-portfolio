// src/components/Skills.tsx
import React from "react";
import { skills } from "../data/skills";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Skills = () => (
  <section id="skills" className="py-12 px-6 max-w-4xl mx-auto">
    <h3 className="text-2xl font-bold mb-4">Skills</h3>
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      //   pagination={{ clickable: true }}
      loop={true}
      speed={5000} // Duration of each transition (ms)
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
      modules={[Autoplay]}
    >
      {skills.map((skill, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center justify-center bg-blend-color bg-conic-150 rounded-xl shadow p-4">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Skills;
