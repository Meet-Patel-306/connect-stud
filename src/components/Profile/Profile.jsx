import Generalinfo from "./Generalinfo";
import Parsonalinfo from "./Parsonalinfo";
import Education from "./Education";
import { useSelector } from "react-redux";

export default function Profile({ email }) {
  const user = useSelector((state) => state.userData);
  return (
    <>
      {user && (
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
        </div>
      )}
    </>
  );
}
