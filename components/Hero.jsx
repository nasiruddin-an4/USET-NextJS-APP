"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { slides } from "../public/data/heroData";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ✅ Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
        </div>
      ))}

      {/* ✅ Text Overlay */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-6 md:px-0">
          <div className="max-w-2xl transition-all duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {slides[current].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              {slides[current].subtitle}
            </p>
            {slides[current].button && (
              <Link
                href={slides[current].button}
                className="px-8 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Controls with Lucide Icons */}
      <button
        onClick={prev}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center 
             bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 hover:scale-110 
             transition-all z-30"
        aria-label="Previous slide"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center 
             bg-white/10 hover:bg-white/20 text-white rounded-full border border-white/20 hover:scale-110 
             transition-all z-30"
        aria-label="Next slide"
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      {/* ✅ Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
