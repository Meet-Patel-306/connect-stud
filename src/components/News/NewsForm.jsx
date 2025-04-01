import React, { useState } from "react";

export default function NewsCard() {
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [location, setLocation] = useState("");

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("News Submitted:", { category, title, content, image, imageFile, location });

    // Clear inputs
    setCategory("");
    setTitle("");
    setContent("");
    setImage("");
    setImageFile(null);
    setLocation("");

    handleCloseForm();
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-900 transition duration-300 ease-in-out"
        onClick={handleButtonClick}
      >
        <div className="w-[50px] h-[50px] flex flex-col items-center justify-center text-2xl font-bold text-gray-900 dark:text-white rounded-full">
          📰 <span className="text-xs font-semibold mt-[-2px]">Add</span>
        </div>
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center px-4">
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-[500px] lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Add New News
            </h2>
            <button
              type="button"
              className="absolute top-4 right-4 px-2 py-1 bg-gray-400 dark:bg-red-600 text-white rounded-lg"
              onClick={handleCloseForm}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">News Category<span className="required-input">*</span></label>
                <input type="text" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Title<span className="required-input">*</span></label>
                <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" required />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Content<span className="required-input">*</span></label>
                <textarea placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" required></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Image URL</label>
                <input type="text" placeholder="Enter image URL" value={image} onChange={(e) => setImage(e.target.value)} className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Upload Image</label>
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Location</label>
                <input type="text" placeholder="Enter location" value={location} onChange={(e) => setLocation(e.target.value)} className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white" />
              </div>


              <div className="flex justify-end gap-4">
                <button type="button" className="px-4 py-2 bg-red-400 dark:bg-red-600 text-white rounded-lg" onClick={() => { setCategory(""); setTitle(""); setContent(""); setImage(""); setImageFile(null); setLocation(""); }}>Reset</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}