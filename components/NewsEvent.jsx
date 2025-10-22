"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, ArrowUpRight, ArrowRight } from "lucide-react";
import { newsData, eventData } from "@/public/data/news";

const NewsEvent = () => {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Sort by date (latest first)
    const sortedNews = newsData.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    const sortedEvents = eventData.sort(
      (a, b) => new Date(b.startDate) - new Date(a.startDate)
    );

    setNews(sortedNews.slice(0, 3));
    setEvents(sortedEvents.slice(0, 3));
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-0 text-center">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-600 mb-4">
            Latest News & Events
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-md">
            Stay connected with the latest happenings and upcoming events at
            USET.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 text-left">
          {/* News Section */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-2xl font-semibold text-gray-500">
                Recent News
              </h3>
              <Link
                href="/news"
                className="text-brandblue font-medium hover:text-brandblue transition-all duration-300 flex items-center gap-2 group"
              >
                View All
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="space-y-6">
              {news?.map((item) => (
                <Link
                  href={`/news/${item?.id}`}
                  key={item?.id}
                  className="bg-white p-5 rounded-md shadow-sm hover:shadow-md transition-all flex gap-8 group"
                >
                  <div className="relative w-32 h-24 flex-shrink-0">
                    <Image
                      src={item?.image}
                      alt={item?.title}
                      fill
                      className="rounded-lg object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <p className="text-brandblue text-sm font-medium mb-1">
                      {new Date(item?.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {item?.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-1">
                      {item?.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Events Section */}
          <div>
            <div className="flex justify-between items-center mb-4 border-b pb-3">
              <h3 className="text-2xl font-semibold text-gray-500">
                Upcoming Events
              </h3>
              <Link
                href="/news-events"
                className="text-brandblue font-medium hover:text-brandblue transition-all duration-300 flex items-center gap-2 group"
              >
                View All
                <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="space-y-6">
              {events.map((event) => {
                const date = new Date(event?.startDate);
                const day = date.getDate();
                const month = date
                  .toLocaleString("en-US", { month: "short" })
                  .toUpperCase();
                return (
                  <Link
                    href={`/events/${event?.id}`}
                    key={event?.id}
                    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex gap-5 items-start group"
                  >
                    <div className="bg-brandblue text-white w-32 h-24 rounded-lg flex gap-1 items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-xl font-bold">{day}</span>
                      <span
                        className="text-md font - bold
"
                      >
                        {month}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {event?.title}
                      </h4>
                      <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
                        <MapPin className="w-4 h-4" /> {event?.location}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {event?.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvent;
