import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";
import SkillsInput from "./SkillsInput";
import LanguageInput from "./LanguageInput";
import EducationInput from "./EducationInput.jsx";
import ExperienceInput from "./ExperienceInput.jsx";

export default function Register() {
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [visibilityEyePassword, setVisibilityEyePassword] = useState(false);
  const [visibilityEyeConfirmPassword, setVisibilityEyeConfirmPassword] =
    useState(false);
  // get register data slice
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.registerData);

  return (
    <>
      <form className="mx-5 md:mx-20 lg:mx-72 my-5 dark:bg-gray-800 p-5 rounded-lg">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            {/* name */}
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="lastName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
            />
          </div>
          <div>
            {/* email id */}
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
            />
          </div>
          <div>
            {/* phone no */}
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phoneNo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              pattern="[0-9]{5} [0-9]{5}"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
            />
          </div>
          <div>
            {/* DOB */}
            <label
              htmlFor="dob"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date Of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dateOfBirth"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Country"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
              required
            />
          </div>
          <div className="flex items-center ps-4 dark:border-gray-700">
            <input
              id="male"
              type="radio"
              value="male"
              name="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
            <label
              htmlFor="male"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Male
            </label>
          </div>
          <div className="flex items-center ps-4 dark:border-gray-700">
            <input
              id="female"
              type="radio"
              value="female"
              name="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              onChange={(e) =>
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            />
            <label
              htmlFor="female"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Female
            </label>
          </div>
        </div>
        {/* password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <div className="flex items-center">
            <input
              type={visibilityEyePassword ? "text" : "password"}
              id="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{6,}"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10 rounded-r-none border-r-0"
              placeholder="•••••••••"
              onChange={(e) => {
                dispatch(
                  getRegisterData({
                    name: e.target.name,
                    value: e.target.value,
                  })
                );
                setPasswordValue(e.target.value);
              }}
              required
            />
            {/* visible eye */}
            {visibilityEyePassword && (
              <span className="rounded-r-lg dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-10 pr-2 text-blue-800 dark:text-blue-300 rounded-lg rounded-l-none border border-l-0 border-gray-300 dark:border-gray-600 dark:fill-white"
                  viewBox="0 0 576 512"
                  onClick={() =>
                    setVisibilityEyePassword(!visibilityEyePassword)
                  }
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </span>
            )}
            {!visibilityEyePassword && (
              <span className="rounded-r-lg dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-10 pr-2 text-blue-800 dark:text-blue-300 rounded-lg rounded-l-none border border-l-0 border-gray-300 dark:border-gray-600 dark:fill-white"
                  viewBox="0 0 640 512"
                  onClick={() =>
                    setVisibilityEyePassword(!visibilityEyePassword)
                  }
                >
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                </svg>
              </span>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <div className="flex items-center">
            <input
              type={visibilityEyeConfirmPassword ? "text" : "password"}
              id="confirm_password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\s]).{6,}"
              className="bg-gray-50 border border-r-0 h-10 border-gray-300 text-gray-900 text-sm rounded-lg rounded-r-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="•••••••••"
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
              required
            />
            {/* visible eye */}
            {visibilityEyeConfirmPassword && (
              <span className="rounded-r-lg dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-10 pr-2 text-blue-800 dark:text-blue-300 rounded-lg rounded-l-none border border-l-0 border-gray-300 dark:border-gray-600 dark:fill-white"
                  viewBox="0 0 576 512"
                  onClick={() =>
                    setVisibilityEyeConfirmPassword(
                      !visibilityEyeConfirmPassword
                    )
                  }
                >
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                </svg>
              </span>
            )}
            {!visibilityEyeConfirmPassword && (
              <span className="rounded-r-lg dark:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-10 pr-2 text-blue-800 dark:text-blue-300 rounded-lg rounded-l-none border border-l-0 border-gray-300 dark:border-gray-600 dark:fill-white"
                  viewBox="0 0 640 512"
                  onClick={() =>
                    setVisibilityEyeConfirmPassword(
                      !visibilityEyeConfirmPassword
                    )
                  }
                >
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                </svg>
              </span>
            )}
          </div>
        </div>
        {passwordValue == confirmPasswordValue && passwordValue.length > 6 && (
          <div>
            {/* personal info */}
            <h1 className="block mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              Personal information
            </h1>
            <div>
              <label
                htmlFor="biography"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Biography
              </label>
              <textarea
                id="biography"
                rows="4"
                name="biography"
                className="block mb-6 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your Biography..."
                onChange={(e) =>
                  dispatch(
                    getRegisterData({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              ></textarea>
              {/* social */}
              <div className="grid gap-3 mb-6 grid-cols-2">
                <div>
                  <label
                    htmlFor="instagram"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Instagram Profile
                  </label>
                  <input
                    type="text"
                    id="instagram"
                    name="instagram"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="www.instagram.com/userid"
                    onChange={(e) =>
                      dispatch(
                        getRegisterData({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Linkedin Profile
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    name="linkedin"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="www.linkedin.com/userid"
                    onChange={(e) =>
                      dispatch(
                        getRegisterData({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="github"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Github Profile
                  </label>
                  <input
                    type="text"
                    id="github"
                    name="github"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="www.github.com/userid"
                    onChange={(e) =>
                      dispatch(
                        getRegisterData({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="portfolio"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Portfolio Websute
                  </label>
                  <input
                    type="text"
                    id="portfolio"
                    name="portfolio"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="www.website.com"
                    onChange={(e) =>
                      dispatch(
                        getRegisterData({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
            {/* job title */}
            <div>
              <label
                htmlFor="job"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Current Job Title
              </label>
              <input
                type="text"
                id="job"
                name="jobtitle"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="www.linkedin.com/userid"
                onChange={(e) =>
                  dispatch(
                    getRegisterData({
                      name: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              />
            </div>

            {/* skills */}
            <SkillsInput />
            {/* Language */}
            <LanguageInput />
            {/* Education */}
            <EducationInput />
            <ExperienceInput />
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                console.log(registerData);
              }}
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </>
  );
}
