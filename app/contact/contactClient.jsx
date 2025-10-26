"use client";
import React from "react";
import { MapPin, Phone, Mail, Send, PhoneCall } from "lucide-react";
import usetInfo from "@/public/data/university_info";

export default function ContactClient() {
  const { contact, getInTouch, departments } = usetInfo;

  return (
    <div className="bg-gray-50 px-4 sm:px-0">
      {/* Header */}
      <section className="bg-brandblue text-white py-28 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="max-w-2xl mx-auto text-gray-200">
          We are here to answer any questions you may have about admission,
          programs, or anything else related to USET.
        </p>
      </section>
      <div className="max-w-7xl mx-auto py-20 space-y-20">
        {/* Get in Touch Section */}
        <div className="">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Visit Us Card */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-10 text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="text-brand-dark" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {getInTouch.visitUs.address}
              </p>
            </div>

            {/* Call Us Card */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-10 text-center">
              <div className="flex justify-center mb-4">
                <Phone className="text-brand-dark" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">{getInTouch.callUs.phone}</p>
              <p className="text-sm text-gray-500 mt-1">
                {getInTouch.callUs.hours}
              </p>
            </div>

            {/* Email Us Card */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-10 text-center">
              <div className="flex justify-center mb-4">
                <Mail className="text-brand-dark" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">{getInTouch.emailUs.email}</p>
              <p className="text-sm text-gray-500 mt-1">
                {getInTouch.emailUs.note}
              </p>
            </div>
          </div>
        </div>

        {/* ===== DEPARTMENT CONTACTS ===== */}
        <section>
          <div>
            <div className="border-b pb-5 mb-10">
              <h2 className="text-3xl font-semibold text-brandblue text-center mb-1">
                {departments.title}
              </h2>
              <p className="text-gray-600 text-center">
                {departments.subtitle}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {departments.offices.map((office, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-8 text-center hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-brandblue mb-2">
                    {office.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {office.description}
                  </p>
                  <div className="space-y-3">
                    <p className="flex items-center gap-3 text-gray-700 font-medium">
                      <Mail className="text-brand-dark" />
                      {office.email}
                    </p>
                    <p className="flex items-center gap-3 text-gray-600">
                      <PhoneCall className="text-brand-dark" />
                      {office.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ===== CONTACT FORM & LOCATION ===== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-stretch">
          {/* === Left: Contact Form === */}
          <div className="w-full h-full">
            <div className="bg-white shadow p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full transition-all duration-300 hover:shadow-xl">
              <form className="space-y-6 flex-grow">
                <h2 className="text-xl md:text-2xl font-semibold text-brandblue mb-6">
                  Send Us a Message
                </h2>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:ring-2 focus:ring-brand-dark focus:outline-none transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:ring-2 focus:ring-brand-dark focus:outline-none transition"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+880 1XXXXXXXXX"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:ring-2 focus:ring-brand-dark focus:outline-none transition"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded-sm p-3 bg-white focus:ring-2 focus:ring-brand-dark focus:outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Event Registration</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    rows="5"
                    className="w-full border border-gray-300 rounded-sm p-3 focus:ring-2 focus:ring-brand-dark focus:outline-none transition"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brandblue to-blue-700 text-white py-3 rounded-sm font-semibold shadow-md hover:shadow-lg hover:from-brand-blue hover:to-brand-dark transition-all duration-300 cursor-pointer"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>

          {/* === Right: Location Map === */}
          <div className="w-full h-full">
            <div className="bg-white p-4 shadow overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl">
              <div className="mb-5">
                <h2 className="text-xl md:text-2xl font-semibold text-brandblue">
                  Our Location
                </h2>
              </div>
              <iframe
                src="https://www.google.com/maps?q=University+of+Skill+Enrichment+and+Technology&output=embed"
                allowFullScreen=""
                loading="lazy"
                className="w-full flex-grow"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
