import { useState } from "react";
import Popover from "./Popover";

export default function Generalinfo({
  firstName,
  jobtitle,
  country,
  dateOfBirth,
  primaryLanguage,
  gender,
}) {
  const [openPopover, setOpenPopover] = useState(false);
  return (
    <>
      <div className="lg:grid lg:grid-flow-col lg:grid-cols-2 mx-5">
        <div className="flex p-4 bg-white dark:bg-gray-800 border-0 rounded-xl my-4 mr-2">
          <div>
            <h1 className="flex items-center font-bold text-2xl text-gray-900 dark:text-white">
              Profile picture
              {/* '?' symbol */}
              <button
                type="button"
                onMouseEnter={() => setOpenPopover(true)}
                onMouseLeave={() => setOpenPopover(false)}
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
            {openPopover && (
              <Popover data="You can change your profile photo here, you can upload a new photo from your computer." />
            )}
            <img
              // src="https://flowbite.com/application-ui/demo/images/users/joseph-mcfall.png"
              src="https://randomuser.me/api/portraits/men/45.jpg"
              className="rounded-full h-24 w-24 mt-6"
            />
          </div>
          {/* name and work name */}
          <div className="my-11">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300">
              {firstName}
            </span>
            <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
              meet
            </h1>
            <h3 className="font-normal mt-2 text-xl dark:text-gray-400">
              {jobtitle}
            </h3>
          </div>
        </div>
        {/* gernal inormation */}
        <div className="grid grid-flow-col lg:grid-rows-2 lg:grid-cols-2 md:grid-rows-2 md:grid-cols-2 grid-rows-4 grid-cols-1 p-4 bg-white dark:bg-gray-800 border-0 rounded-xl my-4 ml-2">
          {/* Country */}
          <div className="flex-col justify-center mr-2">
            <label className="profile-label-tag">Country</label>
            <input
              className="profile-input-tag"
              type="text"
              value={country}
              readOnly
            />
          </div>
          {/* Date of brith */}
          <div className="flex-col justify-center mr-2">
            <label className="profile-label-tag">Date of brith</label>
            <input
              className="profile-input-tag"
              type="text"
              value={dateOfBirth}
              readOnly
            />
          </div>
          {/* Language */}
          <div className="flex-col justify-center mr-2">
            <label className="profile-label-tag">Language</label>
            <input
              className="profile-input-tag"
              type="text"
              value={primaryLanguage}
              readOnly
            />
          </div>
          {/* Gender */}
          <div className="flex-col justify-center mr-2">
            <label className="profile-label-tag">Gender</label>
            <input
              className="profile-input-tag"
              type="text"
              value={gender}
              readOnly
            />
          </div>
        </div>
      </div>
    </>
  );
}
