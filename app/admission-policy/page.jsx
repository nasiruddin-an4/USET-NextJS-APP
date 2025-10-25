import React from "react";
import AdmissionsPage from "./AdmissionPolicyClient";

export const metadata = {
  title: "Admission Process | USET",
  description:
    "Learn more about the University of Science, Education & Technology — our mission, vision, history, facilities, leadership, and location.",
};

function page() {
  return (
    <div>
      <AdmissionsPage />
    </div>
  );
}

export default page;
