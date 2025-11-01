"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import noticeData from "@/public/data/notice";

const NoticeClient = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;

  // ✅ Extract all categories dynamically
  const allCategories = useMemo(() => {
    const categories = new Set(noticeData.map((n) => n.category));
    return ["All", ...Array.from(categories).sort()];
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
        <h1 className="text-4xl font-bold text-white">USET Notice Board</h1>
        <p className="text-gray-300 mt-2">
          Stay updated with the latest announcements, circulars, and events.
        </p>
      </div>

      {/* Filter Bar */}
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
              className="appearance-none pl-4 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 focus:ring-2 focus:ring-blue-500 cursor-pointer"
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
              className="appearance-none pl-4 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-700 focus:ring-2 focus:ring-blue-500 cursor-pointer"
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

      {/* Table Section */}
      <div className="container mx-auto bg-white rounded-xl shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-blue-50 text-gray-700 items-center">
              <tr className="">
                <th className="py-5 px-4 border-b font-semibold w-16">No.</th>
                <th className="py-5 px-4 border-b font-semibold w-34">
                  Notice Image
                </th>
                <th className="py-5 px-4 border-b font-semibold">
                  Notice Title
                </th>
                <th className="py-5 px-4 border-b font-semibold w-48">
                  Post Date
                </th>
                <th className="py-5 px-4 border-b font-semibold w-20 text-center">
                  Download
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedNotices.length > 0 ? (
                paginatedNotices.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="hover:bg-blue-50 transition border-b"
                  >
                    <td className="py-3 px-4 text-gray-700 font-medium">
                      {startIndex + index + 1}
                    </td>
                    <td className="py-3 px-4">
                      <Image
                        src={notice.image || "/images/notice.png"}
                        alt={notice.title}
                        width={80}
                        height={60}
                        className="rounded-lg border object-cover w-20 h-14"
                      />
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <Link
                        href={`/notices/${notice.id}`}
                        className="text-lg font-medium text-brandblue hover:underline"
                      >
                        {notice.title}
                      </Link>
                      <p className="text-md text-gray-500 line-clamp-1">
                        {notice.category}
                      </p>
                    </td>
                    <td className="py-3 px-4 text-gray-600 items-center flex gap-1">
                      <Calendar size={16} className="text-gray-400" />
                      {notice.date}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <a
                        href={notice.pdf}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition"
                      >
                        <Download size={18} />
                      </a>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-10 text-center text-gray-500 font-medium"
                  >
                    No notices found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 py-10">
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
