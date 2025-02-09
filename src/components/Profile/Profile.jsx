import Generalinfo from "./Generalinfo";
import Parsonalinfo from "./Parsonalinfo";
import Education from "./Education";
import Login from "../Login/Login";
import Register from "../Register/Register";
export default function Profile() {
  return (
    <>
      <Generalinfo />
      <Parsonalinfo />
      <Education />
      <Login />
      <Register />
    </>
  );
}
