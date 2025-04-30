import { useState, useEffect } from "react";
import Generalinfo from "./Generalinfo";
import Parsonalinfo from "./Parsonalinfo";
import Education from "./Education";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { host } from "../../APIs/APIRoutes";
import { setAllUserData } from "../../features/allUserDataSlice";
import { Link } from "react-router";
import axios from "axios";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);
  const [otherUser, setOtherUser] = useState(null);
  const { id } = useParams();
  const allUser = useSelector((state) => state.allUserData.allUser);
  if (id) {
    useEffect(() => {
      const fetchUser = async () => {
        if (!allUser.some((u) => u._id === id)) {
          try {
            const res = await axios.get(`${host}/api/profile/${id}`, {
              withCredentials: true,
            });
            // console.log("api call", res.data);
            setOtherUser(res.data); // Set receiver state
            dispatch(setAllUserData([res.data])); // Update Redux state
          } catch (err) {
            console.error("Failed to fetch receiver user:", err);
          }
        } else {
          const foundUser = allUser.find((u) => u._id === id);
          // console.log("no api call", foundReceiver);
          setOtherUser(foundUser); // Set receiver state
        }
      };
      if (!otherUser) {
        fetchUser();
      }
    }, [id]);
  }
  return (
    <>
      {/* current user */}
      {/* route:"/profile" */}
      {!id && user && (
        <div>
          <Generalinfo
            firstName={user.firstName}
            jobtitle={user.jobtitle}
            country={user.country}
            dateOfBirth={user.dateOfBirth}
            primaryLanguage={user.primaryLanguage}
            gender={user.gender}
            ownerImage={user.ownerImage}
          />
          <Parsonalinfo
            firstName={user.firstName}
            lastName={user.lastName}
            biography={user.biography}
            jobtitle={user.jobtitle}
            portfolio={user.portfolio}
            github={user.github}
            linkedin={user.linkedin}
            instagram={user.instagram}
            primaryLanguage={user.primaryLanguage}
            languages={user.languages}
            skills={user.skills}
            email={user.email}
            phoneNo={user.phoneNo}
          />
          <Education colleges={user.colleges} experiences={user.experiences} />
          <div className="mt-3 flex justify-center">
            <Link to="edit">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-3 w-full"
              >
                Edit
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* other user whose profile current user see */}
      {/* route:"/profile/:id" */}
      {id && otherUser && (
        <div>
          <Generalinfo
            firstName={otherUser.firstName}
            jobtitle={otherUser.jobtitle}
            country={otherUser.country}
            dateOfBirth={otherUser.dateOfBirth}
            primaryLanguage={otherUser.primaryLanguage}
            gender={otherUser.gender}
            ownerImage={otherUser.ownerImage}
          />
          <Parsonalinfo
            firstName={otherUser.firstName}
            lastName={otherUser.lastName}
            biography={otherUser.biography}
            jobtitle={otherUser.jobtitle}
            portfolio={otherUser.portfolio}
            github={otherUser.github}
            linkedin={otherUser.linkedin}
            instagram={otherUser.instagram}
            primaryLanguage={otherUser.primaryLanguage}
            languages={otherUser.languages}
            skills={otherUser.skills}
            email={otherUser.email}
            phoneNo={otherUser.phoneNo}
          />
          <Education
            colleges={otherUser.colleges}
            experiences={otherUser.experiences}
          />
        </div>
      )}
    </>
  );
}
