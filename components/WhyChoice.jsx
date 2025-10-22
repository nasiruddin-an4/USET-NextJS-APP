"use client";
import { GraduationCap, Map, Briefcase, ArrowRight } from "lucide-react";

function WhyChoice() {
  const features = [
    {
      icon: <GraduationCap className="w-10 h-10 text-white" />,
      title: "First Skill-Based University in Bangladesh",
      description:
        "Pioneering approach to practical, skill-enrichment education with focus on workforce-ready graduates.",
    },
    {
      icon: <Map className="w-10 h-10 text-white" />,
      title: "Serving Disadvantaged Areas",
      description:
        "Bringing higher education opportunities to rural and underserved areas with a commitment to educational access.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-white" />,
      title: "Industry-Relevant Education",
      description:
        "Practical curriculum designed for employability following the dual technical education system of EU models.",
    },
  ];
  return (
    <div>
      <section className="py-20 bg-white text-center">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-600 mt-4">
            What Makes Us Different
          </h2>
          <p className="text-gray-500 mt-2 text-md">
            USET offers a unique approach to higher education in Bangladesh,
            focusing on practical skills and industry relevance. Discover what
            sets us apart.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-7xl mx-auto grid gap-8 px-4 md:px-0 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-3 transition-all duration-500 ease-out p-8 text-left"
            >
              <div
                className={`w-16 h-16 bg-brandblue rounded-full flex items-center justify-center mb-6`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brandblue text-brandblue font-semibold rounded-md hover:bg-brandblue hover:text-white transition-all duration-500 ease-out"
          >
            Learn More About USET <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default WhyChoice;
