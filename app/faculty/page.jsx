import React from "react";
import FacultyDirectory from "./facultyDirectory";

export const metadata = {
  title: "Faculty Directory  | USET",
  description:
    "Discover USET’s industry-focused academic programs and comprehensive curriculum designed for practical skill development.",
};

function page() {
  return (
    <div>
      <FacultyDirectory />
    </div>
  );
}

export default page;
