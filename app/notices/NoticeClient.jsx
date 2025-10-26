"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Calendar,
  Tag,
  ExternalLink,
  Newspaper,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import noticeData from "@/public/data/notice";

const NoticeClient = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 12;

  // ✅ Extract all categories dynamically
  const allCategories = useMemo(() => {
    const categories = new Set(noticeData.map((n) => n.category));
    const sorted = Array.from(categories).sort();
    return ["All", ...sorted];
  }, []);

  // ✅ Filter + Sort + Search
  const filteredNotices = useMemo(() => {
    let filtered = noticeData.filter(
      (n) =>
        (selectedCategory === "All" || n.category === selectedCategory) &&
        (n.title.toLowerCase().includes(search.toLowerCase()) ||
          n.content.toLowerCase().includes(search.toLowerCase()))
    );

    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [selectedCategory, sortBy, search]);

  //  Pagination
  const totalPages = Math.ceil(filteredNotices.length / noticesPerPage);
  const startIndex = (currentPage - 1) * noticesPerPage;
  const paginatedNotices = filteredNotices.slice(
    startIndex,
    startIndex + noticesPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, selectedCategory, search, sortBy]);

  return (
    <div className="bg-gray-50 px-4 md:px-0">
      {/* Header */}
      <div className="mx-auto text-center mb-10 bg-brandblue py-20">
        <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
          USET Notice Board
        </h1>
        <p className="text-gray-300 mt-2">
          Stay updated with the latest announcements, circulars, and events.
        </p>
      </div>

      {/* 🔹 Filter Bar Section */}
      <div className="container mx-auto mb-10 bg-white rounded-xl shadow p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search notices..."
            className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 w-full md:w-auto">
          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1);
              }}
              className="appearance-none pl-4 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
            >
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <ChevronDown
              className="absolute right-3 top-3 text-gray-500 pointer-events-none"
              size={18}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none pl-4 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title">Title (A–Z)</option>
            </select>
            <ChevronDown
              className="absolute right-3 top-3 text-gray-500 pointer-events-none"
              size={18}
            />
          </div>
        </div>
      </div>

      {/* Notices Grid */}
      <div className="container mx-auto pb-10">
        {paginatedNotices.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedNotices.map((notice) => (
              <Link
                key={notice.id}
                href={`/notices/${notice.id}`}
                className="block group bg-white rounded-2xl shadow hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-flex items-center bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3 mr-1" />
                      {notice.category}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {notice.date}
                    </div>
                  </div>

                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 line-clamp-2">
                    {notice.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {notice.content}
                  </p>

                  <span className="text-blue-600 text-sm inline-flex items-center group-hover:underline">
                    Read More <ExternalLink className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <Newspaper className="w-10 h-10 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700">
              No Notices Found
            </h3>
            <p className="text-gray-500 mt-1">
              Try changing your search or filter options.
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pb-20">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium bg-white border rounded-lg hover:bg-blue-50 disabled:opacity-50"
          >
            <ChevronLeft size={16} /> Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-9 h-9 text-sm font-semibold rounded-sm transition ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white shadow"
                  : "bg-white text-gray-700 border hover:bg-blue-50"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium bg-white border rounded-lg hover:bg-blue-50 disabled:opacity-50"
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default NoticeClient;
