"use client";
import React, { useState, useEffect } from "react";
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import {
  Search,
  GraduationCap,
  Calendar,
  Briefcase,
  MapPin,
  Quote,
  ChevronLeft,
  ChevronRight,
  Filter,
  Building2,
  Users,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import alumniData from "@/public/data/Alumni";
import Link from "next/link";
import AlumniUpdateForm from "./components/AlumniUpdateForm";
import AlumniBenefits from "./components/AlumniBenefits";
import AlumniSuccessStory from "./components/AlumniSuccessStory";

const AlumniClient = () => {
  // === States ===
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const [department, setDepartment] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [batch, setGraduationYear] = useState("all");

  const itemsPerPage = 12;

  // Get unique programs and years
  const programs = [
    "All",
    ...new Set(alumniData.map((alumni) => alumni.program)),
  ];
  const years = [
    "all",
    ...new Set(alumniData.map((alumni) => alumni.batch.toString())),
  ];

  // === Filtering & Sorting Logic ===
  const filteredalumni = alumniData
    .filter((alumni) =>
      department === "All" ? true : alumni?.program === department
    )
    .filter(
      (alumni) =>
        alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alumni.currentPosition?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((alumni) =>
      batch === "all" ? true : alumni.batch.toString() === batch
    )
    .sort((a, b) => {
      if (sortOption === "name") return a.name.localeCompare(b.name);
      if (sortOption === "year") return b.batch - a.batch;
      return 0;
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredalumni.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAlumni = filteredalumni.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-100 ">
      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center bg-brandblue overflow-hidden">
        <div className="relative text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Our Alumni Network
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-md text-white/60"
          >
            Meet our successful graduates making their mark in various
            industries
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-0 py-10">
        {/* Search and Filters Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-md shadow p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, company, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              />
            </div>

            {/* Filter Button (Mobile) */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>

            {/* Desktop Filters */}
            <div className="hidden md:flex gap-4">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              >
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program === "All" ? "All Programs" : program}
                  </option>
                ))}
              </select>

              <select
                value={batch}
                onChange={(e) => setGraduationYear(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              >
                <option value="all">All Years</option>
                {years
                  .filter((year) => year !== "all")
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              >
                <option value="name">Sort by Name</option>
                <option value="year">Sort by Year</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              >
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program === "All" ? "All Programs" : program}
                  </option>
                ))}
              </select>

              <select
                value={batch}
                onChange={(e) => setGraduationYear(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              >
                <option value="all">All Years</option>
                {years
                  .filter((year) => year !== "all")
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>

              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue"
              >
                <option value="name">Sort by Name</option>
                <option value="year">Sort by Year</option>
              </select>
            </div>
          )}
        </motion.div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-5">
          <p className="text-gray-600">
            Showing {filteredalumni.length} Alumni
          </p>
          <p className="text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Alumni Grid */}
        {currentAlumni.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentAlumni.map((alumni, idx) => (
              <Link href={`/alumni/${alumni.id}`} key={alumni.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="bg-white p-4 shadow overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative h-72 w-full ">
                    <Image
                      src={alumni.image}
                      alt={alumni.name}
                      fill
                      className="object-cover object-center rounded-sm "
                    />
                  </div>

                  {/* Content Area */}
                  <div className="py-5 px-4">
                    {/* Name */}
                    <h3
                      className="text-lg font-bold text-gray-900 truncate border-b border-gray-200 pb-1 mb-2 transition-transform duration-500 ease-in-out group-hover:translate-x-2"
                      title={alumni.name}
                    >
                      {alumni.name}
                      {", "} {/* Department & Batch */}
                      <span className="text-sm font-medium text-gray-600">
                        {alumni.department.toUpperCase()} - {alumni.batch}
                      </span>
                    </h3>

                    {/* Job Info */}
                    <div className="space-y-2">
                      {/* Position */}
                      <div className="flex items-start">
                        <BriefcaseIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                        {/* Possition */}
                        <p className="text-sm font-semibold text-gray-800">
                          {alumni.currentPosition}
                        </p>
                      </div>

                      {/* Company */}
                      <div className="flex items-start">
                        <Building2 className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">
                          {alumni.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <GraduationCap className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No alumni found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx + 1)}
                  className={`w-10 h-10 rounded-lg ${
                    currentPage === idx + 1
                      ? "bg-brandblue text-white"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Alumni Benefits Section */}
        <div>
          <AlumniBenefits />
        </div>

        <div>
          <AlumniSuccessStory />
        </div>

        {/* Update Your Information Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow p-8 text-center mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brandblue">
            Dear Alumni, Keep Your Information Updated!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            Help us stay connected by updating your latest professional and
            academic details.
          </p>
          <Link
            href="/alumni/update"
            className="inline-block bg-brandblue text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-blue-800 hover:scale-105"
          >
            Update Your Information →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlumniClient;
