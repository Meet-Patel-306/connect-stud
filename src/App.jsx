import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">hello Mohit Swami</h1>
      <Profile />
      <Login />
    </>
  );
}

export default App;
