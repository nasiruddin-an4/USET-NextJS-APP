"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import departments from "@/public/data/faculty";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  BookOpen,
  FileText,
  ArrowLeft,
  Building,
  MapPin,
} from "lucide-react";

export default function FacultyMemberDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("about");

  // Find the faculty member
  const facultyMember = departments
    .flatMap((dept) =>
      dept.faculty.map((m) => ({ ...m, department: dept.name }))
    )
    .find((m) => m.id === id);

  if (!facultyMember) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Faculty Member Not Found
        </h2>
        <Link
          href="/faculty"
          className="text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Back to Faculty Directory
        </Link>
      </div>
    );
  }

  const tabs = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "research", label: "Research" },
    { id: "publications", label: "Publications" },
  ];

  return (
    <div className="">
      <div className="bg-gray-50 pt-28 border-b-2 border-gray-200">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto justify-center px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pb-10">
            {/* Profile Image */}
            <div className="w-80 h-96 rounded-2xl overflow-hidden shadow border-4 border-white">
              <Image
                src={facultyMember.image}
                alt={facultyMember.name}
                width={800}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Basic Info */}
            <div className="flex-1 space-y-2">
              <h1 className="text-5xl font-bold text-brandblue">
                {facultyMember.name}
              </h1>
              <p className="text-2xl font-semibold text-gray-600">
                {facultyMember.position}
              </p>
              <p className="flex items-center gap-2 text-gray-600 text-lg">
                <Building className="text-indigo-500" />
                {facultyMember.department}
              </p>

              {/* Contact Info */}
              <div className="mt-4 flex items-center gap-3 text-gray-700">
                {facultyMember.email && (
                  <p className="flex items-center gap-2 text-gray-600 text-lg cursor-pointer">
                    <Mail size={18} className="text-indigo-500" />
                    {facultyMember.email}
                  </p>
                )}
                {facultyMember.phone && (
                  <p className="flex items-center gap-2 text-gray-600 text-lg cursor-pointer">
                    <Phone size={18} className="text-indigo-500" />
                    {facultyMember.phone}
                  </p>
                )}
                {facultyMember.office && (
                  <p className="flex items-center gap-2">
                    <MapPin size={18} className="text-indigo-500" />
                    {facultyMember.office}
                  </p>
                )}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-5 mt-8">
                <span className="bg-indigo-50 text-indigo-700 px-8 py-4 rounded-full text-md font-medium border">
                  🎓 Academic Excellence
                </span>
                <span className="bg-green-50 text-green-700 px-8 py-4 rounded-full text-md font-medium border">
                  📘 Research Active
                </span>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-14 flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-lg font-semibold transition-all ${
                  activeTab === tab.id
                    ? "text-brandblue font-bold border-b-3 border-brandblue"
                    : "text-gray-500 hover:text-brandblue"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-0 ">
          {/* Tab Content */}
          <div className="mt-2">
            {activeTab === "about" && (
              <Section
                title="About"
                content={
                  facultyMember.about ||
                  "No biography or description is available for this faculty member."
                }
              />
            )}

            {activeTab === "education" && (
              <ListSection
                title="Education"
                items={facultyMember.education}
                icon={<GraduationCap size={18} className="text-indigo-500" />}
              />
            )}

            {activeTab === "experience" && (
              <ListSection
                title="Experience"
                items={facultyMember.experience}
                icon={<Briefcase size={18} className="text-indigo-500" />}
              />
            )}

            {activeTab === "research" && (
              <ListSection
                title="Research Interests"
                items={facultyMember.researchInterests}
                icon={<BookOpen size={18} className="text-indigo-500" />}
              />
            )}

            {activeTab === "publications" && (
              <ListSection
                title="Publications"
                items={facultyMember.publications}
                icon={<FileText size={18} className="text-indigo-500" />}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Reusable Components ----
function Section({ title, content }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
}

function ListSection({ title, items, icon }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
        {icon} {title}
      </h2>
      {items && items.length > 0 ? (
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 italic">No data available.</p>
      )}
    </div>
  );
}
