import React from "react";
import StudentLifePage from "./StudentLife";

export const metadata = {
  title: "Life at USET  | USET",
  description:
    "Discover USET’s industry-focused academic programs and comprehensive curriculum designed for practical skill development.",
};

function page() {
  return (
    <div>
      <StudentLifePage />
    </div>
  );
}

export default page;
