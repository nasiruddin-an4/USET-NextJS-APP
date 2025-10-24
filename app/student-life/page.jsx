"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import studentLifeData from "@/public/data/student-life";

// Import Swiper & Tabs styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-tabs/style/react-tabs.css";

export default function StudentLifePage() {
  const {
    hero,
    stats,
    sections,
    clubs,
    resources,
    career,
    support,
    housing,
    testimonials,
    cta,
  } = studentLifeData;

  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const statsSection = document.querySelector("#stats-section");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  // Dummy gallery images (replace with studentLifeData.gallery if available)
  const galleryImages = [
    "/images/campus/gallery-1.jpg",
    "/images/campus/gallery-2.jpg",
    "/images/campus/gallery-3.jpg",
    "/images/campus/gallery-4.jpg",
    "/images/campus/gallery-5.jpg",
    "/images/campus/gallery-6.jpg",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src={hero.image}
          alt="Student Life"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold mb-4 text-white"
          >
            {hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-gray-200"
          >
            {hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <Tabs
        selectedIndex={activeTab}
        onSelect={(index) => setActiveTab(index)}
        className="container mx-auto px-4 py-12 md:px-0"
      >
        <TabList className="flex flex-wrap justify-center mb-14 gap-10 border-b relative">
          {["Overview", "Clubs", "Resources", "Gallery", "Career"].map(
            (tab, index) => (
              <Tab key={tab} className="list-none ">
                <motion.button
                  className={`relative px-6 py-3 font-medium text-xl  transition-all duration-300 ${
                    activeTab === index
                      ? "border-b-4 border-b-indigo-600 font-bold text-indigo-700"
                      : "bg-white text-gray-700 "
                  }`}
                >
                  {tab}
                  {/* Animated underline for active tab */}
                  {activeTab === index && (
                    <motion.span
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 w-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              </Tab>
            )
          )}
        </TabList>

        {/* Overview Tab */}
        <TabPanel>
          {/* Stats */}
          <section
            id="stats-section"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 rounded-2xl mb-16"
          >
            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 px-6">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-white text-center"
                >
                  <h3 className="text-4xl font-extrabold">
                    {isVisible && (
                      <CountUp
                        end={parseInt(s.value)}
                        duration={2.5}
                        suffix="+"
                      />
                    )}
                  </h3>
                  <p className="text-indigo-100 mt-2">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Campus Sections */}
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col lg:flex-row ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center gap-10 mb-16`}
            >
              <div className="lg:w-1/2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {item.subcategories.map((sub, j) => (
                    <li key={j}>{sub}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </TabPanel>

        {/* Clubs Tab */}
        <TabPanel>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {clubs.list.map((club, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={club.image}
                    alt={club.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {club.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm">{club.desc}</p>
                  <ul className="text-sm text-indigo-700 space-y-1">
                    {club.highlights.map((h, j) => (
                      <li key={j}>• {h}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </TabPanel>

        {/* Resources Tab */}
        <TabPanel>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {resources.facilities.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <Image
                  src={f.image}
                  alt={f.name}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover w-full h-40"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {f.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{f.desc}</p>
                <ul className="text-sm text-indigo-700 space-y-1">
                  {f.features.map((ft, j) => (
                    <li key={j}>• {ft}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </TabPanel>

        {/* Gallery Tab */}
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={img}
                  alt={`Campus life ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </TabPanel>

        {/* Career Tab */}
        <TabPanel>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {career.title}
            </h2>
            <p className="text-gray-600 mb-8">{career.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {career.stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-indigo-50 rounded-xl py-6 px-4 text-center"
                >
                  <h3 className="text-3xl font-extrabold text-indigo-700">
                    {s.value}
                  </h3>
                  <p className="text-indigo-600 mt-2">{s.label}</p>
                </div>
              ))}
            </div>
            <ul className="flex flex-wrap justify-center gap-3">
              {career.services.map((srv, i) => (
                <li
                  key={i}
                  className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md"
                >
                  {srv}
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </Tabs>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            {testimonials.title}
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.quotes.map((quote, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex flex-col items-center">
                    <Image
                      src={quote.image}
                      alt={quote.name}
                      width={80}
                      height={80}
                      className="rounded-full mb-4"
                    />
                    <p className="text-gray-700 italic mb-4">
                      &quot;{quote.text}&quot;
                    </p>
                    <h4 className="font-semibold text-indigo-600">
                      {quote.name}
                    </h4>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight">
            {cta.title}
          </h2>
          <p className="text-lg text-indigo-100 mb-8">{cta.subtitle}</p>
          <Link
            href={cta.buttonLink}
            className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {cta.buttonText}
          </Link>
        </div>
      </section>
    </div>
  );
}
