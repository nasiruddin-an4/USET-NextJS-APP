import React from "react";
import AboutPage from "./aboutClient";

export const metadata = {
  title: "About Us | USET",
  description:
    "Learn more about the University of Science, Education & Technology — our mission, vision, history, facilities, leadership, and location.",
};

function page() {
  return (
    <div>
      <AboutPage />
    </div>
  );
}

export default page;
