// app/academics/data.js

export const gradingSystem = [
  { grade: "A+", points: "4.00", percentage: "90–100%", status: "Excellent" },
  { grade: "A", points: "3.75", percentage: "85–89%", status: "Outstanding" },
  { grade: "A−", points: "3.50", percentage: "80–84%", status: "Very Good" },
  { grade: "B+", points: "3.25", percentage: "75–79%", status: "Good" },
  { grade: "B", points: "3.00", percentage: "70–74%", status: "Satisfactory" },
];

export const creditSystem = [
  { type: "Lecture", hours: "1 credit = 15 hours of classroom instruction" },
  { type: "Laboratory", hours: "1 credit = 30–45 hours of practical work" },
  { type: "Internship", hours: "1 credit = 45 hours of supervised training" },
  { type: "Project Work", hours: "1 credit = 45 hours of guided project work" },
  { type: "Independent Study", hours: "1 credit = 45 hours of research/study" },
];

export const academicCalendar = [
  {
    date: "Aug 15",
    title: "Registration Begins",
    category: "Registration",
    color: "green",
  },
  {
    date: "Sep 01",
    title: "Classes Begin",
    category: "Academic",
    color: "blue",
  },
  {
    date: "Oct 15–20",
    title: "Midterm Examinations",
    category: "Exam",
    color: "red",
  },
  {
    date: "Nov 10–12",
    title: "Fall Career Fair",
    category: "Event",
    color: "yellow",
  },
  {
    date: "Dec 20–30",
    title: "Final Examinations",
    category: "Exam",
    color: "red",
  },
];

export const supportServices = [
  {
    title: "Academic Advising",
    description:
      "Get personalized guidance for your academic journey, course selection, and career pathway from experienced advisors.",
    link: "#",
    linkText: "Schedule now →",
  },
  {
    title: "Tutoring Services",
    description:
      "Access one-on-one tutoring and group sessions from qualified tutors to improve performance.",
    link: "#",
    linkText: "Find a tutor →",
  },
  {
    title: "Learning Resources",
    description:
      "Access our digital library, online learning platforms, and research databases to support your academic success.",
    link: "#",
    linkText: "Explore more →",
  },
];
