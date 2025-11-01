"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AlumniSuccessStory() {
  const stories = [
    {
      name: "Farhana Akter",
      degree: "BSc in Computer Science, 2018",
      position: "Software Engineer at Google",
      image: "/images/farhana.jpg",
      story:
        "DIU gave me the foundation and confidence to build a career in tech. My professors and peers inspired me every step of the way.",
    },
    {
      name: "Rafiq Ahmed",
      degree: "MBA in Marketing, 2016",
      position: "Marketing Manager at Unilever",
      image: "/images/rafiq.jpg",
      story:
        "The practical training and real-world projects at DIU prepared me to face challenges in the corporate world effectively.",
    },
    {
      name: "Nusrat Jahan",
      degree: "BSc in Software Engineering, 2019",
      position: "Frontend Developer at Meta",
      image: "/images/nusrat.jpg",
      story:
        "At DIU, I not only learned coding but also leadership and collaboration — all of which shaped my career path.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-brandblue mb-4">
          Alumni Success Stories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Inspiring journeys of our alumni who turned their dreams into success
          through dedication, innovation, and the strong foundation built at
          DIU.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center group"
            >
              {/* Image */}
              <div className="relative w-32 h-32 mb-5">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover border-4 border-brandblue/70 shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-brandblue/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-brandblue transition-colors">
                {story.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{story.degree}</p>
              <p className="text-sm text-gray-600 font-medium mb-4">
                {story.position}
              </p>

              {/* Story */}
              <p className="text-gray-700 text-sm leading-relaxed">
                “{story.story}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
