const departments = [
  {
    id: "computer-science",
    name: "Department of Computer Science and Engineering",
    faculty: [
      {
        id: "farhana-akter-badhon",
        name: "Farhana Akter Badhon",
        position: "Lecturer",
        image: "/images/Farhana Akter Badhon.jpg",
        email: "farhana.badhon@uset.edu.bd",
        phone: "+8801711-123456",
        education: [
          "M.Sc. in Computer Science, University of Dhaka",
          "B.Sc. in Computer Science, USET",
        ],
        experience: [
          "Lecturer, USET (2022–Present)",
          "Software Engineer, BJIT Ltd. (2020–2022)",
        ],
        researchInterests: [
          "Machine Learning",
          "Data Mining",
          "Human-Computer Interaction",
        ],
        publications: [
          "‘Predictive Models for Student Retention’ – Journal of AI Research, 2023",
          "‘Improving E-learning Engagement Using AI Chatbots’ – IEEE ICIT 2024",
        ],
        about:
          "Farhana Akter Badhon is a passionate educator and researcher focused on creating intelligent learning systems that improve student engagement. Her academic journey blends both software development and machine learning expertise.",
        achievements: [
          "Received 'Best Paper Award' at IEEE ICIT 2024",
          "Supervised multiple undergraduate research projects in AI applications",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/farhana-badhon",
          researchgate: "https://researchgate.net/profile/Farhana_Badhon",
        },
        officeHours: "Sunday–Wednesday, 10 AM – 1 PM",
      },
      {
        id: "jamim-hossain-chowdhury",
        name: "Jamim Hossain Chowdhury",
        position: "Lecturer",
        image: "/images/Jamim Hossain Chowdhury.jpg",
        email: "jamim.chowdhury@uset.edu.bd",
        phone: "+8801711-223344",
        education: [
          "M.Sc. in Data Science, BRAC University",
          "B.Sc. in CSE, UAP",
        ],
        experience: [
          "Research Assistant, BRAC AI Lab (2021–2022)",
          "Lecturer, USET (2022–Present)",
        ],
        researchInterests: ["Deep Learning", "Computer Vision", "AI Ethics"],
        publications: [
          "‘Facial Emotion Recognition Using CNNs’ – Springer, 2024",
        ],
        about:
          "Jamim specializes in AI model interpretability and ethical decision-making systems. He enjoys mentoring students in AI-driven research projects and leading data analysis workshops.",
        achievements: [
          "Developed a CNN-based facial recognition model with 97% accuracy",
          "Organized the ‘AI for Good’ seminar at USET in 2023",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/jamim-hossain",
          github: "https://github.com/jamimhc",
        },
        officeHours: "Monday–Thursday, 11 AM – 2 PM",
      },
      {
        id: "md-arifur-rahman",
        name: "Md. Arifur Rahman",
        position: "Lecturer",
        image: "/images/Md. Arifur Rahman.jpg",
        email: "arifur.rahman@uset.edu.bd",
        phone: "+8801777-112233",
        education: [
          "M.Sc. in Cyber Security, Aalto University",
          "B.Sc. in CSE, USET",
        ],
        experience: [
          "Cybersecurity Analyst, SecureNet BD (2020–2022)",
          "Lecturer, USET (2023–Present)",
        ],
        researchInterests: ["Network Security", "Cryptography", "IoT Systems"],
        publications: [
          "‘Blockchain-based Access Control for IoT’ – IEEE Access, 2024",
        ],
        about:
          "Arifur Rahman’s research focuses on secure IoT frameworks and blockchain-enabled authentication systems. He actively contributes to cybersecurity awareness programs for students.",
        achievements: [
          "Presented at IEEE IoT-Sec 2024",
          "Consulted on national IoT security guideline project",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/arifur-rahman",
          website: "https://arifur.dev",
        },
        officeHours: "Tuesday–Thursday, 9 AM – 12 PM",
      },
      {
        id: "moumita-kabir",
        name: "Moumita Kabir",
        position: "Lecturer (on study leave)",
        image: "/images/Moumita Kabir.jpg",
        email: "moumita.kabir@uset.edu.bd",
        phone: "+8801700-123456",
        education: [
          "B.Sc. in CSE, USET",
          "Currently pursuing Ph.D. in Artificial Intelligence, NUS",
        ],
        experience: [
          "Lecturer, USET (2021–Present)",
          "Graduate Researcher, NUS AI Lab (2024–Present)",
        ],
        researchInterests: ["Natural Language Processing", "AI for Education"],
        publications: [
          "‘Conversational AI Models for Education Support’ – ACL 2024",
        ],
        about:
          "Moumita Kabir works on NLP applications in educational technologies, combining research with teaching to improve AI-powered learning tools.",
        achievements: [
          "Published first-authored paper at ACL 2024",
          "Supervised multiple NLP student projects",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/moumita-kabir",
        },
        officeHours: "Monday–Wednesday, 10 AM – 12 PM",
      },
      {
        id: "shamim-ahmed",
        name: "Shamim Ahmed",
        position: "Lecturer",
        image: "/images/shamim.jpg",
        email: "shamim.ahmed@uset.edu.bd",
        phone: "+8801710-987654",
        education: [
          "M.Sc. in Software Engineering, North South University",
          "B.Sc. in CSE, USET",
        ],
        experience: [
          "Software Engineer, Datasoft (2020–2022)",
          "Lecturer, USET (2022–Present)",
        ],
        researchInterests: ["Software Engineering", "Agile Development"],
        publications: [
          "‘Code Quality Metrics in Agile Environments’ – IJSE, 2023",
        ],
        about:
          "Shamim Ahmed focuses on software engineering best practices, agile methodologies, and practical coding standards for students and industry collaboration.",
        achievements: [
          "Conducted workshops on Agile Development",
          "Published multiple papers on software quality",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/shamim-ahmed",
        },
        officeHours: "Tuesday–Thursday, 11 AM – 1 PM",
      },
      {
        id: "zannatul-ferdous-zannat",
        name: "Zannatul Ferdous Zannat",
        position: "Lecturer",
        image: "/images/Zannatul Ferdous Zannat.jpg",
        email: "zannat@uset.edu.bd",
        phone: "+8801765-888999",
        education: [
          "M.Sc. in Computer Networks, University of Glasgow",
          "B.Sc. in CSE, USET",
        ],
        experience: [
          "Research Assistant, Glasgow Networks Lab (2021–2022)",
          "Lecturer, USET (2023–Present)",
        ],
        researchInterests: ["Cloud Computing", "Network Optimization"],
        publications: [
          "‘Dynamic Load Balancing in Cloud Systems’ – Elsevier, 2024",
        ],
        about:
          "Zannatul Ferdous Zannat researches cloud optimization and network efficiency, guiding students on real-world distributed computing projects.",
        achievements: [
          "Developed cloud optimization algorithm",
          "Presented at International Cloud Computing Conference 2024",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/zannatul-zannat",
        },
        officeHours: "Monday–Wednesday, 10 AM – 1 PM",
      },
    ],
  },

  {
    id: "business-admin",
    name: "Department of Business Administration",
    faculty: [
      {
        id: "md-abdur-rashid",
        name: "Md Abdur Rashid",
        position: "Associate Professor, Department Head",
        image: "/images/Md Abdur Rashid.jpg",
        email: "abdur.rashid@uset.edu.bd",
        phone: "+8801755-111222",
        education: [
          "MBA, IBA, University of Dhaka",
          "BBA, University of Dhaka",
        ],
        experience: [
          "Head, Dept. of Business Admin, USET (2021–Present)",
          "Assistant Professor, IUB (2015–2020)",
        ],
        researchInterests: ["Strategic Management", "Leadership", "CSR"],
        publications: [
          "‘Corporate Social Responsibility in SMEs’ – Journal of Business Studies, 2023",
        ],
        about:
          "Professor Rashid is a veteran academic and management consultant with over 15 years of experience in strategic leadership and CSR. He leads USET’s Business Administration department with a vision for innovation and ethics in management education.",
        achievements: [
          "Awarded ‘Best Academic Leader’ by IUB in 2019",
          "Published 10+ research papers in reputed business journals",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/md-abdur-rashid",
        },
        officeHours: "Sunday–Tuesday, 9 AM – 1 PM",
      },
      {
        id: "md-hafizul-islam",
        name: "Md. Hafizul Islam",
        position: "Lecturer",
        image: "/images/Md. Hafizul Islam.jpg",
        email: "hafizul.islam@uset.edu.bd",
        phone: "+8801766-223344",
        education: ["MBA in Finance, BRAC University", "BBA in Finance, ULAB"],
        experience: [
          "Lecturer, USET (2022–Present)",
          "Finance Analyst, Robi Axiata (2019–2021)",
        ],
        researchInterests: ["Corporate Finance", "Financial Technology"],
        publications: ["‘Fintech Adoption in Emerging Economies’ – AJF, 2024"],
        about:
          "Md. Hafizul Islam focuses on corporate finance and the adoption of fintech solutions in emerging economies. He teaches finance courses and supervises student projects.",
        achievements: [
          "Published paper on fintech adoption in AJF 2024",
          "Organized Finance Workshops at USET",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/md-hafizul-islam",
        },
        officeHours: "Monday–Wednesday, 10 AM – 12 PM",
      },
      {
        id: "abdullah-bin-seraj",
        name: "Abdullah Bin Seraj",
        position: "Lecturer",
        image: "/images/Abdullah Bin Seraj.jpg",
        email: "abdullah.seraj@uset.edu.bd",
        phone: "+8801710-334455",
        education: [
          "MBA, North South University",
          "BBA, American International University-Bangladesh",
        ],
        experience: ["Lecturer, USET (2023–Present)"],
        researchInterests: ["Marketing Analytics", "Consumer Behavior"],
        publications: ["‘Digital Advertising and Gen Z Consumers’ – JMR, 2023"],
        about:
          "Abdullah Bin Seraj specializes in marketing analytics and consumer behavior, mentoring students in market research and analytics projects.",
        achievements: [
          "Conducted workshops on digital marketing analytics",
          "Published research in JMR 2023",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/abdullah-bin-seraj",
        },
        officeHours: "Tuesday–Thursday, 11 AM – 1 PM",
      },
      {
        id: "sadia-ahmed-urmi",
        name: "Sadia Ahmed Urmi",
        position: "Lecturer",
        image: "/images/Sadia Ahmed Urmi.jpg",
        email: "sadia.urmi@uset.edu.bd",
        phone: "+8801788-112233",
        education: ["MBA in HRM, East West University", "BBA, EWU"],
        experience: [
          "HR Executive, bKash (2019–2021)",
          "Lecturer, USET (2022–Present)",
        ],
        researchInterests: [
          "Human Resource Development",
          "Organizational Psychology",
        ],
        publications: [
          "‘Employee Motivation in Hybrid Work Models’ – HBR Asia, 2024",
        ],
        about:
          "Sadia Ahmed Urmi focuses on HR development and organizational psychology, helping students understand workforce management in modern organizations.",
        achievements: [
          "Organized HR workshops for students",
          "Published in HBR Asia 2024",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/sadia-ahmed-urmi",
        },
        officeHours: "Monday–Wednesday, 9 AM – 12 PM",
      },
    ],
  },

  {
    id: "english",
    name: "Department of English",
    faculty: [
      {
        id: "imrose-afrine",
        name: "Imrose Afrine",
        position: "Lecturer",
        image: "/images/Imrose Afrine.jpg",
        email: "imrose.afrine@uset.edu.bd",
        phone: "+8801799-445566",
        education: [
          "M.A. in English Literature, University of Dhaka",
          "B.A. in English, University of Dhaka",
        ],
        experience: [
          "Lecturer, USET (2021–Present)",
          "Researcher, British Council Literature Project (2020)",
        ],
        researchInterests: ["Postcolonial Studies", "Modern Fiction"],
        publications: [
          "‘Representation of Identity in South Asian Literature’ – JELL, 2023",
        ],
        about:
          "Imrose Afrine focuses on literature that explores identity, diaspora, and the postcolonial experience. Her classes emphasize critical thinking and creativity in literary interpretation.",
        achievements: [
          "Panel speaker at LitFest 2023",
          "Author of 3 literary essays",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/imrose-afrine",
        },
        officeHours: "Sunday–Wednesday, 10 AM – 12 PM",
      },
      {
        id: "md-mahbub-alam-khan",
        name: "Md. Mahbub Alam Khan",
        position: "Lecturer",
        image: "/images/Md. Mahbub Alam Khan.jpg",
        email: "mahbub.khan@uset.edu.bd",
        phone: "+8801722-998877",
        education: ["M.A. in ELT, BRAC University", "B.A. in English, UAP"],
        experience: ["Lecturer, USET (2022–Present)"],
        researchInterests: ["Language Teaching", "Sociolinguistics"],
        publications: [
          "‘Code-Switching in Bangladeshi Classrooms’ – Linguistics Today, 2024",
        ],
        about:
          "Md. Mahbub Alam Khan works on classroom language dynamics and sociolinguistics, integrating modern teaching methodologies for English language learners.",
        achievements: [
          "Conducted ELT workshops",
          "Published research papers in 2024",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/md-mahbub-alam-khan",
        },
        officeHours: "Monday–Wednesday, 10 AM – 12 PM",
      },
      {
        id: "zinat-alfaz-pinky",
        name: "Zinat Alfaz Pinky",
        position: "Lecturer",
        image: "/images/Zinat Alfaz Pinky.jpg",
        email: "zinat.pinky@uset.edu.bd",
        phone: "+8801788-665544",
        education: ["M.A. in Applied Linguistics, NSU", "B.A. in English, NSU"],
        experience: ["Lecturer, USET (2023–Present)"],
        researchInterests: [
          "Second Language Acquisition",
          "Educational Technology",
        ],
        publications: [
          "‘Gamification in English Language Learning’ – ELT Journal, 2023",
        ],
        about:
          "Zinat Alfaz Pinky focuses on gamification and technology in language learning, making English education interactive and engaging for students.",
        achievements: [
          "Implemented gamified learning modules",
          "Published ELT Journal 2023",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/zinat-alfaz-pinky",
        },
        officeHours: "Tuesday–Thursday, 10 AM – 12 PM",
      },
    ],
  },

  {
    id: "economics",
    name: "Department of Economics",
    faculty: [
      {
        id: "nawazeesh-muhammad-ali",
        name: "Nawazeesh Muhammad Ali",
        position: "Lecturer",
        image: "/images/Nawazeesh Muhammad Ali.jpg",
        email: "nawazeesh.ali@uset.edu.bd",
        phone: "+8801755-778899",
        education: [
          "M.Sc. in Economics, University of Dhaka",
          "B.S.S. in Economics, University of Dhaka",
        ],
        experience: [
          "Research Fellow, CPD Bangladesh (2021–2023)",
          "Lecturer, USET (2023–Present)",
        ],
        researchInterests: [
          "Development Economics",
          "Public Policy",
          "Microfinance",
        ],
        publications: [
          "‘Rural Microfinance Impact Assessment’ – Economic Review, 2023",
        ],
        about:
          "Nawazeesh Muhammad Ali specializes in development economics and microfinance impact studies. He mentors students on research projects related to public policy and rural development.",
        achievements: [
          "Conducted rural microfinance surveys",
          "Published Economic Review 2023",
        ],
        socialLinks: {
          linkedin: "https://linkedin.com/in/nawazeesh-muhammad-ali",
        },
        officeHours: "Monday–Wednesday, 9 AM – 12 PM",
      },
    ],
  },
];

export default departments;
