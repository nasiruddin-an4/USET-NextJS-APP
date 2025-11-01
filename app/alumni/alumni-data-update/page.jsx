"use client";
import React, { useState } from "react";

export default function AlumniUpdatePage() {
  const [formData, setFormData] = useState({
    isAlumni: "", //   controlled
    fullName: "", //   controlled
    gender: "", //   controlled
    bloodGroup: "", //   controlled
    dob: "", //   controlled
    whatsapp: "", //   controlled
    altPhone: "", //   controlled
    usetEmail: "", //   controlled
    personalEmail: "", //   controlled
    presentAddress: "", //   controlled
    presentCountry: "", //   controlled
    permanentAddress: "", //   controlled
    studentId: "", //   controlled
    department: "", //   controlled
    passingYear: "", //   controlled
    convocation: "", //   controlled
    degreeLevel: "", //   controlled
    currentJobStatus: "", //   controlled
    organization: "", //   controlled
    position: "", //   controlled
    higherEducation: "", //   controlled
    careerSupport: "", //   controlled
    contribution: "", //   controlled
    eventsParticipation: "", //   controlled
    awards: "", //   controlled
    extraCurricular: "", //   controlled
    linkedIn: "", //   controlled
    facebook: "", //   controlled
    otherLink: "", //   controlled
    formalImage: null, //   file input is controlled with null
    remarks: "", //   controlled
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value ?? "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Your information has been submitted successfully!");
  };

  return (
    <div className="bg-gray-50">
      <div className="bg-brandblue py-24 px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-3xl font-bold text-center mb-4">
          Dear Proud DIU Alumni
        </h1>
        <p className="text-center">
          We are going to update ourselves by updating your data. Please help us
          by giving your valuable few seconds.
        </p>
      </div>
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow- p-10 my-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Are you an Alumni of USET?
              </label>
              <select
                name="isAlumni"
                value={formData.isAlumni}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Blood Group
              </label>
              <input
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup || ""}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
                placeholder="Ex: A+, O-, B+"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                WhatsApp Number
              </label>
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Alternative Contact Number
              </label>
              <input
                type="text"
                name="altPhone"
                value={formData.altPhone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                USET Email Address
              </label>
              <input
                type="email"
                name="usetEmail"
                value={formData.usetEmail}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Personal Email Address
              </label>
              <input
                type="email"
                name="personalEmail"
                value={formData.personalEmail}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>
          </div>

          {/* Section 2: Academic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Present Address
              </label>
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Present Country
              </label>
              <input
                type="text"
                name="presentCountry"
                value={formData.presentCountry}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Permanent Address
              </label>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                USET Student ID
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Passing Year
              </label>
              <input
                type="number"
                name="passingYear"
                value={formData.passingYear}
                onChange={handleChange}
                min="2000"
                max="2030"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                In which convocation did you complete your graduation?
              </label>
              <input
                type="text"
                name="convocation"
                value={formData.convocation}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                What level of degree you did from USET?
              </label>
              <select
                name="degreeLevel"
                value={formData.degreeLevel}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              >
                <option value="">Select</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="graduate">Graduate</option>
                <option value="both">Both</option>
              </select>
            </div>
          </div>

          {/* Section 4: Job, Education, Support */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Current Job Status
              </label>
              <select
                name="currentJobStatus"
                value={formData.currentJobStatus}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              >
                <option value="">Select</option>
                <option value="business">Business Entrepreneur</option>
                <option value="holdingJob">Holding Job</option>
                <option value="noJob">No Job currently</option>
                <option value="selfEmployed">Self-Employed</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Organization / Company Name & Sector
              </label>
              <input
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Ex: IT, Edu, Tech, Health..."
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Position
              </label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Higher Education
              </label>
              <input
                type="text"
                name="higherEducation"
                value={formData.higherEducation}
                onChange={handleChange}
                placeholder="Institute & Status"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Career Support Needed from USET for your career growth?
              </label>
              <input
                type="text"
                name="careerSupport"
                value={formData.careerSupport}
                onChange={handleChange}
                placeholder="If yes, mention the area"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Do you want to contribute to USET and running students?
              </label>
              <input
                type="text"
                name="contribution"
                value={formData.contribution}
                onChange={handleChange}
                placeholder="If yes, mention the area"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Do you want to engage with different types of events at USET?
              </label>
              <input
                type="text"
                name="eventsParticipation"
                value={formData.eventsParticipation}
                onChange={handleChange}
                placeholder="Ex: Alumni Reunion, Networking..."
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>
          </div>

          {/* Section 5: Achievements, Activities, Social */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Awards & Achievements
              </label>
              <textarea
                name="awards"
                value={formData.awards}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Extra Curricular Activities
              </label>
              <textarea
                name="extraCurricular"
                value={formData.extraCurricular}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Facebook Profile
              </label>
              <input
                type="url"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Any Other Link
              </label>
              <input
                type="url"
                name="otherLink"
                value={formData.otherLink}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Upload Formal Image
              </label>
              <input
                type="file"
                name="formalImage"
                accept="image/*"
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Remarks
              </label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brandblue outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-brandblue text-white py-3 rounded-md font-semibold hover:bg-blue-800 transition-all cursor-pointer"
          >
            Submit Your Information
          </button>
        </form>
      </div>
    </div>
  );
}
