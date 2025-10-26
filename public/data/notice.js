const noticeData = [
  {
    id: "notice-001",
    title: "Final Exam Schedule for Spring 2024 Semester Published",
    date: "October 24, 2025",
    category: "Academic",
    content:
      "The detailed schedule for the upcoming final examinations has been published. All students are advised to download the schedule from the portal.",
    pdf: "/hsc.pdf",
    image: "/images/notices/exam-schedule.jpg", // Optional preview image
    tags: ["exam", "schedule", "spring-2024"],
  },
  {
    id: "notice-002",
    title: "Admission Open for Fall 2025 Intake - Apply Now!",
    date: "October 20, 2025",
    category: "Admission",
    content:
      "Applications are officially open for all undergraduate and graduate programs for the Fall 2025 semester. Important dates and application guidelines are inside.",
    pdf: "/notices/fall-2025-admission-circular.pdf",
    image: "/images/notices/admission-2025.jpg",
    tags: ["admission", "fall-2025", "apply"],
  },
  {
    id: "notice-003",
    title: "Mandatory Workshop on AI Ethics for CSE Students",
    date: "October 18, 2025",
    category: "Departmental (CSE)",
    content:
      "A compulsory one-day workshop focusing on the ethical implications of Artificial Intelligence will be held on November 5th. Registration is required.",
    pdf: "/notices/ai-ethics-workshop-details.pdf",
    image: "/images/notices/ai-ethics.jpg",
    tags: ["cse", "ai", "ethics", "workshop"],
  },
  {
    id: "notice-004",
    title: "Holiday Announcement: Eid-ul-Fitr Break",
    date: "October 15, 2025",
    category: "General",
    content:
      "The University will remain closed from November 10th to November 18th on account of the upcoming Eid-ul-Fitr celebrations.",
    pdf: "/notices/eid-holiday-announcement.pdf",
    image: null, // No image for holiday notice
    tags: ["holiday", "eid", "closure"],
  },
  {
    id: "notice-005",
    title: "Scholarship Application Deadline Extension",
    date: "October 10, 2025",
    category: "Financial Aid",
    content:
      "The deadline for applying for merit and need-based scholarships for the current academic year has been extended to November 30, 2025.",
    pdf: "/notices/scholarship-extension-notice.pdf",
    image: "/images/notices/scholarship.jpg",
    tags: ["scholarship", "financial-aid", "extension"],
  },
  {
    id: "notice-006",
    title: "Change in Class Schedule for EEE 301 (Power Systems)",
    date: "October 8, 2025",
    category: "Academic",
    content:
      "Due to unforeseen circumstances, the class schedule for EEE 301 has been temporarily moved. Please check the new timings on the department website.",
    pdf: "/notices/eee-301-schedule-change.pdf",
    image: null,
    tags: ["eee", "schedule-change", "power-systems"],
  },
  {
    id: "notice-007",
    title: "Call for Papers: Annual Engineering Research Symposium",
    date: "October 5, 2025",
    category: "Research",
    content:
      "Students and faculty are invited to submit their research papers for the 5th Annual Engineering Research Symposium. Submission deadline is December 15.",
    pdf: "/notices/research-symposium-cfp.pdf",
    image: "/images/notices/cfp-symposium.jpg",
    tags: ["research", "symposium", "call-for-papers"],
  },
  {
    id: "notice-008",
    title: "Inter-University Programming Contest Registration Open",
    date: "October 1, 2025",
    category: "Clubs & Events",
    content:
      "Register your teams for the Inter-University Programming Contest hosted by the USET Programming Club. Limited slots available!",
    pdf: "/notices/programming-contest-registration.pdf",
    image: "/images/notices/programming-contest.jpg",
    tags: ["contest", "programming", "registration"],
  },
  {
    id: "notice-009",
    title: "Mandatory Orientation for New Faculty Members",
    date: "September 28, 2025",
    category: "General",
    content:
      "A mandatory two-day orientation session for all newly joined faculty members will be held on November 1st and 2nd in the main auditorium.",
    pdf: "/notices/faculty-orientation-details.pdf",
    image: null,
    tags: ["faculty", "orientation", "hr"],
  },
  {
    id: "notice-010",
    title: "Updated Library Hours for Exam Week",
    date: "September 25, 2025",
    category: "General",
    content:
      "The Central Library will operate with extended hours from 8 AM to 10 PM during the final exam preparation period, starting October 28th.",
    pdf: "/notices/extended-library-hours.pdf",
    image: "/images/notices/library-hours.jpg",
    tags: ["library", "exam-week", "hours"],
  },
  {
    id: "notice-011",
    title: "Registration for Midterm Exams Starts Next Week",
    date: "September 22, 2025",
    category: "Academic",
    content:
      "Course registration for the upcoming Midterm examinations will start on September 29, 2025. Please clear all dues before registration.",
    pdf: "/notices/midterm-reg-details.pdf",
    image: null,
    tags: ["midterm", "registration", "academic"],
  },
  {
    id: "notice-012",
    title: "Civil Engineering Department Seminar: Urban Planning",
    date: "September 20, 2025",
    category: "Departmental (CE)",
    content:
      "The CE department is hosting a seminar on sustainable urban planning by Dr. Hasanuzzaman. The seminar is open to all students and faculty.",
    pdf: "/notices/ce-seminar-urban-planning.pdf",
    image: "/images/notices/ce-seminar.jpg",
    tags: ["civil", "seminar", "urban-planning"],
  },
  {
    id: "notice-013",
    title: "Last Date for Course Withdrawal (Drop Period)",
    date: "September 15, 2025",
    category: "Academic",
    content:
      "Students must complete all course withdrawal formalities by 4:00 PM on September 30, 2025. No requests will be entertained after this deadline.",
    pdf: "/notices/course-withdrawal-deadline.pdf",
    image: null,
    tags: ["withdrawal", "drop-period", "deadline"],
  },
  {
    id: "notice-014",
    title: "Sports Club Annual General Meeting (AGM)",
    date: "September 12, 2025",
    category: "Clubs & Events",
    content:
      "All members and interested students are invited to the Sports Club AGM to elect new office bearers and plan for the next season.",
    pdf: "/notices/sports-club-agm.pdf",
    image: "/images/notices/sports-agm.jpg",
    tags: ["sports", "agm", "club"],
  },
  {
    id: "notice-015",
    title: "New Policy on Student ID Card Renewal",
    date: "September 10, 2025",
    category: "General",
    content:
      "The administration has published a revised policy and fee structure for the renewal of expired student ID cards. Details are attached.",
    pdf: "/notices/id-card-renewal-policy.pdf",
    image: null,
    tags: ["id-card", "renewal", "policy"],
  },
  {
    id: "notice-016",
    title: "Textile Engineering Lab Safety Training Schedule",
    date: "September 8, 2025",
    category: "Departmental (TE)",
    content:
      "Mandatory safety training for all 2nd-year Textile Engineering students will be held on three separate dates. Check the schedule for your assigned slot.",
    pdf: "/notices/te-safety-training.pdf",
    image: "/images/notices/te-safety.jpg",
    tags: ["textile", "safety", "training"],
  },
  {
    id: "notice-017",
    title: "Vaccination Campaign for Students and Staff",
    date: "September 5, 2025",
    category: "Health & Safety",
    content:
      "A free COVID-19 and Flu vaccination campaign will be held on campus next week in collaboration with the City Health Department.",
    pdf: "/notices/vaccination-campaign-details.pdf",
    image: "/images/notices/vaccination.jpg",
    tags: ["vaccination", "health", "covid"],
  },
  {
    id: "notice-018",
    title: "Mechanical Engineering Design Competition 2025",
    date: "September 2, 2025",
    category: "Clubs & Events",
    content:
      "Registration is now open for the annual Mechanical Design Competition. Prizes include paid internship opportunities!",
    pdf: "/hsc.pdf",
    image: "/images/notices/me-competition.jpg",
    tags: ["mechanical", "design", "competition"],
  },
  {
    id: "notice-019",
    title: "Procedure for Transcript Collection and Verification",
    date: "August 30, 2025",
    category: "Academic",
    content:
      "A simplified procedure for requesting and verifying academic transcripts has been implemented by the Registrar's office, effective immediately.",
    pdf: "/hsc.pdf",
    image: null,
    tags: ["transcript", "registrar", "procedure"],
  },
  {
    id: "notice-020",
    title: "Recruitment Drive by Leading MNC (IBM)",
    date: "August 25, 2025",
    category: "Career Services",
    content:
      "The Career Services Office announces a major recruitment drive by IBM for final-year students across all engineering disciplines. Register before October 1st.",
    pdf: "/hsc.pdf",
    image: "/images/notices/ibm-recruitment.jpg",
    tags: ["ibm", "recruitment", "career"],
  },
];

export default noticeData;
