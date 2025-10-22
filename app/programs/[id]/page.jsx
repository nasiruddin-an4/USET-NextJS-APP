"use client";
import React from "react";
import { useParams } from "next/navigation";
import faculties from "@/public/data/programs";
import Link from "next/link";

function ProgramDetails() {
  const { id } = useParams();

  // Find program by ID
  const faculty = faculties.find((f) => f.programs.some((p) => p.id === id));
  const program = faculty?.programs.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="p-10 text-center text-gray-500">Program not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/programs"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        ← Back to Programs
      </Link>

      <h1 className="text-3xl font-bold text-blue-700 mb-2">{program.name}</h1>
      <p className="text-gray-600 mb-6">{faculty.name}</p>

      <p className="text-gray-700 mb-6">{program.description}</p>

      <div className="bg-gray-50 rounded-xl p-6 shadow-sm space-y-3 text-gray-800">
        <p>
          <strong>Duration:</strong> {program.duration}
        </p>
        <p>
          <strong>Credits:</strong> {program.credits}
        </p>
        <p>
          <strong>Admission Requirements:</strong>{" "}
          {program.admission_requirements}
        </p>
        <p>
          <strong>Total Tuition Fee:</strong> ৳
          {program.tuition_fees.total_tuition_fee.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default ProgramDetails;
