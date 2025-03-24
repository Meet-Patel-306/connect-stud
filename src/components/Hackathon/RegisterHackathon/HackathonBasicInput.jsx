import { useDispatch } from "react-redux";
import { getHackathonRegister } from "../../../features/hackathonRegisterSlice";

export default function HackathonBasicInput() {
  const dispatch = useDispatch();

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
    </>
  );
}
