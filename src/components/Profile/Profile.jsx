import { useState } from "react";
import Generalinfo from "./Generalinfo";
import Popover from "./Popover";
import Parsonalinfo from "./Parsonalinfo";
export default function Profile() {
  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // const toggleDropdown = () => {
  //     setDropdownVisible(!isDropdownVisible);
  // };
  const [openPopover3, setOpenPopover3] = useState(false);
  return (
    <>
      {/* <div classNameName="bg-white rounded-lg shadow-xl pb-8 lg:mx-16 md:mx-10 mx-5">
                <div classNameName="w-full h-[250px]">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" classNameName="w-full h-full rounded-tl-lg rounded-tr-lg" />
                </div>
                <div classNameName="flex flex-col items-center -mt-20">
                    <img src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" classNameName="w-40 border-4 border-white rounded-full " />
                    <div classNameName="flex items-center space-x-2 mt-2">
                        <p classNameName="text-2xl">Amanda Ross</p>
                        <span classNameName="bg-blue-500 rounded-full p-1" title="Verified">
                            <svg xmlns="http://www.w3.org/2000/svg" classNameName="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                    </div>
                    <p classNameName="text-gray-700">Senior Software Engineer at Tailwind CSS</p>
                    <p classNameName="text-sm text-gray-500">New York, USA</p>
                </div>
                <div classNameName="flex-1 flex flex-col items-center lg:justify-center justify-end px-8 mt-2">
                    <div classNameName="flex items-center space-x-4 mt-2">
                        <button classNameName="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                            </svg>
                            <span>Connect</span>
                        </button>
                        <button classNameName="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                            <svg xmlns="http://www.w3.org/2000/svg" classNameName="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                            </svg>
                            <span>Message</span>
                        </button>
                    </div>
                </div>
            </div> */}
      <Generalinfo />
      <Parsonalinfo />
      <div className="mx-5 p-5 border-0 rounded-xl my-4 bg-white dark:bg-gray-800">
        <div>
          <h1 className="flex items-center font-bold text-2xl text-gray-900 dark:text-white">
            Profile picture
            {/* '?' symbol */}
            <button
              type="button"
              onMouseEnter={() => setOpenPopover3(true)}
              onMouseLeave={() => setOpenPopover3(false)}
            >
              <svg
                className="w-4 h-4 ms-2 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Show information</span>
            </button>
            {/* popover */}
          </h1>
          {openPopover3 && (
            <Popover data="This information is presented on your public profile, please specify carefully what you want to display." />
          )}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        {/* job */}
        <div className="ml-2 grid grid-flow-row grid-rows-1 lg:grid-cols-2 md:grid-cols-2">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0
              </h3>
              <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2022
              </span>
              <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {" "}
                -{" "}
              </span>
              <span className=" mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023
              </span>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0
              </h3>
              <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2022
              </span>
              <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {" "}
                -{" "}
              </span>
              <span className=" mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023
              </span>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Flowbite Application UI v2.0.0
              </h3>
              <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2022
              </span>
              <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {" "}
                -{" "}
              </span>
              <span className=" mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2023
              </span>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
