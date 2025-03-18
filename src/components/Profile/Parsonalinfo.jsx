import { useState } from "react";
import Popover from "./Popover";

export default function Parsonalinfo({
  firstName,
  lastName,
  biography,
  jobtitle,
  portfolio,
  github,
  linkedin,
  instagram,
  primaryLanguage,
  languages,
  skills,
  email,
  phoneNo,
}) {
  const [openPopover2, setOpenPopover2] = useState(false);
  let allLanguages = primaryLanguage;
  for (let index = 0; index < languages.length; index++) {
    allLanguages += ",";
    allLanguages += languages[index];
  }
  return (
    <>
      {/* parsonal info */}
      <div className="mx-5 p-5 border-0 rounded-xl my-4 bg-white dark:bg-gray-800 ">
        <div>
          <h1 className="flex items-center font-bold text-2xl text-gray-900 dark:text-white">
            Profile picture
            {/* '?' symbol */}
            <button
              type="button"
              onMouseEnter={() => setOpenPopover2(true)}
              onMouseLeave={() => setOpenPopover2(false)}
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
          {openPopover2 && (
            <Popover data="This information is presented on your public profile, please specify carefully what you want to display." />
          )}
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="grid grid-flow-row grid-rows-1 lg:grid-cols-2 md:grid-cols-2">
          {/* full name and job title etc */}
          <div>
            <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
              Full Name
            </h3>
            <h3 className="font-semibold h-2 mx-2 mt-4 mb-8 text-md text-slate-400">
              {firstName + " " + lastName}
            </h3>
            {biography.length > 0 && (
              <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
                Biography
              </h3>
            )}
            {biography.length > 0 && (
              <h3 className="font-semibold  mx-2 mt-4 mb-8 text-md text-slate-400">
                {biography}
              </h3>
            )}
            <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
              Social
            </h3>
            <h3 className="font-semibold h-2 mx-2 mt-5 mb-8 text-md text-slate-400">
              <div className="flex">
                {instagram.length > 0 && (
                  <a className="mr-3" href={instagram}>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#94a3b8"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </a>
                )}
                {linkedin.length > 0 && (
                  <a className="mr-3" href={linkedin}>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#94a3b8"
                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                      />
                    </svg>
                  </a>
                )}
                {github.length > 0 && (
                  <a className="mr-3" href={github}>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 496 512"
                    >
                      <path
                        fill="#94a3b8"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      />
                    </svg>
                  </a>
                )}
                {portfolio.length > 0 && (
                  <a className="mr-3" href={portfolio} target="_blank">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#94a3b8"
                        d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </h3>
            <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
              Job Title
            </h3>
            <h3 className="flex font-semibold h-2 mx-2 mt-4 mb-8 text-md text-slate-400">
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#94a3b8"
                  d="M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 0 32 0 352-256 0 0-352 0-32zM64 96l32 0 0 384-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64zM448 480l-32 0 0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64z"
                />
              </svg>
              {jobtitle}
            </h3>
          </div>
          {/* email id and phone no etc */}
          <div>
            <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
              Email Adress
            </h3>
            <h3 className="font-semibold h-2 mx-2 mt-4 mb-8 text-md text-slate-400">
              {email}
            </h3>
            <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
              Phone Number
            </h3>
            <h3 className="font-semibold h-2 mx-2 mt-4 mb-8 text-md text-slate-400">
              {phoneNo}
            </h3>
            <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
              Skill
            </h3>
            <h3 className="font-semibold  mx-2 mt-4 mb-8 text-md text-slate-400">
              <div className="flex flex-wrap">
                {skills &&
                  skills.length > 0 &&
                  skills.map((skill, index) => {
                    return (
                      <span
                        className="bg-gray-100 text-gray-800 text-xs font-medium me-2 my-1 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300"
                        key={index}
                      >
                        {skill}
                      </span>
                    );
                  })}
              </div>
            </h3>
            <h3 className="font-semibold h-2 mx-2 text-md text-gray-900 dark:text-white">
              Languages
            </h3>
            <h3 className="font-semibold h-2 mx-2 mt-4 mb-8 text-md text-slate-400">
              {}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
