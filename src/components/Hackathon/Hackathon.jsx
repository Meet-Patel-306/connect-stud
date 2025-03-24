import Navbar from "../Navbar";
import HackathonCard from "./HackathonCard";
import HackathonForm from "./RegisterHackathon/HackathonForm.jsx";
export default function Hackthone() {
  return (
    <>
      <Navbar />
      <HackathonCard />
      <h1 className="text-3xl font-bold underline text-red-600 dark:text-gray-950">
        meet
      </h1>
      <HackathonForm />
    </>
  );
}
