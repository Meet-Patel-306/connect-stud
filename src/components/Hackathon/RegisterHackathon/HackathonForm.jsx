import HackathonBasicInput from "./HackathonBasicInput";
import HackathonTeamInput from "./HackathonTeamInput";
import HackathonAboutInput from "./HackathonAboutInput";
import { useDispatch, useSelector } from "react-redux";
import { getHackathonRegister } from "../../../features/hackathonRegisterSlice";

export default function HackathonForm() {
  const dispatch = useDispatch();
  const hackathonRegister = useSelector((state) => state.hackathonRegister);
  return (
    <>
      <form className="mx-5 md:mx-20 lg:mx-72 my-5 bg-white shadow dark:bg-gray-800 p-5 rounded-lg">
        <HackathonBasicInput />
        <HackathonTeamInput />
        <HackathonAboutInput />
        <div className="m-3 flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              console.log(hackathonRegister);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
