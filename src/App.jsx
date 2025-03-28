import { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile/Profile";
import CreatePostButton from "./components/CreatePostButton";

function App() {
  return (
    <>
      <Navbar />
      <CreatePostButton />
      <Profile email={"meet@gmail.com"} />
    </>
  );
}

export default App;
