"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function AdmissionPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    program: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.match(/^\+8801[0-9]{8}$/))
      newErrors.phone =
        "Please enter a valid phone number (e.g., +8801XXXXXXXXX)";
    if (!formData.gender) newErrors.gender = "Please select a gender";
    if (!formData.program) newErrors.program = "Please select a program";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Admission Form Submitted:", formData);
      setSuccessMessage(
        "🎉 Your admission form has been submitted successfully!"
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        gender: "",
        program: "",
        address: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setErrors({ submit: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Online Admission Form
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Apply for your desired program at{" "}
          <span className="font-semibold text-blue-600">USET</span>. Fill in
          your details carefully, and our admission team will contact you soon.
        </p>

        {/* Success Message */}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex justify-between items-center">
            <span>{successMessage}</span>
            <button
              onClick={() => setSuccessMessage("")}
              className="text-green-700 hover:text-green-900"
              aria-label="Dismiss success message"
            >
              ✕
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-gray-700 mb-2 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full border ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                aria-describedby={
                  errors.fullName ? "fullName-error" : undefined
                }
              />
              {errors.fullName && (
                <p id="fullName-error" className="text-red-500 text-sm mt-1">
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 mb-2 font-medium"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+8801XXXXXXXXX"
                className={`w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-sm mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label
                htmlFor="gender"
                className="block text-gray-700 mb-2 font-medium"
              >
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className={`w-full border ${
                  errors.gender ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                aria-describedby={errors.gender ? "gender-error" : undefined}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <p id="gender-error" className="text-red-500 text-sm mt-1">
                  {errors.gender}
                </p>
              )}
            </div>

            {/* Program */}
            <div className="md:col-span-2">
              <label
                htmlFor="program"
                className="block text-gray-700 mb-2 font-medium"
              >
                Program of Interest
              </label>
              <select
                id="program"
                name="program"
                required
                value={formData.program}
                onChange={handleChange}
                className={`w-full border ${
                  errors.program ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                aria-describedby={errors.program ? "program-error" : undefined}
              >
                <option value="">Select a program</option>
                <option value="B.Sc. in Computer Science & Engineering">
                  B.Sc. in Computer Science & Engineering
                </option>
                <option value="B.Sc. in Electrical & Electronic Engineering">
                  B.Sc. in Electrical & Electronic Engineering
                </option>
                <option value="BBA (Bachelor of Business Administration)">
                  BBA (Bachelor of Business Administration)
                </option>
                <option value="BA in English">BA in English</option>
                <option value="BSS in Economics">BSS in Economics</option>
              </select>
              {errors.program && (
                <p id="program-error" className="text-red-500 text-sm mt-1">
                  {errors.program}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-gray-700 mb-2 font-medium"
              >
                Address
              </label>
              <textarea
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your permanent address"
                className={`w-full border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                aria-describedby={errors.address ? "address-error" : undefined}
              />
              {errors.address && (
                <p id="address-error" className="text-red-500 text-sm mt-1">
                  {errors.address}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-medium"
              >
                Additional Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Any specific questions or comments?"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || Object.keys(errors).length > 0}
            className={`w-full flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 ${
              isSubmitting || Object.keys(errors).length > 0
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
                />
              </svg>
            ) : (
              <Send size={18} />
            )}
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </main>
  );
}
