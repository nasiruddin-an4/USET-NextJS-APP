const admissionsData = {
  tabs: [
    {
      id: "undergraduate",
      label: "Undergraduate",
      title: "Undergraduate Admission Process",
      intro:
        "The admission process at USET is designed to identify students who will thrive in our skill-focused environment. We evaluate applicants based on academic achievement, practical aptitude, and alignment with our mission.",
      steps: [
        {
          step: 1,
          title: "Check Eligibility Requirements",
          desc: "Ensure you meet the basic eligibility criteria for your chosen program.",
          items: [
            "HSC/A-Level or equivalent with minimum GPA 3.0",
            "Science background for engineering programs",
            "English language proficiency",
          ],
        },
        {
          step: 2,
          title: "Complete Online Application",
          desc: "Submit your application form with accurate information.",
          items: [
            "HSC/A-Level certificate and transcript",
            "SSC/O-Level certificate and transcript",
            "Passport-sized photographs",
            "National ID or birth certificate",
          ],
        },
        {
          step: 3,
          title: "Take Admission Test",
          desc: "Shortlisted applicants take the USET admission test.",
          items: [
            "Subject knowledge assessment",
            "Analytical and problem-solving abilities",
            "English language proficiency",
            "Aptitude for practical learning",
          ],
        },
        {
          step: 4,
          title: "Interview (For Selected Candidates)",
          desc: "Candidates attend an interview with faculty members.",
          items: [
            "Motivation and interest in chosen field",
            "Communication skills",
            "Alignment with USET’s approach",
            "Academic and professional potential",
          ],
        },
        {
          step: 5,
          title: "Admission Offer and Enrollment",
          desc: "Successful candidates receive admission offers.",
          items: [
            "Pay admission and tuition fees",
            "Submit original documents",
            "Complete enrollment process",
            "Attend orientation program",
          ],
        },
      ],
      sidebar: {
        dates: [
          { label: "Application Opens", date: "May 1, 2025" },
          { label: "Application Deadline", date: "July 15, 2025" },
          { label: "Admission Test", date: "July 25–30, 2025" },
          { label: "Interview Period", date: "August 5–15, 2025" },
          { label: "Result Announcement", date: "August 20, 2025" },
          { label: "Fee Payment Deadline", date: "August 30, 2025" },
          { label: "Orientation", date: "September 5, 2025" },
          { label: "Classes Begin", date: "September 10, 2025" },
        ],
        fee: "BDT 1,000 (non-refundable)",
        note: "The application fee for undergraduate programs is BDT 1,000, payable online through bank transfer, bKash, or in person at the university.",
        email: "admissions@uset.ac.bd",
      },
    },
    {
      id: "graduate",
      label: "Graduate",
      title: "Graduate Programs",
      intro:
        "USET is developing graduate programs that expand on our philosophy of skill-based, industry-relevant education.",
      comingSoon: [
        "Master of Business Administration (MBA)",
        "M.Sc. in Computer Science & Engineering",
        "M.A. in Development Studies",
      ],
      sidebar: {
        fee: "To be announced",
        note: "Graduate program dates will be published soon.",
        email: "admissions@uset.ac.bd",
      },
    },
    {
      id: "international",
      label: "International Students",
      title: "International Student Admissions",
      applicationProcess:
        "The application process for international students follows the same general steps as for domestic students, with additional documentation requirements and an extended timeline to accommodate visa processing.",
      intro:
        "USET welcomes applications from international students who are interested in experiencing Bangladesh's unique approach to skill-based education. Our international student program provides a supportive environment for students from diverse backgrounds.",
      requirements: [
        "Academic Credentials: Official transcripts and certificates translated into English if in another language, with authentication from relevant authorities",
        "English Proficiency: IELTS score of 6.0 or equivalent (TOEFL, PTE) for programs taught in English",
        "Passport and Visa: Valid passport and student visa for Bangladesh",
        "Financial Statement: Proof of sufficient funds to cover tuition and living expenses",
        "Health Insurance: Proof of health insurance valid in Bangladesh",
      ],
      support: [
        "Assistance with accommodation arrangements",
        "Orientation program specifically for international students",
        "Cultural adaptation support",
        "Academic advising and tutoring",
        "Visa extension assistance",
      ],
      sidebar: {
        dates: [
          { label: "Application Opens", date: "April 1, 2025" },
          { label: "Application Deadline", date: "June 30, 2025" },
          { label: "Document Verification", date: "July 1–15, 2025" },
          { label: "Admission Test", date: "July 20–25, 2025" },
          { label: "Result Announcement", date: "August 15, 2025" },
          { label: "Visa Processing", date: "August 16–31, 2025" },
          { label: "Arrival & Orientation", date: "September 1–7, 2025" },
        ],
        fee: "USD 50",
        note: "International students can pay online via international methods.",
        email: "international@uset.ac.bd",
      },
    },
  ],
};

export default admissionsData;
