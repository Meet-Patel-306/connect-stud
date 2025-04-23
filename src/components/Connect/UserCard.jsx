export default function UserCard() {
  return (
    <>
      <div class="w-full max-w-2xl sm:w-[90%] bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-md mx-auto">
        <div
          id="234"
          class="flex flex-col items-center pb-10 bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow-xl rounded-3xl"
        >
          <div class="max-w-2xl bg-white dark:bg-gray-800 text-black dark:text-white p-4 mx-auto overflow-hidden mt-4 flex items-center gap-3 lg:flex-row">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Avatar"
              class="w-[90px] h-[90px] rounded-full shadow-lg"
            />
            <div>
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                San Diego, California
              </p>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-2 px-3 py-1 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-md mx-auto">
            <img
              src="Login.jpg"
              alt="Avatar"
              class="w-[20px] h-[20px] rounded-full shadow-lg"
            />
            Google
          </div>
          <div class="flex mt-4 md:mt-6">
            <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Add Friend
            </button>
            <button class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
