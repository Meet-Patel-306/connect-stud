import { useState } from "react";
import { Link } from "react-router";
import Popover from "../Profile/Popover.jsx";

export default function HackthoneCard({
  hackathonName,
  organizerName,
  hackathonLocation,
  startDate,
  endDate,
  type,
  subjects,
  winner,
  firstRunnerUp,
  secondRunnerUp,
  id,
}) {
  const [hackathonPopover, setHackathonPopover] = useState(false);
  return (
    <>
      <div className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-4xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 dark:bg-gray-800 dark:text-slate-100">
        <div className="min-h-[280px] h-full">
          <img
            src="https://readymadeui.com/cardImg.webp"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">{hackathonName}</h3>
          <p>{organizerName}</p>
          {/* location and date */}
          <div className="grid grid-flow-row grid-cols-2 items-center">
            <h1 className="flex mt-2 text-sm text-slate-400 leading-relaxed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-slate-400"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <p className="m-2">{hackathonLocation}</p>
            </h1>
            <h1 className="flex mt-2 text-sm  text-slate-400 leading-relaxed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-slate-400"
                viewBox="0 0 448 512"
              >
                <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l80 0 0 56-80 0 0-56zm0 104l80 0 0 64-80 0 0-64zm128 0l96 0 0 64-96 0 0-64zm144 0l80 0 0 64-80 0 0-64zm80-48l-80 0 0-56 80 0 0 56zm0 160l0 40c0 8.8-7.2 16-16 16l-64 0 0-56 80 0zm-128 0l0 56-96 0 0-56 96 0zm-144 0l0 56-64 0c-8.8 0-16-7.2-16-16l0-40 80 0zM272 248l-96 0 0-56 96 0 0 56z" />
              </svg>
              <p className="m-2">
                {startDate} to {endDate}
              </p>
            </h1>
          </div>
          {/* online and prize */}
          <div className="grid grid-flow-row grid-cols-2 items-center">
            <h1 className="flex mt-2 text-sm text-slate-400 leading-relaxed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-slate-400"
                viewBox="0 0 512 512"
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
              </svg>
              <p className="m-2">{type}</p>
            </h1>
            <h1 className="flex mt-2 text-sm  text-slate-400 leading-relaxed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-slate-400"
                viewBox="0 0 576 512"
              >
                <path d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z" />
              </svg>
              <p className="m-2">{winner + firstRunnerUp + secondRunnerUp}$</p>
            </h1>
          </div>
          <div className="flex justify-start items-center m-0">
            <h1 className="flex mt-2 text-sm text-slate-400 leading-relaxed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-gray-500"
                viewBox="0 0 512 512"
                onMouseEnter={() => setHackathonPopover(true)}
                onMouseLeave={() => setHackathonPopover(false)}
              >
                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
              </svg>
              {hackathonPopover && (
                <Popover data="You can join hackathon using this link." />
              )}
              <p className="m-2">Managed by {organizerName}</p>
            </h1>
          </div>
          <div className="flex flex-wrap">
            {subjects &&
              subjects.length > 0 &&
              subjects.map((subject, index) => {
                return (
                  <span
                    className="bg-gray-100 text-gray-800 text-xs font-medium me-2 my-1 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300"
                    key={index}
                  >
                    {subject}
                  </span>
                );
              })}
          </div>
          <Link to={`/hackathon/${id}`}>
            <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Apply
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
