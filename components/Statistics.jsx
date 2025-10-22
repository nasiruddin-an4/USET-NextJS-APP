"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Plus } from "lucide-react";

const stats = [
  { id: 1, value: 2020, label: "Established" },
  { id: 2, value: 1000, label: "Students" },
  { id: 3, value: 50, label: "Faculty Members" },
  { id: 4, value: 5, label: "Academic Departments" },
];

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="bg-brandblue py-20">
      <div className="container mx-auto px-4 text-center" ref={ref}>
        <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">
          USET By The Numbers
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-16">
          Our growth and impact in numbers
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="p-8 transition-all duration-500 flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-1">
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  {inView ? (
                    <CountUp end={stat.value} duration={2} separator="" />
                  ) : (
                    0
                  )}
                </h3>
                <Plus className="w-8 h-8 text-white" />
              </div>
              <p className="text-white/70 font-medium mt-2 text-center uppercase text-xl">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
