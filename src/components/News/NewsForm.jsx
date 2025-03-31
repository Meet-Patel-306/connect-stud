import React, { useState } from "react";

export default function NewsCard() {
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("News Submitted:", { category, title, content });

    // Clear inputs
    setCategory("");
    setTitle("");
    setContent("");

    handleCloseForm();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 transition duration-300 ease-in-out"
        onClick={handleButtonClick}
      >
        <div className="w-[50px] h-[50px] flex flex-col items-center justify-center text-2xl font-bold text-gray-900 dark:text-white rounded-full">
          📰 <span className="text-xs font-semibold mt-[-2px]">Add</span>
        </div>
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center px-4">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Add New News
            </h2>
            <form onSubmit={handleSubmit}>
              {/* News Category */}
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  News Category
                </label>
                <input
                  type="text"
                  id="category"
                  placeholder="Enter category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* News Title */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>

              {/* News Content */}
              <div className="mb-4">
                <label htmlFor="content" className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Content
                </label>
                <textarea
                  id="content"
                  placeholder="Enter content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-400 dark:bg-gray-700 text-white rounded-lg"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
