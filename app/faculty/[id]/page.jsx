"use client";
import React from "react";
import { useParams } from "next/navigation";
import departments from "@/public/data/faculty";
import Image from "next/image";
import Link from "next/link";

export default function FacultyMemberDetails() {
  const { id } = useParams();

  // Find the faculty member across all departments
  const facultyMember = departments
    .flatMap((dept) =>
      dept.faculty.map((member) => ({
        ...member,
        department: dept.name,
        deptId: dept.id,
      }))
    )
    .find((member) => member.id === id);

  if (!facultyMember) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600">Faculty member not found</h1>
          <Link href="/faculty" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800">
            ← Back to Faculty Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/faculty" className="inline-block mb-8 text-indigo-600 hover:text-indigo-800">
          ← Back to Faculty Directory
        </Link>
        
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src={facultyMember.image}
                alt={facultyMember.name}
                width={400}
                height={500}
                className="h-96 w-full object-cover md:w-96"
              />
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900">{facultyMember.name}</h1>
              <p className="mt-2 text-xl text-indigo-600">{facultyMember.position}</p>
              <p className="mt-2 text-gray-600">{facultyMember.department}</p>
              
              {/* Additional faculty information can be added here */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900">Contact Information</h2>
                <div className="mt-4 space-y-2">
                  {facultyMember.email && (
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> {facultyMember.email}
                    </p>
                  )}
                  {facultyMember.phone && (
                    <p className="text-gray-600">
                      <span className="font-medium">Phone:</span> {facultyMember.phone}
                    </p>
                  )}
                  {facultyMember.office && (
                    <p className="text-gray-600">
                      <span className="font-medium">Office:</span> {facultyMember.office}
                    </p>
                  )}
                </div>
              </div>

              {facultyMember.education && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-900">Education</h2>
                  <div className="mt-2 text-gray-600">
                    {facultyMember.education}
                  </div>
                </div>
              )}

              {facultyMember.research && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold text-gray-900">Research Interests</h2>
                  <div className="mt-2 text-gray-600">
                    {facultyMember.research}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}