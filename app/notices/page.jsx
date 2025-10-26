import React from "react";
import NoticeClient from "./NoticeClient";

export const metadata = {
  title: "Notices | USET",
  description:
    "Learn more about the University of Science, Education & Technology — our mission, vision, history, facilities, leadership, and location.",
};

function page() {
  return (
    <div>
      <NoticeClient />
    </div>
  );
}

export default page;
