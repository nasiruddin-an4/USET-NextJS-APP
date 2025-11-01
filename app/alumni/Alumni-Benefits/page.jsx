import React from "react";
import AlumniBenefits from "./AlumniBenefits";
import AlumniCommittee from "./AlumniCommittee";

export const metadata = {
  title: "Alumni Benefits | USET",
  description:
    "Explore the various benefits and opportunities available to our alumni.",
};

function page() {
  return (
    <div>
      <AlumniBenefits />
      <AlumniCommittee />
    </div>
  );
}

export default page;
