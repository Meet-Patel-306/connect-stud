import { useParams } from "react-router";
import { useSelector } from "react-redux";
import JoinHackathon from "./JoinHackathon";
import { useEffect, useState } from "react";
import { host } from "../../APIs/APIRoutes";
import axios from "axios";

export default function HackthoneBlog() {
  const { id } = useParams();
  const [hackathon, setHackathon] = useState(null);
  let hackathonData = useSelector((state) =>
    state.hackathonData.hackathons.find((hackathon) => hackathon._id === id)
  );
  useEffect(() => {
    const fetchHackathon = async () => {
      const res = await axios.get(`${host}/api/hackathon/${id}`);
      setHackathon(res.data.message);
    };
    if (!hackathon && !hackathonData) {
      fetchHackathon();
    } else {
      setHackathon(hackathonData);
    }
  }, [id]);
  console.log(hackathon);
  const [closeButton, setCloseButton] = useState(false);
  return (
    <>
      {hackathon && (
        <div className="mx-5 md:mx-16 lg:mx-52 my-5">
          {/* hackathon basic info */}
          <div className="grid grid-flow-row grid-cols-1 bg-white shadow dark:bg-gray-800 p-5 rounded-lg">
            {/* image */}
            <div>
              <img src={hackathon.hackathonImage} className="w-20 h-20" />
            </div>
            {/* name */}
            <h1 className="my-3 text-4xl font-semibold dark:text-white ">
              {hackathon.hackathonName}
            </h1>
            {/* basic info */}
            <div className="grid grid-flow-row grid-cols-1 text-gray-600 dark:text-slate-400">
              <div className="flex items-center mt-2">
                <i className="fa-solid fa-building-columns mr-2"></i>
                <h1 className="text-sm">{hackathon.organizerName}</h1>
              </div>
              <div className="flex items-center mt-2">
                <i className="fa-solid fa-location-dot mr-2"></i>
                <h1 className="text-sm">{hackathon.type}</h1>
              </div>
              <div className="flex items-center mt-2">
                <i className="fa-regular fa-calendar mr-2"></i>
                <h1 className="text-sm">
                  {hackathon.startDate} - {hackathon.endDate}
                </h1>
              </div>
              <div className="flex items-center mt-2">
                <i className="fa-solid fa-globe mr-2"></i>
                <h1 className="text-sm">{hackathon.registerLink}</h1>
              </div>
            </div>
            <div className="my-2 ">
              <button
                type="button"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setCloseButton(true)}
              >
                Apply
              </button>
            </div>
          </div>
          <JoinHackathon
            closeButton={closeButton}
            setCloseButton={setCloseButton}
            id={id}
          />
          {/* total register,total prize, team size,start date  */}
          <div className="grid grid-flow-rows grid-cols-1 md:grid-cols-4 my-3 rounded-lg bg-white shadow dark:bg-gray-800 p-2">
            <div className="flex items-center my-2 mx-2">
              <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="mx-2">
                <p className="text-gray-600 dark:text-slate-400">Registered</p>
                <p className="dark:text-white">111</p>
              </div>
            </div>
            <div className="flex items-center my-2 mx-2">
              <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
                <i className="fa-solid fa-people-group"></i>
              </div>
              <div className="mx-2">
                <p className="text-gray-600 dark:text-slate-400">Team Size</p>
                <p className="dark:text-white">{hackathon.teamSuze}</p>
              </div>
            </div>
            <div className="flex items-center my-2 mx-2">
              <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
                <i className="fa-solid fa-trophy"></i>
              </div>
              <div className="mx-2">
                <p className="text-gray-600 dark:text-slate-400">Prize Pool</p>
                <p className="dark:text-white">
                  {hackathon.winner +
                    hackathon.firstRunnerUp +
                    hackathon.secondRunnerUp}
                </p>
              </div>
            </div>
            <div className="flex items-center my-2 mx-2">
              <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
                <i className="fa-regular fa-calendar"></i>
              </div>
              <div className="mx-2">
                <p className="text-gray-600 dark:text-slate-400">Deadline</p>
                <p className="dark:text-white">111</p>
              </div>
            </div>
          </div>
          {/* hackathon about */}
          <div
            className="my-3 rounded-lg dark:text-white bg-white shadow dark:bg-gray-800 p-2 tiptop"
            dangerouslySetInnerHTML={{ __html: hackathon.hackathonAbout }}
          ></div>
          {/* prize */}
          <div className="rounded-lg bg-white shadow dark:bg-gray-800 py-2">
            <div className="my-3 mx-2 text-xl dark:text-white border-l-4 border-l-blue-600 rounded-l-md pl-3 ">
              Prize
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white shadow dark:bg-gray-800 py-3 border dark:border-slate-700 mx-4 mb-3">
              <div className="pl-5">
                <h1 className="text-xl dark:text-white">Winner</h1>
                <h1 className="text-3xl font-bold dark:text-white">
                  {hackathon.winner}$
                </h1>
              </div>
              <div className="bg-blue-200 text-blue-800 w-16 h-16 mr-5 flex justify-center items-center rounded-xl">
                <i className="fa-solid fa-ranking-star text-4xl"></i>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white shadow dark:bg-gray-800 py-3 border dark:border-slate-700 mx-4 my-3">
              <div className="pl-5">
                <h1 className="text-xl dark:text-white">First Runner Up</h1>
                <h1 className="text-3xl font-bold dark:text-white">
                  {hackathon.firstRunnerUp}$
                </h1>
              </div>
              <div className="bg-blue-200 text-blue-800 w-16 h-16 mr-5 flex justify-center items-center rounded-xl">
                <i className="fa-solid fa-ranking-star text-4xl"></i>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-white shadow dark:bg-gray-800 py-3 border dark:border-slate-700 mx-4 my-3">
              <div className="pl-5">
                <h1 className="text-xl dark:text-white">Second Runner Up</h1>
                <h1 className="text-3xl font-bold dark:text-white">
                  {hackathon.secondRunnerUp}$
                </h1>
              </div>
              <div className="bg-blue-200 text-blue-800 w-16 h-16 mr-5 flex justify-center items-center rounded-xl">
                <i className="fa-solid fa-ranking-star text-4xl"></i>
              </div>
            </div>
          </div>
          {/* Contact the organisers */}
          <div className="rounded-lg bg-white shadow dark:bg-gray-800">
            <h1 className="my-3 mx-2 pt-3 text-xl dark:text-white">
              Contact the organisers
            </h1>
            <div className="flex items-center mb-2 p-2">
              <div className="text-xl rounded-lg bg-blue-200 text-blue-800 w-10 h-10 flex justify-center items-center">
                <i className="fa-solid fa-address-book"></i>
              </div>
              <div className="mx-2">
                <p className="dark:text-white text-sm">Meet Patel</p>
                <p className="dark:text-white text-sm">MeetPatel@gamil.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
