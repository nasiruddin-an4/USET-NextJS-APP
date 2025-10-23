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
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Faculty Directory
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Meet our distinguished faculty members
          </p>
        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-between">
          <select
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search faculty..."
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Faculty Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFaculty.map((member) => (
            <Link
              key={member.id}
              href={`/faculty/${member.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="object-cover w-full h-[300px]"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-indigo-600">
                    {member.position}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">
                    {member.department}
                  </p>
                  <button className="mt-4 text-sm text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              No faculty members found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
