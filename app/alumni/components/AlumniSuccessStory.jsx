"use client";
import Image from "next/image";
import React from "react";

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
  ];
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-brandblue mb-12">
          Alumni Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 mb-4">
                <Image
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover rounded-full border-2 border-brandblue"
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {story.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{story.degree}</p>
              <p className="text-sm text-gray-600 mb-4">{story.position}</p>
              <p className="text-gray-700 text-sm">{story.story}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
