import { Link } from "react-router";

export default function UserCard({ name, contry, id, job, profileImage }) {
  return (
    <>
      <div className="w-full max-w-2xl sm:w-[90%] bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-md mx-auto">
        <div
          id="234"
          className="flex flex-col items-center pb-10 bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow-xl rounded-3xl"
        >
          <div className="max-w-2xl bg-white dark:bg-gray-800 text-black dark:text-white p-4 mx-auto overflow-hidden mt-4 flex items-center gap-3 lg:flex-row">
            <img
              src={profileImage}
              loading="lazy"
              className="w-[90px] h-[90px] rounded-full shadow-lg border-4"
            />
            <div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {name}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {contry}
              </p>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {job}
              </span>
            </div>
          </div>
          <div className="flex mt-4 md:mt-6">
            <Link to={`/profile/${id}`}>
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Profile
              </button>
            </Link>
            <a href={`connect/${id}`}>
              <button className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Message
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
