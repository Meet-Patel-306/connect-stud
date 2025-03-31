import React from "react";

export default function NewsCard() {
  return (
    <>
      <div className="max-w-2xl md:max-w-[900px] lg:max-w-[1300px] bg-white dark:bg-gray-800 text-black dark:text-white p-2 mx-auto shadow-xl rounded-3xl overflow-hidden mx-5">
        <div class="max-w-xs">
          <a href="#">
            <img
              src="../../../public/360_F_210545946_H8K0CJih9ToRMqbBczgr2BLWJYcrNb1V.jpg"
              alt="tiger"
              className="w-80 sm:w-80 md:w-64 lg:w-64 rounded-lg object-auto mx-auto lg:mx-0 mb-5"
            />
          </a>

          <div className="p-4 flex flex-col justify-between w-full ml-0 pl-0 text-left">
            <div className="flex items-center gap-2 mb-2 self-start">
              <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                Health
              </span>
              <span className="text-gray-500 text-sm">23 Aug 2023</span>
            </div>

            <div className="flex items-center justify-start">
              <div className="flex items-center gap-2">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">Fitbit Incorporation</p>
                  <p className="text-xs text-gray-500">San Diego, California</p>
                </div>
              </div>
            </div>
          </div>
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">Our first office</a>
          </h2>
          <p class="text-gray-500 dark:text-gray-400">
            Over the past year, Volosoft has undergone many changes! After
            months of preparation.
          </p>
          <button className="font-medium text-blue-500 flex items-center text-[12px] md:text-sm underline underline-offset-1">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}
