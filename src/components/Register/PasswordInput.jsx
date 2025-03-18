import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRegisterData } from "../../features/registerDataSlice.js";
import OpenEyeSvg from "../../svgs/OpenEyeSvg.jsx";
import CloseEyeSvg from "../../svgs/CloseEyeSvg.jsx";

export default function PasswordInput({
  passwordValue,
  setPasswordValue,
  confirmPasswordValue,
  setConfirmPasswordValue,
}) {
  const [visibilityEyePassword, setVisibilityEyePassword] = useState(false);
  const [visibilityEyeConfirmPassword, setVisibilityEyeConfirmPassword] =
    useState(false);
  const dispatch = useDispatch();

  return (
    <>
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
            className="input-passowrd-tag outline-none"
            autoComplete="off"
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
            <OpenEyeSvg
              onClick={() => setVisibilityEyePassword(!visibilityEyePassword)}
            />
          )}
          {!visibilityEyePassword && (
            <CloseEyeSvg
              onClick={() => setVisibilityEyePassword(!visibilityEyePassword)}
            />
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
            className="input-passowrd-tag outline-none"
            onChange={(e) => setConfirmPasswordValue(e.target.value)}
            required
          />
          {/* visible eye */}
          {visibilityEyeConfirmPassword && (
            <OpenEyeSvg
              onClick={() =>
                setVisibilityEyeConfirmPassword(!visibilityEyeConfirmPassword)
              }
            />
          )}
          {!visibilityEyeConfirmPassword && (
            <CloseEyeSvg
              onClick={() =>
                setVisibilityEyeConfirmPassword(!visibilityEyeConfirmPassword)
              }
            />
          )}
        </div>
      </div>
    </>
  );
}
