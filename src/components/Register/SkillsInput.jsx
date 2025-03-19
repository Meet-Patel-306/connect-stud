import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";

export default function skillsInput() {
  const [skills, setSkills] = useState([]);
  const [inputSkillValue, setInputSkillValue] = useState("");

  // get register data slice
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.registerData);
  useEffect(() => {
    dispatch(getRegisterData({ name: "skills", value: skills }));
  }, [skills]);

  return (
    <>
      {/* skills */}
      <div>
        <label
          htmlFor="skills"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          skills
        </label>
        <div className="flex">
          <input
            type="text"
            id="skills"
            className="block w-full px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Skills"
            value={inputSkillValue}
            onChange={(e) => setInputSkillValue(e.target.value)}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-5 px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              if (inputSkillValue && !skills.includes(inputSkillValue)) {
                setSkills([...skills, inputSkillValue]);
                setInputSkillValue("");
              }
            }}
          >
            Add
          </button>
        </div>
        {/* display skill */}
        <div className="flex flex-wrap my-2">
          {skills && skills.length > 0 ? (
            skills.map((skill, index) => {
              return (
                <span
                  className="flex justify-center bg-gray-100 text-gray-800 text-xs font-medium me-2 my-1 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300"
                  key={index}
                >
                  {skill}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 ml-2 fill-gray-800"
                    viewBox="0 0 384 512"
                    onClick={() => {
                      const updateSkills = skills.filter((x, i) => i != index);
                      setSkills(updateSkills);
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
