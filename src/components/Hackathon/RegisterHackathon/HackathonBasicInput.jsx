import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getHackathonRegister } from "../../../features/hackathonRegisterSlice";

export default function HackathonBasicInput() {
  const dispatch = useDispatch();
  const [subjects, setSubjects] = useState([]);
  const [inputsubjectValue, setInputsubjectValue] = useState("");
  useEffect(() => {
    dispatch(getHackathonRegister({ name: "subjects", value: subjects }));
  }, [subjects]);

  return (
    <>
      <div>
        {/*Hackathon name */}
        <label
          htmlFor="hackathon_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Hackathon Name<span className="required-input">*</span>
        </label>
        <input
          type="text"
          name="hackathonName"
          id="hackathon_name"
          className="input-tag"
          placeholder="John"
          autoComplete="off"
          onChange={(e) => {
            dispatch(
              getHackathonRegister({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          required
        />
      </div>
      <div>
        {/*organizer name */}
        <label
          htmlFor="organizer_name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Organizer Name<span className="required-input">*</span>
        </label>
        <input
          type="text"
          name="organizerName"
          id="organizer_name"
          className="input-tag"
          placeholder="John"
          autoComplete="off"
          onChange={(e) => {
            dispatch(
              getHackathonRegister({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          required
        />
      </div>
      <div>
        {/*organizer email */}
        <label
          htmlFor="organizer_email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Organizer Email<span className="required-input">*</span>
        </label>
        <input
          type="email"
          name="organizerEmail"
          id="organizer_email"
          className="input-tag"
          placeholder="John"
          autoComplete="off"
          onChange={(e) => {
            dispatch(
              getHackathonRegister({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          required
        />
      </div>
      <div>
        {/* Hackathon location */}
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Hackathon Location<span className="required-input">*</span>
        </label>
        <input
          type="text"
          name="hackathonLocation"
          id="location"
          className="input-tag"
          placeholder="John"
          autoComplete="off"
          onChange={(e) => {
            dispatch(
              getHackathonRegister({
                name: e.target.name,
                value: e.target.value,
              })
            );
          }}
          required
        />
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <div>
          {/* Hackathon start date */}
          <label
            htmlFor="startDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hackathon Start Date<span className="required-input">*</span>
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
            onChange={(e) => {
              dispatch(
                getHackathonRegister({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
            required
          />
        </div>
        <div>
          {/* Hackathon end date */}
          <label
            htmlFor="endDate"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hackathon End Date<span className="required-input">*</span>
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
            onChange={(e) => {
              dispatch(
                getHackathonRegister({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
            required
          />
        </div>
      </div>
      {/* Hackathon Type */}
      <div className="mt-2">
        <label
          htmlFor="online"
          className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Hackathon Type<span className="required-input">*</span>
        </label>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-4">
        <div className="flex items-center ps-4 dark:border-gray-700">
          <input
            id="online"
            type="radio"
            value="online"
            name="type"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            onChange={(e) => {
              dispatch(
                getHackathonRegister({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
          />
          <label
            htmlFor="online"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Online
          </label>
        </div>
        <div className="flex items-center ps-4 dark:border-gray-700">
          <input
            id="offline"
            type="radio"
            value="offline"
            name="type"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
            onChange={(e) => {
              dispatch(
                getHackathonRegister({
                  name: e.target.name,
                  value: e.target.value,
                })
              );
            }}
          />
          <label
            htmlFor="offline"
            className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Offline
          </label>
        </div>
      </div>
      <div>
        <label
          htmlFor="subjects"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          subjects
        </label>
        <div className="flex">
          <input
            type="text"
            id="subjects"
            className="block w-full px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="subjects"
            value={inputsubjectValue}
            onChange={(e) => setInputsubjectValue(e.target.value)}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-5 px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              if (inputsubjectValue && !subjects.includes(inputsubjectValue)) {
                setSubjects([...subjects, inputsubjectValue]);
                setInputsubjectValue("");
              }
            }}
          >
            Add
          </button>
        </div>
        {/* display subject */}
        <div className="flex flex-wrap my-2">
          {subjects && subjects.length > 0 ? (
            subjects.map((subject, index) => {
              return (
                <span
                  className="flex justify-center bg-gray-100 text-gray-800 text-xs font-medium me-2 my-1 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300"
                  key={index}
                >
                  {subject}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 ml-2 fill-gray-800"
                    viewBox="0 0 384 512"
                    onClick={() => {
                      const updateSubjects = subjects.filter(
                        (x, i) => i != index
                      );
                      setSubjects(updateSubjects);
                    }}
                  >
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                  </svg>
                </span>
              );
            })
          ) : (
            <p className="hidden"></p>
          )}
        </div>
      </div>
    </>
  );
}
