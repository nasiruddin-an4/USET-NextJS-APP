"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const committeeMembers = [
  {
    name: "Dr. John Smith",
    position: "Committee President",
    department: "CSE",
    batch: "2005",
    image: "/images/committee/member1.jpg",
  },
  {
    name: "Sarah Johnson",
    position: "Vice President",
    department: "BBA",
    batch: "2008",
    image: "/images/committee/member2.jpg",
  },
  {
    name: "Michael Brown",
    position: "Secretary",
    department: "EEE",
    batch: "2010",
    image: "/images/committee/member3.jpg",
  },
  {
    name: "Lisa White",
    position: "Treasurer",
    department: "Civil",
    batch: "2011",
    image: "/images/committee/member4.jpg",
  },
  {
    name: "David Kim",
    position: "Coordinator",
    department: "Textile",
    batch: "2009",
    image: "/images/committee/member5.jpg",
  },
  {
    name: "Emily Davis",
    position: "Public Relations",
    department: "Pharmacy",
    batch: "2012",
    image: "/images/committee/member6.jpg",
  },
];

const AlumniCommittee = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-brandblue mb-3">
            Alumni Committee
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Meet our distinguished alumni leaders who continue to guide and
            inspire the USET community through their dedication and vision.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-brandblue transition-colors">
                  {member.name}
                </h3>
                <p className="text-brandblue font-medium mt-1">
                  {member.position}
                </p>
                <div className="mt-2 text-gray-600 text-sm">
                  <span className="font-medium">{member.department}</span> •{" "}
                  Batch {member.batch}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniCommittee;
