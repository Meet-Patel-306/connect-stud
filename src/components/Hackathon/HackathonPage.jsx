import { Outlet } from "react-router";
import JoinHackathon from "./JoinHackathon";

export default function HackathonPage() {
  return (
    <>
      <Outlet />
      <JoinHackathon />
    </>
  );
}
