import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Profile email={"meet@gmail.com"} />
    </>
  );
}

export default App;
