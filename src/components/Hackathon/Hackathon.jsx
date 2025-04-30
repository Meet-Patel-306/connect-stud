import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import HackathonCard from "./HackathonCard";
import { hackathonDataRoutes } from "../../APIs/APIRoutes.js";
import { useDispatch, useSelector } from "react-redux";
import { setHackathons } from "../../features/hackathonDataSlice.js";
import { host } from "../../APIs/APIRoutes.js";
import axios from "axios";

export default function Hackathone() {
  const dispatch = useDispatch();
  const [hackathonsValue, setHackathonsValue] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  //serch bar
  const [selectedField, setSelectedField] = useState("name");
  const [keyword, setKeyword] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    const fetchHackathons = async () => {
      if (!hasMore) return;
      setLoading(true);
      try {
        const res = await axios.get(
          `${hackathonDataRoutes}?page=${page}&limit=5`
        );
        if (res.data.hackathons.length === 0) {
          setHasMore(false);
        } else {
          dispatch(setHackathons(res.data.hackathons));
        }
      } catch (err) {
        console.error("Failed to fetch:", err);
      }
    };
    setLoading(false);
    if (hasMore) {
      fetchHackathons();
    }
  }, [page]);
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
        `${host}/api/hackathon/search?${selectedField}=${keyword}`
      );
      // console.log("Results:", res.data);
      setHackathonsValue(res.data); // Optional: you can map over these to show on page
    } catch (error) {
      console.error("Error fetching hackathons:", error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (inView && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore]);
  const hackathons = useSelector((state) => state.hackathonData.hackathons);
  useEffect(() => {
    const getHackathonValue = () => {
      setHackathonsValue(hackathons);
    };
    getHackathonValue();
  }, [hackathons]);
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
                      onClick={() => selectCategory("name")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Name
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("startDate")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Start Date
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("endDate")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      End Date
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => selectCategory("place")}
                      className="w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Place
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
                placeholder="Search Hackathons by name,date (YYYY/MM/DD), location ..."
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
      {hackathonsValue.map((hackathon, index) => (
        <HackathonCard
          hackathonName={hackathon.hackathonName}
          organizerName={hackathon.organizerName}
          hackathonLocation={hackathon.hackathonLocation}
          startDate={hackathon.startDate}
          endDate={hackathon.endDate}
          type={hackathon.type}
          subjects={hackathon.subjects}
          winner={hackathon.winner}
          firstRunnerUp={hackathon.firstRunnerUp}
          secondRunnerUp={hackathon.secondRunnerUp}
          hackathonImage={hackathon.hackathonImage}
          id={hackathon._id}
          key={index}
        />
      ))}
      {/* {hackathonsValue.length < 1 && <div>Not found</div>} */}
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
    </>
  );
}
