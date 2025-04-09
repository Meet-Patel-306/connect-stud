import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { setNews } from "../../features/newsDataSlice";
import { useInView } from "react-intersection-observer";
import { newsDataRoutes } from "../../APIs/APIRoutes";
import axios from "axios";
export default function News() {
  const dispatch = useDispatch();
  // const [newss, setNewss] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { ref, inView } = useInView();
  useEffect(() => {
    const fetchNews = async () => {
      if (!hasMore) return;
      setLoading(true);
      try {
        const res = await axios.get(`${newsDataRoutes}?page=${page}&limit=5`);
        if (res.data.news.length === 0) {
          setHasMore(false);
        } else {
          console.log(res.data.news);
          dispatch(setNews(res.data.news));
        }
      } catch (err) {
        console.error("Failed to fetch:", err);
      }
    };
    setLoading(false);
    if (hasMore) {
      fetchNews();
    }
  }, [page]);

  useEffect(() => {
    if (inView && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, hasMore]);
  const newsData = useSelector((state) => state.newsData.news);
  return (
    <>
      {newsData.map((news) => (
        <NewsCard
          newsCategory={news.newsCategory}
          title={news.title}
          newsIntro={news.newsIntro}
          ownerName={news.ownerName}
          ownerImage={news.ownerImage}
          ownerLocation={news.ownerLocation}
          date={news.date}
          id={news._id}
          key={news._id}
        />
      ))}
    </>
  );
}
