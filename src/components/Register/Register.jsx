import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";
import { registerRoute } from "../../APIs/APIRoutes.js";
import PersonalInfoInput from "./PersonalInfoInput.jsx";
import PasswordInput from "./PasswordInput.jsx";
import SocialMediaInput from "./SocialMediaInput.jsx";
import SkillsInput from "./SkillsInput";
import LanguageInput from "./LanguageInput";
import EducationInput from "./EducationInput.jsx";
import ExperienceInput from "./ExperienceInput.jsx";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [ownerImage, setOwnerImageFile] = useState(null);

  // get register data slice
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.registerData);

  // Initialize navigate function
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const registerFormData = new FormData();
      registerFormData.append("registerFormData", JSON.stringify(registerData));
      if (ownerImage) {
        registerFormData.append("ownerImage", ownerImage);
      }
      const res = await axios.post(registerRoute, registerFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201) {
        console.log(res);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
      console.error(
        "Error registering user:",
        err.response?.data?.message || err.message
      );
    }
  };

  return (
    <>
      <ToastContainer pauseOnHover={false} autoClose={3000} />
      <form
        className="mx-5 md:mx-20 lg:mx-72 my-5 bg-white shadow dark:bg-gray-800 p-5 rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-gray-800 text-center text-2xl font-bold dark:text-white mb-5">
          Register
        </h2>
        {/* Basic Personal Info */}
        <PersonalInfoInput />
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setOwnerImageFile(e.target.files[0])}
            className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>
        {/* password */}
        <PasswordInput
          passwordValue={passwordValue}
          setPasswordValue={setPasswordValue}
          confirmPasswordValue={confirmPasswordValue}
          setConfirmPasswordValue={setConfirmPasswordValue}
        />
        {passwordValue === confirmPasswordValue && passwordValue.length > 6 && (
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
                autoComplete="off"
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
              <SocialMediaInput />
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
                className="input-tag"
                placeholder="www.linkedin.com/userid"
                autoComplete="off"
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
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </>
  );
}
