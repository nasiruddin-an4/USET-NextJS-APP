"use client";
import React, { useState } from "react";
import departments from "@/public/data/faculty";
import Image from "next/image";
import Link from "next/link";

export default function FacultyDirectory() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = departments
    .flatMap((dept) =>
      dept.faculty.map((member) => ({
        ...member,
        department: dept.name,
        deptId: dept.id,
      }))
    )
    .filter((member) => {
      const matchesDepartment =
        selectedDepartment === "all" || member.deptId === selectedDepartment;
      const matchesSearch =
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.position.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesDepartment && matchesSearch;
    });

  return (
    <div className="">
      <div className="text-center text-white bg-brandblue py-20 px-4 md:px-0">
        <h1 className="text-4xl font-bold md:text-5xl ">Faculty Directory</h1>
        <p className="mt-4 text-xl font-light">
          Discover our world-class academic professionals
        </p>
      </div>
      <div className="container mx-auto py-20">
        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 p-6 transition-all duration-500 border-b">
          {/* Department Dropdown */}
          <div className="relative w-full sm:w-72">
            <select
              className="w-full h-12 pl-5 pr-10 text-gray-700 text-sm bg-white/80 border border-gray-200 rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all duration-300 appearance-none"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="all">🌐 All Departments</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>

            {/* Dropdown Icon */}
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search faculty by name..."
              className="w-full h-12 pl-12 pr-4 bg-white/80 text-gray-700 text-sm border border-gray-200 rounded-2xl shadow-sm focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 outline-none transition-all duration-300 placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-indigo-400"
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

          {/* Conditional Clear Button */}
          {(selectedDepartment !== "all" || searchQuery.trim() !== "") && (
            <button
              onClick={() => {
                setSelectedDepartment("all");
                setSearchQuery("");
              }}
              className="h-12 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 animate-fadeIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Clear
            </button>
          )}
        </div>

        {/* Faculty Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 md:px-0">
          {filteredFaculty.map((member) => (
            <Link
              key={member.id}
              href={`/faculty/${member.id}`}
              className="group relative p-4 block overflow-hidden bg-white shadow hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Wrapper */}
              <div className="w-full h-[350px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              {/* Info Section */}
              <div className="p-4">
                <div className="border-b border-gray-200 pb-2">
                  <h3 className="text-lg font-semibold text-brandblue group-hover:-translate-y-1 transition-all duration-500 ease-out">
                    {member.name}
                  </h3>
                  <p className=" text-sm font-medium text-gray-600 ">
                    {member.position}
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {member.department}
                </p>

                {/* Tags */}
                {member.specializations?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.specializations.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border "
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-lg">
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
            <p className="mt-4 text-gray-600 text-lg">
              No faculty members found matching your criteria.
            </p>
          </div>
        )}

        {/* Join Our Faculty Team Section */}
        <section className="relative mt-24 py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
            {/* Decorative Gradient Orb */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-tr from-indigo-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-600 mb-6">
              Join Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Faculty Team
              </span>
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
              Are you passionate about teaching, research, and shaping future
              innovators? We’re always looking for dedicated educators to join
              our vibrant academic community.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-base shadow-md hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Apply Now
              </a>
              <a
                href="/careers"
                className="px-8 py-3 rounded-xl border border-indigo-200 text-indigo-600 bg-white font-semibold text-base hover:bg-indigo-50 hover:border-indigo-400 hover:text-indigo-700 transition-all duration-300"
              >
                View Open Positions
              </a>
            </div>

            {/* Decorative Line */}
            <div className="mt-16 border-t border-gray-200 w-2/3 mx-auto"></div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(99,102,241,0.08),_transparent_50%)]"></div>
        </section>
      </div>
    </div>
  );
}
