"use client";

import Hero from "@/components/Hero";
import NewsEvent from "@/components/NewsEvent";
import Statistics from "@/components/Statistics";
import WhyChoice from "@/components/WhyChoice";
import Image from "next/image";
import Program from "./programs/page";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Why Choose Section */}
      <WhyChoice />

      {/* Our Programs  */}
      <Program />

      {/* Statistics Section */}
      <Statistics />

      {/* News & Events Section */}
      <NewsEvent />
    </div>
  );
}
