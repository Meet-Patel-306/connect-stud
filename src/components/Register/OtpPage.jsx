import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { host } from "../../APIs/APIRoutes";
import { toast } from "react-toastify";
import axios from "axios";

export default function OtpPage({ ownerImage }) {
  const [otp, setOtp] = useState(Array(4).fill("")); // Array with 4 empty strings
  const inputRefs = useRef([]); // Array of refs for each input field
  const registerData = useSelector((state) => state.registerData);
  const verifyAndRegister = async (e) => {
    e.preventDefault();
    try {
      const registerFormData = new FormData();
      registerFormData.append("registerFormData", JSON.stringify(registerData));
      const finalOtp = otp.join("");
      registerFormData.append("otp", finalOtp);
      registerFormData.append("email", registerData.email);
      if (ownerImage) {
        registerFormData.append("ownerImage", ownerImage);
      }
      const res = await axios.post(
        `${host}/api/register/verify`,
        registerFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 201) {
        console.log(res);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (err) {
      toast.error(err?.response?.data?.message);
      console.log(err);
      console.error(
        "Error registering user:",
        err.response?.data?.message || err.message
      );
    }
  };
  const handleKeyDown = (e) => {
    if (
      !/^[0-9]{1}$/.test(e.key) &&
      e.key !== "Backspace" &&
      e.key !== "Delete" &&
      e.key !== "Tab" &&
      !e.metaKey
    ) {
      e.preventDefault();
    }

    if (e.key === "Delete" || e.key === "Backspace") {
      const index = inputRefs.current.indexOf(e.target);
      if (index > 0) {
        setOtp((prevOtp) => [
          ...prevOtp.slice(0, index - 1),
          "",
          ...prevOtp.slice(index),
        ]);
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleInput = (e) => {
    const { target } = e;
    const index = inputRefs.current.indexOf(target);
    if (target.value) {
      setOtp((prevOtp) => [
        ...prevOtp.slice(0, index),
        target.value,
        ...prevOtp.slice(index + 1),
      ]);
      if (index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text");
    if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
      return;
    }
    const digits = text.split("");
    setOtp(digits);
  };

  return (
    <section className="py-10 dark:bg-dark flex justify-center px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Enter OTP
        </h1>

        <form id="otp-form" className="flex justify-center flex-wrap gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              onFocus={handleFocus}
              onPaste={handlePaste}
              ref={(el) => (inputRefs.current[index] = el)}
              className="shadow-xs w-12 sm:w-16 h-12 sm:h-16 text-center text-2xl sm:text-3xl font-medium rounded-lg border border-stroke bg-white text-gray-700 outline-none dark:border-dark-3 dark:bg-white/5 dark:text-white"
            />
          ))}
        </form>

        <button
          onClick={verifyAndRegister}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Verify OTP
        </button>
      </div>
    </section>
  );
}
