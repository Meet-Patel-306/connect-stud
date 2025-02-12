import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";

export default function EducationInput() {
  const [startYearValue, setStartYearValue] = useState("");
  const [endYearValue, setEndYearValue] = useState("");
  const [collegeValue, setCollegeValue] = useState("");
  const [courseValue, setCourseValue] = useState("");
  const [colleges, setColleges] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegisterData({ name: "colleges", value: colleges }));
  }, [colleges]);
  return (
    <>
      <div>
        <div className="grid gap-3 mb-6 grid-cols-2">
          <div>
            <label
              htmlFor="startYear"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Start Year
            </label>
            <input
              type="number"
              min={1900}
              max={2099}
              id="startYear"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="2023"
              value={startYearValue}
              onChange={(e) => setStartYearValue(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="endYear"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              End Year
            </label>
            <input
              type="number"
              min={1900}
              max={2099}
              id="endYear"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="2027"
              value={endYearValue}
              onChange={(e) => setEndYearValue(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-3 mb-6 grid-cols-2">
          <div>
            <label
              htmlFor="college"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              College
            </label>
            <input
              type="text"
              name="college"
              id="college"
              className="block w-full px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="IIIT Surat"
              value={collegeValue}
              onChange={(e) => setCollegeValue(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="course"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Course
            </label>
            <input
              type="text"
              name="course"
              id="course"
              className="block w-full px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Computer Science & Engineering"
              value={courseValue}
              onChange={(e) => setCourseValue(e.target.value)}
            />
          </div>
        </div>
        <button
          className="h-10 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => {
            e.preventDefault();
            if (startYearValue && endYearValue && collegeValue && courseValue) {
              const newCollege = {
                startYear: startYearValue,
                endYear: endYearValue,
                college: collegeValue,
                course: courseValue,
              };
              if (
                !colleges.some(
                  (college) =>
                    college.startYear == newCollege.startYear &&
                    college.endYear == newCollege.endYear &&
                    college.course == newCollege.course
                )
              ) {
                setColleges((preCollege) => [...preCollege, newCollege]);
              }
              setStartYearValue("");
              setCollegeValue("");
              setCourseValue("");
              setEndYearValue("");
            }
          }}
        >
          Add
        </button>
        <div className="my-4">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {colleges && colleges.length > 0 ? (
              colleges.map((college, index) => {
                return (
                  <div
                    className="flex justify-between items-center"
                    key={index}
                  >
                    <li className="mb-2 ms-6" key={index}>
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3  dark:bg-blue-900">
                        <svg
                          className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="#93c5eb"
                            d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160l0 8c0 13.3 10.7 24 24 24l400 0c13.3 0 24-10.7 24-24l0-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224l-64 0 0 196.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 224l-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                          />
                        </svg>
                      </span>
                      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {college.college}
                      </h3>
                      <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {college.startYear}
                      </span>
                      <span className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {" "}
                        -{" "}
                      </span>
                      <span className=" mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                        {college.endYear}
                      </span>
                      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        {college.course}
                      </p>
                    </li>
                    <div>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 ml-2 fill-gray-800 dark:fill-slate-100"
                          viewBox="0 0 384 512"
                          onClick={() => {
                            const updatedColleges = colleges.filter(
                              (x, i) => i != index
                            );
                            setColleges(updatedColleges);
                          }}
                        >
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <li className="hidden"></li>
            )}
          </ol>
        </div>
      </div>
    </>
  );
}
