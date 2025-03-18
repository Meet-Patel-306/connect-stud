import Generalinfo from "./Generalinfo";
import Parsonalinfo from "./Parsonalinfo";
import Education from "./Education";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Profile({ email }) {
  const user = {
    firstName: "meet",
    lastName: "patel",
    phoneNo: "12345 12345",
    dateOfBirth: "30/06/2006",
    country: "india",
    gender: "male",
    jobtitle: "dev",
    biography: "dahAFkj",
    primaryLanguage: "gujarati",
    languages: ["hindi", "eng"],
    instagram: "",
    linkedin: "",
    github: "",
    portfolio: "",
    skills: ["html", "css"],
    colleges: [],
    experiences: [],
  };
  return (
    <>
      <Generalinfo
        firstName={user.firstName}
        jobtitle={user.jobtitle}
        country={user.country}
        dateOfBirth={user.dateOfBirth}
        primaryLanguage={user.primaryLanguage}
        gender={user.gender}
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
      <Login />
      <Register />
    </>
  );
}
