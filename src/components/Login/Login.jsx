import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { loginRoutes } from "../../APIs/APIRoutes.js";
import OpenEyeSvg from "../../svgs/OpenEyeSvg.jsx";
import CloseEyeSvg from "../../svgs/CloseEyeSvg.jsx";
import Logo from "../../../public/connectStud.png";
import Logo2 from "../../../public/DarkStud.png";

export default function Login() {
  const [visibilityEyeLogin, setVisibilityEyeLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    try {
      const res = await axios.post(
        loginRoutes,
        { email, password },
        { withCredentials: true }
      );
      toast.success(res.data.message || "Login Successfully", {
        position: "top-right",
      });
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.message || "No Login Failed");
    }
  };
  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="bg-gray-50 font-[sans-serif] dark:bg-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4 dark:bg-gray-900">
          <div className="max-w-md w-full dark:bg-gray-900">
            {/* Light Mode Logo */}
            <div className="flex justify-center items-center mb-6 dark:hidden">
              <img src={Logo} alt="ConnectStud" className="w-60" />
            </div>

            {/* Dark Mode Logo */}
            <div className="hidden justify-center items-center mb-6 dark:flex">
              <img src={Logo2} alt="ConnectStud Dark" className="w-60" />
            </div>

            <div className="p-8 rounded-2xl bg-white shadow dark:bg-gray-800">
              <h2 className="text-gray-800 text-center text-2xl font-bold dark:text-white">
                Login
              </h2>
              <form className="mt-8 space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="text-gray-800 text-sm mb-2 block dark:text-white"
                  >
                    Email
                  </label>
                  <div className="flex items-center dark:bg-gray-700">
                    <input
                      name="email"
                      type="text"
                      required
                      className="input-tag "
                      placeholder="Enter user name"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-gray-800 text-sm mb-2 block dark:text-white"
                  >
                    Password
                  </label>
                  <div className="flex items-center dark:bg-gray-700">
                    <input
                      name="password"
                      type={visibilityEyeLogin ? "text" : "password"}
                      required
                      className="input-passowrd-tag"
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* visible eye */}
                    {visibilityEyeLogin && (
                      <OpenEyeSvg
                        onClick={() =>
                          setVisibilityEyeLogin(!visibilityEyeLogin)
                        }
                      />
                    )}
                    {!visibilityEyeLogin && (
                      <CloseEyeSvg
                        onClick={() =>
                          setVisibilityEyeLogin(!visibilityEyeLogin)
                        }
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 dark:bg-gray-700">
                  <div className="flex items-center dark:bg-gray-700"></div>
                  <div className="text-sm dark:bg-gray-700"></div>
                </div>

                <div className="!mt-8 dark:bg-gray-700">
                  <button
                    type="button"
                    className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </div>
                <div className="my-4 flex items-center gap-4">
                  <hr className="w-full border-slate-300" />
                  <p className="text-sm text-slate-800 text-center dark:text-white">
                    or
                  </p>
                  <hr className="w-full border-slate-300" />
                </div>

                {/* Google login */}
                <div className="flex items-center justify-center dark:bg-gray-800">
                  <a
                    href="http://localhost:3000/auth/google"
                    className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                  >
                    <img
                      className="w-6 h-6"
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      loading="lazy"
                      alt="google logo"
                    />
                    <span>Login with Google</span>
                  </a>
                </div>
                <p class="text-slate-800 text-sm !mt-6 text-center">
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
