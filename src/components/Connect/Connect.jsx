import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import UserCard from "./UserCard";
import { allUsersDataRoutes } from "../../APIs/APIRoutes";
import { host } from "../../APIs/APIRoutes";
import { setAllUserData } from "../../features/allUserDataSlice";
import { toast } from "react-toastify";
export default function Connect() {
  const dispatch = useDispatch();
  const [Loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  const [allUserValue, setAllUserValue] = useState([]);
  //serch bar
  const [selectedField, setSelectedField] = useState("Name");
  const [keyword, setKeyword] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const fetchUsers = async () => {
      if (!hasMore) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `${allUsersDataRoutes}?page=${page}&limit=30`,
          { withCredentials: true }
        );
        // console.log("res: ", res);
        if (res.data.users.length === 0) {
          setHasMore(false);
        } else {
          dispatch(setAllUserData(res.data.users));
        }
      } catch (err) {
        // console.error("Failed to fetch:", err);
        toast.err("Failed To Get User Try again");
      }
    };
    setLoading(false);
    // console.log("hello");
    if (hasMore) {
      // console.log("api call");
      fetchUsers();
    }
  }, [page]);

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore]);
  //search bar
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectCategory = (field) => {
    setSelectedField(field);
    setDropdownOpen(false);
  };
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.get(
        `${host}/api/profile/search?${selectedField}=${keyword}`
      );
      // console.log("Results:", res.data);
      setAllUserValue(res.data);
    } catch (error) {
      // console.error("Error fetching hackathons:", error);
    }
    setLoading(false);
  };
  const allUserData = useSelector((state) => state.allUserData.allUser);
  useEffect(() => {
    const getAllUserValue = () => {
      setAllUserValue(allUserData);
    };
    getAllUserValue();
  }, [allUserData]);
  const userId = useSelector((state) => state.userData?._id);
  // console.log("all user: ", allUserData);
  return (
    <>
      {/* search bar */}
      <div className="w-auto mx-10 my-2">
        <form onSubmit={handleSearchSubmit}>
          <div className="flex">
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search Hackathons
            </label>

            {/* Dropdown Button */}
            <button
              id="dropdown-button"
              type="button"
              onClick={toggleDropdown}
              className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            >
              <span className="capitalize">{selectedField}</span>
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                id="dropdown"
                className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("Name")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Name
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("jobtitle")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Job Title
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("college")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      College
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("GraduationYear")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Graduation Year
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("company")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Company
                    </button>
                  </li>
                </ul>
              </div>
            )}

            {/* Search Input */}
            <div className="relative w-full">
              <input
                type="search"
                id="search-input"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search User by name, college, job etc ..."
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center">
        <div className="container mx-auto 0 w-full">
          <div className="justify-center grid gap-y-10 gap-x-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {allUserValue
              .filter((user) => user?._id !== userId) // Filter out the user with matching ID
              .map((user) => (
                <UserCard
                  key={user?._id}
                  name={`${user?.firstName} ${user?.lastName}`}
                  contry={user?.country}
                  id={user?._id}
                  job={user?.jobtitle}
                  profileImage={user?.ownerImage}
                />
              ))}
          </div>
        </div>
        {Loading && hasMore && (
          <div ref={ref}>
            <div role="status" className="flex justify-center">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
