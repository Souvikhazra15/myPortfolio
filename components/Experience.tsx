"use client";

import React from "react";
import { workExperience } from "@/data";

/**
 * Experience - Work experience timeline
 * Showcases professional journey with interactive cards
 */
const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <div
            key={card.id}
            className="lg:col-span-2 border border-white/[0.1] rounded-xl p-6 flex flex-col lg:flex-row gap-4 group hover:border-purple/[0.5] transition-all duration-300"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="lg:w-32 md:w-20 w-16 flex-shrink-0">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-start text-xl md:text-2xl font-bold group-hover:text-purple transition-colors">
                {card.title}
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
