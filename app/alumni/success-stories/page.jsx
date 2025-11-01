import React from "react";
import AlumniSuccessStory from "./AlumniSuccessStory";

export const metadata = {
  title: "Alumni Success Stories - DIU Alumni",
  description:
    "Discover inspiring journeys of our alumni who turned their dreams into success through dedication, innovation, and the strong foundation built at DIU.",
};

function page() {
  return (
    <div>
      <AlumniSuccessStory />
    </div>
  );
}

export default page;
