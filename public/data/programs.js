const faculties = [
  {
    id: "business",
    name: "Faculty of Business",
    description:
      "The Faculty of Business at USET offers programs that combine theoretical knowledge with practical skills needed in today's global business environment.",
    programs: [
      {
        id: "bba",
        name: "Bachelor of Business Administration (BBA)",
        duration: "4 Years",
        credits: 140,
        description:
          "Our BBA program provides students with a solid foundation in business principles with specialized practical training in key areas including management, marketing, finance, and entrepreneurship.",
        career_paths: [
          "Business Analyst",
          "Marketing Manager",
          "Entrepreneur",
          "Financial Analyst",
          "HR Specialist",
        ],
        key_courses: [
          "Principles of Management",
          "Marketing Fundamentals",
          "Financial Accounting",
          "Business Analytics",
          "Entrepreneurship",
          "Strategic Management",
        ],
        admission_requirements:
          "HSC/A-Level with minimum GPA 3.0 or equivalent",
        practical_components: [
          "Industry internships",
          "Business case competitions",
          "Entrepreneurship projects",
          "Business simulation labs",
        ],
        tuition_fees: {
          total_tuition_fee: 268000,
          per_credit_cost: 2000,
          admission_fee: 15000,
          registration_fee_per_semester: 11000,
          project_fees: 15000,
        },
      },
    ],
  },
  {
    id: "engineering",
    name: "Faculty of Engineering",
    description:
      "The Faculty of Engineering at USET offers cutting-edge programs that combine theoretical knowledge with hands-on skills in emerging technical fields.",
    programs: [
      {
        id: "cse",
        name: "B.Sc in Computer Science & Engineering",
        duration: "4 Years",
        credits: 154,
        description:
          "Our CSE program prepares students with both theoretical foundations and practical skills in software development, computer systems, and emerging technologies like AI and data science.",
        career_paths: [
          "Software Engineer",
          "Web Developer",
          "Systems Analyst",
          "Database Administrator",
          "AI/ML Engineer",
        ],
        key_courses: [
          "Data Structures & Algorithms",
          "Database Systems",
          "Web Engineering",
          "Artificial Intelligence",
          "Computer Networks",
          "Software Engineering",
        ],
        admission_requirements:
          "HSC/A-Level with minimum GPA 3.5 in Science or equivalent others",
        practical_components: [
          "Programming labs",
          "Software development projects",
          "Hardware design workshops",
          "Industry internships",
        ],
        tuition_fees: {
          total_tuition_fee: 347700,
          per_credit_cost: 2200,
          admission_fee: 15000,
          registration_fee_per_semester: 14000,
          project_fees: 15000,
        },
      },
      {
        id: "eee",
        name: "B.Sc in Electrical and Electronic Engineering",
        duration: "4 Years",
        credits: 140,
        description:
          "Our EEE program equips students with theoretical foundations and practical skills in electrical systems, electronics, and emerging technologies like renewable energy and automation.",
        career_paths: [
          "Electrical Engineer",
          "Electronics Engineer",
          "Power Systems Analyst",
          "Automation Engineer",
          "Telecommunications Engineer",
        ],
        key_courses: [
          "Circuit Theory",
          "Electronics",
          "Power Systems",
          "Control Systems",
          "Digital Signal Processing",
          "Renewable Energy Systems",
        ],
        admission_requirements:
          "HSC/A-Level with minimum GPA 3.5 in Science or equivalent",
        practical_components: [
          "Electrical circuit labs",
          "Power system design projects",
          "Electronics workshops",
          "Industry internships",
        ],
        tuition_fees: {
          total_tuition_fee: 320800,
          per_credit_cost: 2200,
          admission_fee: 15000,
          registration_fee_per_semester: 14000,
          project_fees: 12000,
        },
      },
    ],
  },
  {
    id: "liberal-arts",
    name: "Faculty of Liberal Arts and Social Science",
    description:
      "The Faculty of Liberal Arts and Social Science offers programs that develop critical thinking, communication, and analytical skills essential for a variety of careers.",
    programs: [
      {
        id: "english",
        name: "BA in English",
        duration: "4 Years",
        credits: 140,
        description:
          "Our English program provides comprehensive education in English literature, language, and communication skills with practical applications in professional settings.",
        career_paths: [
          "Content Writer",
          "Teacher",
          "Editor",
          "Communications Specialist",
          "Public Relations Officer",
        ],
        key_courses: [
          "English Literature",
          "Professional Communication",
          "Content Development",
          "Linguistics",
          "Creative Writing",
          "Technical Writing",
        ],
        admission_requirements:
          "HSC/A-Level with minimum GPA 3.0 or equivalent with others",
        practical_components: [
          "Writing workshops",
          "Publication projects",
          "Communication labs",
          "Professional content development",
        ],
        tuition_fees: {
          total_tuition_fee: 241200,
          per_credit_cost: 2000,
          admission_fee: 15000,
          registration_fee_per_semester: 11000,
          project_fees: 12000,
        },
      },
      {
        id: "economics",
        name: "BSS in Economics",
        duration: "4 Years",
        credits: 140,
        description:
          "Our Economics program combines theoretical foundations with practical tools for analyzing economic trends, policies, and development issues particularly relevant to Bangladesh.",
        career_paths: [
          "Economic Analyst",
          "Policy Researcher",
          "Financial Consultant",
          "Development Sector Professional",
          "Banking Professional",
        ],
        key_courses: [
          "Microeconomics",
          "Macroeconomics",
          "Development Economics",
          "Economic Statistics",
          "Economic Research Methods",
          "Bangladesh Economy",
        ],
        admission_requirements:
          "HSC/A-Level with minimum GPA 3.0 or equivalent",
        practical_components: [
          "Economic analysis projects",
          "Policy research",
          "Statistical analysis labs",
          "Development sector internships",
        ],
        tuition_fees: {
          total_tuition_fee: 243000,
          per_credit_cost: 2000,
          admission_fee: 15000,
          registration_fee_per_semester: 11000,
          project_fees: 10000,
        },
      },
    ],
  },
];
export default faculties;
