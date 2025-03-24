import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Error from "./components/404/error.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Error/>
      <Profile email={"meet@gmail.com"} />
    </>
  );
}

export default App;
