import React from "react";
import Image from "next/image";

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
  // Add more committee members as needed
];

const AlumniCommittee = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Alumni Committee
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600">
                  {member.department}, {member.batch}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniCommittee;
