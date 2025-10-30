import React from "react";
import {
  Award,
  BookOpen,
  Building,
  Users,
  CreditCard,
  GraduationCap,
} from "lucide-react";

const benefits = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Campus Facilities Access",
    description:
      "Continued access to university libraries, labs, and sports facilities",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Special Discounts",
    description:
      "Exclusive discounts on continuing education programs and events",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Networking Events",
    description: "Access to alumni networking events and professional meetups",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Library Resources",
    description: "Online access to library resources and academic journals",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Career Services",
    description:
      "Lifetime access to career counseling and job placement services",
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Mentorship Programs",
    description: "Opportunity to participate in student mentorship programs",
  },
];

const AlumniBenefits = () => {
  return (
    <section className="mt-20 bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-center text-brandblue mb-8">
          Alumni Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow"
            >
              <div className="text-brandblue mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniBenefits;
