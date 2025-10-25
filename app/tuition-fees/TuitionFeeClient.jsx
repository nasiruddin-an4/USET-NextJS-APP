"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icons
import tuitionAndScholarships from "@/public/data/tuitionAndScholarships";

export default function TuitionFeesPage() {
  const { tuitionFees, scholarships } = tuitionAndScholarships;
  const totalSemesters = 8;

  // 👇 Default open the first scholarship accordion
  const [openIndex, setOpenIndex] = useState(0);

  // Calculate total cost per program
  const calculateTotalCost = (program) => {
    const tuition = tuitionFees.totalTuitionFee[program] || 0;
    const admission = tuitionFees.otherFees.admissionFee;
    const registrationPerSem =
      tuitionFees.otherFees.registrationFeePerSemester[program] || 0;
    const registrationTotal = registrationPerSem * totalSemesters;
    const project = tuitionFees.otherFees.projectFees[program] || 0;

    const total = tuition + admission + registrationTotal + project + 1000;
    return {
      tuition,
      admission,
      registrationPerSem,
      registrationTotal,
      project,
      total,
    };
  };

  // Toggle scholarship accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      {/* ===== Header ===== */}
      <div className="bg-brandblue py-20 text-white px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Tuition Fees & Scholarships
        </h1>
        <p className="text-center mt-4 max-w-2xl mx-auto">
          Explore the tuition fees for various programs and the scholarships
          available to help you finance your education.
        </p>
      </div>

      <div className="max-w-7xl mx-auto py-20 px-4 md:px-0">
        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ===== Left Side: Tuition Fees ===== */}
          <div>
            <h2 className="text-2xl font-semibold text-brandblue mb-4 border-b border-brandblue pb-2">
              Tuition Fees by Department
            </h2>

            <div className="space-y-6">
              {Object.keys(tuitionFees.programCredits).map((program) => {
                const {
                  tuition,
                  admission,
                  registrationPerSem,
                  registrationTotal,
                  project,
                  total,
                } = calculateTotalCost(program);

                const programName = program.replace("_", " ");

                return (
                  <div
                    key={program}
                    className="bg-white rounded-xl shadow p-6 border-l-4 border-brandblue hover:shadow-md transition"
                  >
                    <h3 className="text-lg font-semibold text-brandblue border-b pb-1 mb-2">
                      {programName}
                    </h3>

                    <ul className="space-y-1 text-gray-700">
                      <li>
                        <span className="font-semibold">Total Credits:</span>{" "}
                        {tuitionFees.programCredits[program]}
                      </li>
                      <li>
                        <span className="font-semibold">Per Credit Fee:</span> ৳
                        {tuitionFees.undergraduatePerCredit[
                          program
                        ].toLocaleString()}
                      </li>
                      <li>
                        <span className="font-semibold">Tuition Fee:</span> ৳
                        {tuition.toLocaleString()}
                      </li>
                      <li>
                        <span className="font-semibold">Admission Fee:</span> ৳
                        {admission.toLocaleString()}
                      </li>
                      <li>
                        <span className="font-semibold">
                          Registration Fee Per Semester:
                        </span>{" "}
                        ৳{registrationPerSem.toLocaleString()} ×{" "}
                        {totalSemesters} ={" "}
                        <span className="font-semibold text-brandblue">
                          ৳{registrationTotal.toLocaleString()}
                        </span>
                      </li>
                      <li>
                        <span className="font-semibold">Project Fee:</span> ৳
                        {project.toLocaleString()}
                      </li>
                    </ul>

                    <div className="mt-4 border-t pt-3 flex justify-between items-center">
                      <p className="text-gray-600 font-semibold">
                        Total Estimated Cost:
                      </p>
                      <p className="text-xl font-semibold text-brandblue">
                        ৳{total.toLocaleString()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===== Right Side: Scholarships (FAQ Style) ===== */}
          <div className="sticky top-24 self-start h-fit">
            <h2 className="text-2xl font-semibold text-brandblue mb-4 border-b border-brandblue pb-2">
              Scholarships & Waivers
            </h2>

            <div className="space-y-4 ">
              {scholarships.map((scholar, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow border border-gray-100 transition cursor-pointer"
                  >
                    {/* Header */}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex justify-between items-center text-left p-5 cursor-pointer"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-brandblue">
                          {scholar.criteria}
                        </h3>
                        <p className="text-sm text-gray-600">{scholar.type}</p>
                      </div>
                      <span className="text-brandblue">
                        {isOpen ? <ChevronUp /> : <ChevronDown />}
                      </span>
                    </button>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[500px] p-5 pt-0" : "max-h-0"
                      }`}
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse overflow-hidden">
                          <thead>
                            <tr className="bg-green-100 text-left">
                              <th className="p-2 font-semibold">Requirement</th>
                              <th className="p-2 font-semibold text-center">
                                Discount (%)
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {scholar.benefits.map((benefit, idx) => (
                              <tr
                                key={idx}
                                className="border-b hover:bg-gray-50 hover:translate-x-2 duration-300 transition-all ease-out"
                              >
                                <td className="p-2">{benefit.requirement}</td>
                                <td className="p-2 font-semibold text-brandblue text-center">
                                  {benefit.discount}%
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="pt-10 max-w-2xl">
          <h2 className="text-gray-600">
            * All fees are in Bangladeshi Taka (BDT). Fees are subject to
            change. Please contact the admission office for the most current
            information.
          </h2>
        </div>
      </div>
    </div>
  );
}
