import { useState } from "react";
import CreatePostButton from "../CreatePostButton";
import { useSelector } from "react-redux";
import NewsCard from "../News/NewsCard";
import HackathonCard from "../Hackathon/HackathonCard";
import { host } from "../../APIs/APIRoutes";
import axios from "axios";
import { useEffect } from "react";
export default function HomePage() {
  const [postNews, setPostNews] = useState(null);
  const [postHackathon, setPostHackathon] = useState(null);
  const user = useSelector((state) => state.userData);
  useEffect(() => {
    if (!user?._id) return;
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${host}/api/profile/${user?._id}/post`, {
          withCredentials: true,
        });
        setPostNews(res.data.postNews);
        setPostHackathon(res.data.postHackathon);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [user]);
  return (
    <>
      {postNews &&
        postNews.map((news) => (
          <NewsCard
            newsCategory={news.newsCategory}
            title={news.title}
            newsIntro={news.newsIntro}
            ownerName={news.ownerName}
            ownerImage={news.ownerImage}
            ownerLocation={news.ownerLocation}
            date={news.date}
            id={news._id}
            newsImage={news.newsImage}
            key={news._id}
          />
        ))}
      {postHackathon &&
        postHackathon.map((hackathon, index) => (
          <HackathonCard
            hackathonName={hackathon.hackathonName}
            organizerName={hackathon.organizerName}
            hackathonLocation={hackathon.hackathonLocation}
            startDate={hackathon.startDate}
            endDate={hackathon.endDate}
            type={hackathon.type}
            subjects={hackathon.subjects}
            winner={hackathon.winner}
            firstRunnerUp={hackathon.firstRunnerUp}
            secondRunnerUp={hackathon.secondRunnerUp}
            hackathonImage={hackathon.hackathonImage}
            id={hackathon._id}
            key={index}
          />
        ))}
      <CreatePostButton />
    </>
  );
}
