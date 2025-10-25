import React from "react";
import AdmissionPage from "./admissionClient";

export const metadata = {
  title: "Admission | USET",
  description:
    "Learn more about the University of Science, Education & Technology — our mission, vision, history, facilities, leadership, and location.",
};

function page() {
  return (
    <div>
      <AdmissionPage />
    </div>
  );
}

export default page;
