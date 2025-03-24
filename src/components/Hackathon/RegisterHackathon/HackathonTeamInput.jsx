import { useDispatch } from "react-redux";
import { getHackathonRegister } from "../../../features/hackathonRegisterSlice";

export default function HackathonTeamInput() {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {/* tema size*/}
        <label
          htmlFor="teamSize"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Team Size<span className="required-input">*</span>
        </label>
        <input
          type="number"
          name="teamSize"
          id="teamSize"
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
      {/* prize money */}
      <div className="flex flex-col justify-center md:grid md:grid-flow-row md:grid-cols-3 md:gap-2">
        <div>
          <label
            htmlFor="Winner"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Winner Prize<span>(in $)</span>
          </label>
          <input
            type="number"
            name="winner"
            id="Winner"
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
          />
        </div>
        <div>
          <label
            htmlFor="FirstRunnerUp"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Runner Up Prize
          </label>
          <input
            type="number"
            name="firstRunnerUp"
            id="FirstRunnerUp"
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
          />
        </div>
        <div>
          <label
            htmlFor="SecondRunnerUp"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Second Runner Up
          </label>
          <input
            type="number"
            name="secondRunnerUp"
            id="SecondRunnerUp"
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
          />
        </div>
      </div>
    </>
  );
}
