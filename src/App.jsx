import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import Navbar from "./components/Navbar";
import { profileAuthRoutes } from "./APIs/APIRoutes";
import { useSelector, useDispatch } from "react-redux";
import { setUserData } from "./features/userDataSlice";
import axios from "axios";
import Error404 from "./components/404/Error.jsx";
function App() {
  const userData = useSelector((state) => state.userData?._id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        // console.log("navbar api call");
        const res = await axios.get(profileAuthRoutes, {
          withCredentials: true,
        });
        // console.log(res.data);
        dispatch(setUserData(res.data));
      } catch (err) {
        if (err.response?.status === 401) {
          navigate("/login"); // Redirect if unauthorized
        } else {
          console.error("Failed to fetch user:", err);
        }
      }
    };
    if (userData == null) {
      // console.log(userData);
      fetchUser();
    }
  }, []);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
