import AlumniClient from "./AlumniClient";

export const metadata = {
  title: "Alumni | USET",
  description:
    "Learn more about the University of Science, Education & Technology — our mission, vision, history, facilities, leadership, and location.",
};

const AlumniPage = () => {
  return (
    <div>
      <AlumniClient />
    </div>
  );
};

export default AlumniPage;
