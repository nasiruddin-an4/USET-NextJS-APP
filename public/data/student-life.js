const studentLifeData = {
  hero: {
    title: "Life at USET",
    subtitle:
      "xperience a vibrant campus community with diverse activities, clubs, and opportunities for personal growth.",
    image: "/images/campus.jpg",
  },

  stats: [
    { label: "Student Clubs", value: "20+" },
    { label: "Annual Events", value: "50+" },
    { label: "Active Students", value: "1000+" },
    { label: "Student Satisfaction", value: "95%" },
  ],

  sections: [
    {
      title: "Student Organizations",
      description:
        "Join diverse clubs and organizations that match your interests and help develop leadership skills.",
      subcategories: ["Cultural Clubs", "Academic Societies", "Sports Teams"],
      image: "/img/student-organizations.jpg",
    },
    {
      title: "Campus Activities",
      description:
        "Engage in exciting events and activities throughout the academic year.",
      subcategories: ["Cultural Events", "Tech Festivals", "Workshops"],
      image: "/img/campus-activities.jpg",
    },
    {
      title: "Campus Facilities",
      description:
        "Access modern facilities designed to enhance your university experience.",
      subcategories: ["Modern Library", "Sports Complex", "Student Lounges"],
      image: "/img/campus-facilities.jpg",
    },
  ],

  clubs: {
    title: "Student Clubs & Organizations",
    description:
      "USET offers a wide range of student clubs and organizations that cater to various interests and passions. These student-led groups provide opportunities to pursue hobbies, develop leadership skills, and connect with like-minded peers.",
    benefits: [
      "Develop leadership and teamwork skills",
      "Apply classroom learning to real-world projects",
      "Build a network of friends and professional contacts",
      "Enhance your resume with extracurricular achievements",
    ],
    list: [
      {
        name: "Tech Innovators Club",
        desc: "A community of tech enthusiasts who work on innovative projects, participate in hackathons, and organize workshops on emerging technologies.",
        highlights: ["Coding competitions", "Tech workshops", "Hackathons"],
        image: "/img/tech-club.jpg",
      },
      {
        name: "Entrepreneurship Club",
        desc: "Fostering entrepreneurial spirit through business plan competitions, startup mentoring, and networking events with successful entrepreneurs.",
        highlights: [
          "Business plan competitions",
          "Startup workshops",
          "Networking events",
        ],
        image: "/img/entrepreneurship-club.jpg",
      },
      {
        name: "Creative Arts Society",
        desc: "Celebrating creativity through literature, visual arts, music, and drama — where imagination meets performance.",
        highlights: ["Art exhibitions", "Literary festivals", "Performances"],
        image: "/img/arts-club.jpg",
      },
      {
        name: "Debate & Public Speaking Club",
        desc: "Develop communication and critical thinking skills through debates, public speaking competitions, and Model UN conferences.",
        highlights: [
          "Debate tournaments",
          "Public speaking workshops",
          "Model UN conferences",
        ],
        image: "/img/debate-club.jpg",
      },
    ],
  },

  resources: {
    title: "Campus Resources",
    description:
      "USET provides a comprehensive range of resources and facilities to support your academic journey and enhance your campus experience.",
    highlights: [
      "Modern facilities designed for practical learning",
      "Comprehensive library with digital resources",
      "State-of-the-art computer labs and technology",
      "Dedicated spaces for collaboration and study",
    ],
    facilities: [
      {
        name: "University Library",
        desc: "Access to thousands of books, journals, and online databases with comfortable study spaces and professional support.",
        features: ["Over 20,000 books", "Online databases", "Study rooms"],
        image: "/img/library.jpg",
      },
      {
        name: "Computer Labs",
        desc: "Equipped with the latest hardware and software for programming, design, and technical projects.",
        features: ["Specialized labs", "IT support", "Software access"],
        image: "/img/computer-labs.jpg",
      },
      {
        name: "Innovation Center",
        desc: "Resources and mentorship for student projects, startups, and interdisciplinary collaborations.",
        features: ["Makerspace", "Mentorship", "Startup support"],
        image: "/img/innovation-center.jpg",
      },
      {
        name: "Recreational Facilities",
        desc: "Sports, lounges, and creative spaces for a balanced campus life.",
        features: ["Sports facilities", "Art rooms", "Student lounges"],
        image: "/img/recreation.jpg",
      },
    ],
  },

  career: {
    title: "Career Services",
    description:
      "USET's Career Development Center empowers students with tools and opportunities to launch successful careers, bridging academics with professional growth.",
    stats: [
      { label: "Placement Rate", value: "92%" },
      { label: "Internship Placement", value: "97%" },
      { label: "Industry Partners", value: "50+" },
    ],
    services: [
      "Career counseling sessions",
      "Resume workshops",
      "Interview preparation",
      "Job fairs",
      "Industry networking",
      "Internship programs",
    ],
    image: "/img/career-services.jpg",
  },

  support: {
    title: "Student Support Services",
    description:
      "USET provides comprehensive support to help students navigate their academic journey and address personal or academic challenges.",
    philosophy: [
      "Personalized approach to student needs",
      "Holistic development for every student",
      "Proactive and confidential support",
    ],
    services: [
      {
        name: "Academic Advising",
        desc: "Navigate degree requirements and plan your academic journey with personalized guidance.",
        items: ["Course planning", "Progress monitoring"],
      },
      {
        name: "Tutoring Services",
        desc: "Free academic support to master challenging concepts and improve performance.",
        items: ["Group tutoring", "Study workshops"],
      },
      {
        name: "Counseling Services",
        desc: "Confidential mental health support to manage stress and personal challenges.",
        items: ["Counseling sessions", "Mental health workshops"],
      },
      {
        name: "Financial Aid Advising",
        desc: "Guidance on scholarships, grants, and financial planning for affordable education.",
        items: ["Scholarship guidance", "Financial literacy"],
      },
    ],
  },

  housing: {
    title: "Housing & Dining Services",
    description:
      "USET offers partnerships with nearby residential facilities and diverse on-campus dining options for all students.",
    housing: {
      title: "Housing Options",
      partners: [
        "Samad-Banu Student Housing (5 min walk)",
        "Narayanganj Student Residences (15 min by transport)",
      ],
      assistance: [
        "Housing referral services",
        "Roommate matching assistance",
        "Housing fairs",
      ],
    },
    dining: {
      title: "Dining Services",
      locations: [
        "Main Cafeteria (Student Center)",
        "Green Café (Library)",
        "Engineering Building Kiosk",
      ],
      mealPlans: ["Prepaid meal cards", "Daily specials"],
    },
  },

  testimonials: {
    title: "What Our Students Say",
    quotes: [
      {
        name: "Aisha Rahman",
        text: "USET gave me the confidence and skills to turn my ideas into reality. The clubs and mentors here changed my life.",
        image: "/img/student1.jpg",
      },
      {
        name: "Samiul Hasan",
        text: "Being part of student life at USET means endless opportunities — from innovation labs to cultural festivals.",
        image: "/img/student2.jpg",
      },
    ],
  },

  cta: {
    title: "Get Involved in Campus Life",
    subtitle:
      "Join the heartbeat of USET — explore clubs, events, and communities that inspire you to grow.",
    buttonText: "Join Now",
    buttonLink: "/admissions",
  },
};

export default studentLifeData;
