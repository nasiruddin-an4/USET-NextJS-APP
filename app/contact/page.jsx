import { Contact } from "lucide-react";
import React from "react";
import ContactClient from "./contactClient";

export const metadata = {
  title: "Contact | USET",
  description:
    "Learn more about the University of Science, Education & Technology — our mission, vision, history, facilities, leadership, and location.",
};

function page() {
  return (
    <div>
      <ContactClient />
    </div>
  );
}

export default page;
