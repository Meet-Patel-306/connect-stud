import React from "react";

const NewsCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="flex">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Blog"
          className="w-1/3 object-cover"
        />
        <div className="p-4 flex flex-col justify-between w-2/3">
          <div>
            <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
              Health
            </span>
            <p className="text-gray-500 text-sm mt-1">23 Aug 2023</p>
            <h3 className="text-lg font-semibold mt-2">
              This is a best Blogs card for your business template.
            </h3>
          </div>
          <div className="flex items-center justify-between mt-4">
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
            <button className="px-4 py-2 font-medium text-blue-500 flex items-center">
              Read More <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
