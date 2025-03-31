import { useState } from "react";
import { host } from "../../APIs/APIRoutes";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
export default function JoinHackathon({ closeButton, setCloseButton, id }) {
  const [craeteTeam, setCreateTeam] = useState(true);
  const [joinTeam, setJoinTeam] = useState(false);
  const [teamName, setTeamName] = useState("");
  const [teamId, setTeamId] = useState("");
  const [teamJoinId, setTeamJoinId] = useState("");
  const [isCopy, setIsCopy] = useState(false);
  const userId = useSelector((state) => state.userData?._id);

  const handelCreateTeam = async (e) => {
    e.preventDefault();
    console.log(userId);
    try {
      const res = await axios.post(`${host}/api/hackathon/${id}/teamjoin`, {
        name: teamName,
        id: userId,
      });
      console.log(res);
      if (res.status == 201) {
        console.log(res.data.id);
        toast.success(res.data.message);
        setTeamJoinId(res.data.id);
      }
      setCreateTeam(false);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  const handleJoinTeam = async (e) => {
    e.preventDefault();
    console.log(userId);
    try {
      const res = await axios.post(`${host}/api/hackathon/${id}/memberjoin`, {
        id: userId,
        teamId: teamId,
      });
      toast.success(res.data.message);
      console.log(res);
    } catch (err) {
      toast.error(err.response.data.message);
      console.log(err);
    }
  };
  const handleCopyJoinTeamId = () => {
    setIsCopy(true);
    let copyText = document.getElementById("copyTeamJoinId");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  };
  return (
    <>
      <div
        className={`bg-blue-50 dark:bg-gray-800 p-4 h-5/6 lg:h-96 rounded-lg border border-gray-600 ${
          closeButton ? "absolute" : "hidden"
        } left-1/2 transform -translate-x-1/2`}
      >
        <div className="flex justify-end">
          <span>
            <i
              className="fa-solid fa-xmark ml-2 dark:text-white"
              onClick={() => setCloseButton(false)}
            ></i>
          </span>
        </div>

        <div className="grid grid-flow-row grid-col-1 lg:grid-cols-2 justify-center items-center">
          <div
            className={`w-56 h-32 mb-6 flex flex-col justify-center items-center bg-blue-50 rounded-lg mr-3 ml-2 dark:bg-gray-700 dark:text-white ${
              craeteTeam
                ? "border-2 border-blue-600 shadow-lg shadow-blue-100 dark:border-slate-600 dark:shadow-gray-950"
                : ""
            }`}
            onClick={() => {
              setCreateTeam(true);
              setJoinTeam(false);
            }}
          >
            <div className="text-3xl rounded-xl bg-blue-200 text-blue-800 w-16 h-16 flex justify-center items-center dark:bg-slate-200">
              <i className="fa-solid fa-people-group"></i>
            </div>
            <div>
              <h1 className="text-lg mt-2">Create Team</h1>
            </div>
          </div>
          <div
            className={`w-56 h-32 mb-6 flex flex-col justify-center items-center bg-blue-50 rounded-lg mr-2 ml-3 dark:bg-gray-700 dark:text-white ${
              joinTeam
                ? "border-2 border-blue-600 shadow-lg shadow-blue-100 dark:border-slate-600 dark:shadow-gray-950"
                : ""
            }`}
            onClick={() => {
              setCreateTeam(false);
              setJoinTeam(true);
            }}
          >
            <div className="text-3xl rounded-xl bg-blue-200 text-blue-800 w-16 h-16 flex justify-center items-center dark:bg-slate-200">
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <h1 className="text-lg mt-2">Join Team</h1>
            </div>
          </div>
        </div>
        {/*create team form */}
        {craeteTeam && (
          <div className="mt-6 relative w-56 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-slate-700 dark:text-white p-2 rounded-xl shadow">
            <div className="flex justify-end">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setCreateTeam(false)}
              ></i>
            </div>
            <form>
              <div>
                <label
                  htmlFor="teamName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Team Name<span className="required-input">*</span>
                </label>
                <input
                  type="text"
                  name="teamName"
                  id="teamName"
                  className="input-tag"
                  placeholder="Enter team name"
                  autoComplete="off"
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                />
              </div>
              <div className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <button type="button" onClick={handelCreateTeam}>
                  Create Team
                </button>
              </div>
            </form>
          </div>
        )}
        {/* Join team form */}
        {joinTeam && (
          <div className="mt-6 relative w-56 left-1/2 transform -translate-x-1/2 bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-slate-700 dark:text-white p-2 rounded-xl shadow">
            <div className="flex justify-end">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setJoinTeam(false)}
              ></i>
            </div>
            <form>
              <div>
                <label
                  htmlFor="teamId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Team ID<span className="required-input">*</span>
                </label>
                <input
                  type="text"
                  name="teamId"
                  id="teamId"
                  className="input-tag"
                  placeholder="Enter team name"
                  autoComplete="off"
                  onChange={(e) => setTeamId(e.target.value)}
                  required
                />
              </div>
              <div className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <button type="button" onClick={handleJoinTeam}>
                  Join Team
                </button>
              </div>
            </form>
          </div>
        )}

        {/* copy text */}

        {teamJoinId.length > 1 && (
          <div className="mt-5 absolute left-1/2 transform -translate-x-1/2 w-full max-w-[16rem]">
            <div className="relative">
              <label htmlFor="copyTeamJoinId" className="sr-only">
                Label
              </label>
              <input
                id="copyTeamJoinId"
                type="text"
                className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={teamJoinId}
                disabled
                readOnly
              />
              <button
                data-copy-to-clipboard-target="npm-install-copy-button"
                data-tooltip-target="tooltip-copy-npm-install-copy-button"
                className="absolute end-2 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center"
              >
                {!isCopy && (
                  <span id="default-icon">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 20"
                      onClick={handleCopyJoinTeamId}
                    >
                      <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                    </svg>
                  </span>
                )}
                {isCopy && (
                  <span id="success-icon">
                    <svg
                      className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                      onClick={handleCopyJoinTeamId}
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
