import React from "react";
import AcademicsPage from "./AcademicCalender";

export const metadata = {
  title: "Academic Calendar  | USET",
  description:
    "Discover USET’s industry-focused academic programs and comprehensive curriculum designed for practical skill development.",
};

function page() {
  return (
    <div>
      <AcademicsPage />
    </div>
  );
}

export default page;
