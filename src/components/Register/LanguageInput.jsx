import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";

export default function LanguageInput() {
  const [languages, setLanguage] = useState([]);
  const [languageValue, setLanguageValue] = useState("");
  // get register data slice
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRegisterData({ name: "languages", value: languages }));
  }, [languages]);
  return (
    <>
      {/* primary languages */}
      <div>
        <label
          htmlFor="primaryLanguage"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Primary Language<span className="text-red-500 text-sm">*</span>
        </label>
        <input
          type="text"
          name="primaryLanguage"
          id="primaryLanguage"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="English"
          onChange={(e) =>
            dispatch(
              getRegisterData({ name: e.target.name, value: e.target.value })
            )
          }
          required
        />
      </div>
      {/* languages */}
      <div>
        <label
          htmlFor="languages"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Languages
        </label>
        <div className="flex">
          <input
            type="text"
            name="languages"
            id="languages"
            className="block w-full px-2 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Gujarati,Korean,Marathi,Mandarin,Tamil,..."
            value={languageValue}
            onChange={(e) => setLanguageValue(e.target.value)}
          />
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-5 px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              if (languageValue && !languages.includes(languageValue)) {
                setLanguage([...languages, languageValue]);
                setLanguageValue("");
              }
            }}
          >
            Add
          </button>
        </div>
        {/* display skill */}
        <div className="flex flex-wrap my-2">
          {languages && languages.length > 0 ? (
            languages.map((language, index) => {
              return (
                <span
                  className="flex justify-center bg-gray-100 text-gray-800 text-xs font-medium me-2 my-1 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-gray-300"
                  key={index}
                >
                  {language}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 ml-2 fill-gray-800"
                    viewBox="0 0 384 512"
                    onClick={() => {
                      const updateLanguages = languages.filter(
                        (x, i) => i != index
                      );
                      setLanguage(updateLanguages);
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
