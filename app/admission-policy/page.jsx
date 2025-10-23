"use client";

import React, { useState } from "react";
import { GraduationCap, CalendarDays, Banknote } from "lucide-react";

import admissionsData from "@/public/data/admissions";

export default function AdmissionsPage() {
  const [active, setActive] = useState("undergraduate");
  const current = admissionsData.tabs.find((t) => t.id === active);

  return (
    <div className="bg-white">
      <div className="bg-brandblue py-20 text-white">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">USET Admission Process</h1>
          <p className="max-w-2xl mx-auto">
            Explore our admissions process for undergraduate, graduate, and
            international applicants.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-20">
        {/* Content Grid */}

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Tabs + Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex flex-wrap justify-between gap-3 bg-white shadow-sm rounded-full p-3 mb-8">
              {admissionsData.tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center gap-3 px-12 py-3 font-medium cursor-pointer rounded-full transition-all ${
                    active === tab.id
                      ? "bg-brandblue text-white shadow-md"
                      : "text-gray-600 hover:text-brandblue hover:bg-blue-50"
                  }`}
                >
                  {" "}
                  <GraduationCap size={22} />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold text-brandblue mb-4 border-l-4 border-brandblue pl-4">
                {current.title}
              </h2>
              <p className="text-gray-600 mb-6">{current.intro}</p>

              {/* Undergraduate Steps */}
              {current.steps && (
                <div className="space-y-6">
                  {current.steps.map((s) => (
                    <div
                      key={s.step}
                      className="flex gap-4 border-l-4 border-brandblue pl-4 bg-white p-4 rounded-md shadow hover:bg-blue-50 transition-all"
                    >
                      <div className="font-bold text-xl bg-brandblue p-2 rounded-full text-center w-10 h-10 flex items-center justify-center text-white">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                          {s.title}
                        </h4>
                        <p className="text-gray-600 mb-2">{s.desc}</p>
                        <ul className="list-disc pl-6 text-gray-500 text-md py-3 space-y-2">
                          {s.items.map((i, j) => (
                            <li key={j}>{i}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Graduate Coming Soon */}
              {current.comingSoon && (
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-4">
                  <h4 className="text-brandblue font-semibold mb-3">
                    Coming Soon
                  </h4>
                  <ul className="list-disc pl-6 text-gray-600">
                    {current.comingSoon.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* International Requirements */}
              {current?.requirements && (
                <div className="mt-6">
                  <h4 className="font-semibold text-brandblue mb-3">
                    Additional Requirements for International Students:
                  </h4>
                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    {current?.requirements?.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-brandblue mb-3">
                    Support Services for International Students:
                  </h4>
                  <ul className="list-disc pl-6 text-gray-600 mb-6">
                    {current?.support?.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold text-brandblue mb-3">
                    Application Process for International Students:
                  </h4>
                  <p className="text-gray-600">{current.applicationProcess}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-white rounded-xl shadow p-6 sticky top-20 h-fit">
            {current.sidebar.dates && (
              <>
                <h5 className="text-xl font-bold text-brandblue mb-3 flex items-center gap-3 border-b pb-2">
                  <CalendarDays />
                  Important Dates
                </h5>
                <ul className="space-y-5 mb-6">
                  {current.sidebar.dates.map((d, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-md border-dashed border-b border-gray-300 pb-2"
                    >
                      <span className="text-gray-600 font-semibold text-md">
                        {d.label}
                      </span>
                      <span className="text-brandblue font-medium">
                        {d.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div className="mt-4">
              <h6 className="flex gap-2 font-bold text-lg text-brandblue mb-2">
                <Banknote />
                Application Fee
              </h6>
              <p className="text-gray-600 text-sm mb-1">
                {current.sidebar.fee}
              </p>
              <p className="text-gray-400 text-xs">{current.sidebar.note}</p>
            </div>

            <div className="mt-6 bg-brandblue text-white p-5 rounded-lg text-center">
              <h5 className="font-semibold mb-2">Ready to Apply?</h5>
              <p className="text-sm mb-3">
                Take the first step toward your career at USET!
              </p>
              <button className="w-full bg-white text-brandblue py-2 rounded-md font-medium hover:bg-blue-100 transition">
                Apply Now
              </button>
              <a
                href={`mailto:${current.sidebar.email}`}
                className="block mt-3 text-sm underline"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
