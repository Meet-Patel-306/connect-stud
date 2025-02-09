import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Register />
    </>
  );
}

export default App;
