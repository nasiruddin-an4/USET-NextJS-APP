"use client";
import React from "react";
import { useParams } from "next/navigation";
import faculties from "@/public/data/programs";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  Briefcase,
  BookOpen,
  Wrench,
  ArrowLeft,
} from "lucide-react";

export default function ProgramDetails() {
  const { id } = useParams();

  // Find the program by ID
  const faculty = faculties.find((f) => f.programs.some((p) => p.id === id));
  const program = faculty?.programs.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Program not found.
      </div>
    );
  }

  return (
    <div className=" bg-gray-50 pb-20">
      {/* Header / Hero Section */}
      <section className="bg-brandblue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-0 text-left gap-8">
          <Link
            href="/programs"
            className="group relative inline-block mb-4 text-gray-100 hover:text-gray-300 font-medium transition-all duration-300"
          >
            <span className="inline-flex items-center gap-2">
              <span className="transform transition-transform duration-300 group-hover:-translate-x-1">
                <ArrowLeft size={16} />
              </span>
              <span className="relative">Back to All Programs</span>
            </span>
          </Link>
          <div>
            <h1 className="text-4xl md:text-5xl max-w-4xl font-bold mb-2 leading-tight">
              {program.name}
            </h1>
            <p className="text-blue-100 text-lg">{faculty.name}</p>
            <div className="flex flex-wrap gap-4 mt-2 text-blue-50 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                Duration:{" "}
                <span className="font-medium">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} />
                Credits: <span className="font-medium">{program.credits}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Description */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-brandblue mb-4">
            Program Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{program.description}</p>
        </div>

        {/* Program Overview */}
        <div className="bg-white rounded-2xl p-8 shadow hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-brandblue mb-6">
            Program Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-700">
            <p>
              <strong>Duration:</strong> {program.duration}
            </p>
            <p>
              <strong>Total Credits:</strong> {program.credits}
            </p>
            <p className="md:col-span-2">
              <strong>Admission Requirements:</strong>{" "}
              {program.admission_requirements}
            </p>
          </div>
        </div>

        {/* Tuition Details */}
        <div className="bg-white rounded-2xl p-8 shadow transition">
          <h2 className="text-2xl font-semibold text-brandblue mb-6">
            Tuition & Fees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong>Total Tuition Fee:</strong> ৳{" "}
              {program.tuition_fees.total_tuition_fee.toLocaleString()}
            </p>
            <p>
              <strong>Per Credit Cost:</strong> ৳{" "}
              {program.tuition_fees.per_credit_cost.toLocaleString()}
            </p>
            <p>
              <strong>Admission Fee:</strong> ৳{" "}
              {program.tuition_fees.admission_fee.toLocaleString()}
            </p>
            <p>
              <strong>Project Fees:</strong> ৳{" "}
              {program.tuition_fees.project_fees.toLocaleString()}
            </p>

            {/* Registration Fee Calculation */}
            <p className="md:col-span-2">
              <strong>Registration Fee (Per Semester):</strong> ৳{" "}
              {program.tuition_fees.registration_fee_per_semester.toLocaleString()}{" "}
              × 8 = ৳{" "}
              {(
                program.tuition_fees.registration_fee_per_semester * 8
              ).toLocaleString()}
            </p>
          </div>

          {/* Total Estimated Cost */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between">
            <h3 className="text-lg font-semibold text-brandblue">
              Total Estimated Cost:
            </h3>
            <p className="text-2xl font-bold text-brandblue mt-2 md:mt-0">
              ৳{" "}
              {(
                program.tuition_fees.total_tuition_fee +
                program.tuition_fees.admission_fee +
                program.tuition_fees.project_fees +
                program.tuition_fees.registration_fee_per_semester * 8 +
                1000
              ).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Career Paths */}
        <div className="bg-white rounded-2xl p-8 shadow transition">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-brandblue">
              Career Opportunities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {program.career_paths.map((path, i) => (
              <div
                key={i}
                className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-brandblue font-medium hover:bg-blue-100 transition"
              >
                {path}
              </div>
            ))}
          </div>
        </div>

        {/* Key Courses */}
        <div className="bg-white rounded-2xl p-8 shadow transition">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-brandblue">
              Key Courses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {program.key_courses.map((course, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 p-4 rounded-lg hover:bg-gray-100 transition"
              >
                {course}
              </div>
            ))}
          </div>
        </div>

        {/* Practical Components */}
        <div className="bg-white rounded-2xl p-8 shadow transition">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-2xl font-semibold text-brandblue">
              Practical Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {program.practical_components.map((component, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 p-4 rounded-lg hover:bg-gray-100 transition"
              >
                {component}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
