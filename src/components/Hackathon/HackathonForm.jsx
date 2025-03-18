export default function HackathonForm() {
  return (
    <>
      <form className="mx-5 md:mx-20 lg:mx-72 my-5 bg-white shadow dark:bg-gray-800 p-5 rounded-lg">
        <div>
          {/*Hackathon name */}
          <label
            htmlFor="hackathon_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hackathon Name
          </label>
          <input
            type="text"
            name="hackathonName"
            id="hackathon_name"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
            required
          />
        </div>
        <div>
          {/*organizer name */}
          <label
            htmlFor="organizer_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Organizer Name
          </label>
          <input
            type="text"
            name="organizerName"
            id="organizer_name"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
            required
          />
        </div>
        <div>
          {/*organizer email */}
          <label
            htmlFor="organizer_email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Organizer Email
          </label>
          <input
            type="email"
            name="organizerEmail"
            id="organizer_email"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
            required
          />
        </div>
        <div>
          {/* Hackathon location */}
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hackathon Location
          </label>
          <input
            type="text"
            name="hackathonLocation"
            id="location"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
            required
          />
        </div>
        <div>
          {/* Hackathon location */}
          <label
            htmlFor="location"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Hackathon Location
          </label>
          <input
            type="text"
            name="hackathonLocation"
            id="location"
            className="input-tag"
            placeholder="John"
            autoComplete="off"
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
              Hackathon Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="input-tag"
              placeholder="John"
              autoComplete="off"
              required
            />
          </div>
          <div>
            {/* Hackathon end date */}
            <label
              htmlFor="endDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hackathon End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              className="input-tag"
              placeholder="John"
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-row gap-4">
          <div>
            {/* Hackathon type */}
            <label
              htmlFor="hackathonType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hackathon Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              className="input-tag"
              placeholder="John"
              autoComplete="off"
              required
            />
          </div>
          <div>
            {/* Hackathon end date */}
            <label
              htmlFor="endDate"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Hackathon End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              className="input-tag"
              placeholder="John"
              autoComplete="off"
              required
            />
          </div>
        </div>
      </form>
    </>
  );
}
