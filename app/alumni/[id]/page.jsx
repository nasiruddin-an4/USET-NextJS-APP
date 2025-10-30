"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Award,
  Building2,
  Calendar,
} from "lucide-react";
import alumniData from "@/public/data/Alumni";

const AlumniProfile = () => {
  const { id } = useParams();
  const alumni = alumniData.find((a) => a.id === id);

  if (!alumni) {
    return <div className="text-center py-12">Alumni not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header/Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 h-48"></div>

        {/* Profile Content */}
        <div className="relative px-6 pb-6">
          {/* Profile Image */}
          <div className="relative -mt-24 mb-6">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={alumni.image}
                alt={alumni.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{alumni.name}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {alumni.currentPosition} at {alumni.company}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Batch {alumni.batch}
              </span>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-500" />
                  {alumni.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-gray-500" />
                  {alumni.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-gray-500" />
                  {alumni.linkedin}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">
                Professional Journey
              </h2>
              <div className="space-y-4">
                {alumni.experience?.map((exp, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <h3 className="font-medium">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniProfile;
