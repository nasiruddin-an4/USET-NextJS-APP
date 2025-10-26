"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { newsData, eventData } from "@/public/data/news";
import RegistrationForm from "@/components/RegistrationForm";

export default function NewsEventsClient() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Combine news and events data
  const allItems = [
    ...newsData.map((item) => ({ ...item, type: "news" })),
    ...eventData.map((item) => ({
      ...item,
      type: "events", // Changed from 'event' to 'events' to match route
      date: item.startDate,
      category: "Event",
    })),
  ];

  // Get unique categories
  const categories = [
    "all",
    ...new Set(newsData.map((item) => item.category)),
    "Event",
  ];

  // Filter and sort items
  useEffect(() => {
    let filtered = allItems;

    // Filter by tab
    if (activeTab !== "all") {
      filtered = filtered.filter((item) => item.type === activeTab);
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) => item.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by date
    filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    setFilteredItems(filtered);
  }, [activeTab, searchTerm, selectedCategory]);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-brandblue overflow-hidden">
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-4"
          >
            News & Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Stay updated with the latest happenings at USET
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Tab Filter */}
            <div className="flex space-x-4 justify-center md:justify-start">
              {["all", "news", "events"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-brandblue text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab === "events"
                    ? "Events"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              {categories?.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search news and events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-10"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Showing {filteredItems.length}{" "}
          {filteredItems.length === 1 ? "result" : "results"}
        </p>

        {/* Items Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="events"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.type === "events"
                        ? "bg-purple-100 text-brandblue"
                        : "bg-indigo-100 text-brandblue"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {item.type === "events" ? (
                    <span>
                      {new Date(item.startDate).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                      {item.endDate !== item.startDate &&
                        ` - ${new Date(item.endDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}`}
                    </span>
                  ) : (
                    <span>
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-brandblue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                {item.type === "events" && item.location && (
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <svg
                      className="h-4 w-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {item.location}
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <Link
                    href={`/news-events/${item.id}`}
                    className="group text-brandblue font-medium hover:text-blue-700 flex items-center gap-2 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight
                      size={18}
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                  {item.type === "events" && (
                    <button
                      onClick={() => {
                        setSelectedEvent(item);
                        setIsRegistrationOpen(true);
                      }}
                      className="inline-block border border-brandblue text-brandblue px-6 py-2 rounded-md hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      Register
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No results found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>

      {/* Registration Form Modal */}
      <RegistrationForm
        isOpen={isRegistrationOpen}
        onClose={() => {
          setIsRegistrationOpen(false);
          setSelectedEvent(null);
        }}
        event={selectedEvent}
      />
    </div>
  );
}
