import Navbar from "../Navbar";
import HackthoneCard from "./HackthoneCard";
export default function Hackthone() {
  return (
    <>
      <Navbar />
      <HackthoneCard />
      <h1 className="text-3xl font-bold underline text-red-600 dark:text-gray-950">
        meet
      </h1>
    </>
  );
}
