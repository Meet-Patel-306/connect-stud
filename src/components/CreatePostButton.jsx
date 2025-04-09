import { useState } from "react";

export default function CreatePostButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed end-6 bottom-6 group">
      {/* Floating Action Buttons */}
      <div
        className={`flex flex-col items-center ${
          open ? "mb-4 space-y-2" : "hidden"
        }`}
      >
        {/* hackathon */}
        <button className="w-[52px] h-[52px] bg-gray-600 text-white rounded-full shadow border">
          <a href="/hackathon/post">
            <i className="fa-solid fa-code"></i>
          </a>
        </button>
        {/* News */}
        <button className="w-[52px] h-[52px] bg-gray-600 text-white rounded-full shadow border">
          <a href="/news/post">
            <i className="fa-solid fa-newspaper"></i>
          </a>
        </button>
      </div>
      {/* Main FAB */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
      >
        <svg
          className={`w-5 h-5 transition-transform ${open ? "rotate-45" : ""}`}
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </button>
    </div>
  );
}
