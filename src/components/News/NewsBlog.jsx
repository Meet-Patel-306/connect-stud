import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { host } from "../../APIs/APIRoutes";
import axios from "axios";

export default function NewsBlog() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [summary, setSummary] = useState("");
  const [summaryLoading, setSummaryLoading] = useState(false);
  let newsData = useSelector((state) =>
    state.newsData.news.find((n) => n._id === id)
  );
  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(`${host}/api/news/${id}`);
      setNews(res.data.message);
    };
    if (!newsData) {
      // console.log("1");
      fetchNews();
    } else {
      setNews(newsData);
      // console.log("2");
    }
  }, [id]);
  const handleSummary = async () => {
    setSummaryLoading(true);
    try {
      const text = news.content
        .replace(/<[^>]*>/g, " ") // Replace tags with space
        .replace(/\s+/g, " ") // Normalize multiple spaces
        .trim(); // Remove leading/trailing spaces

      console.log(text, typeof text);
      const response = await axios.post(`${host}/api/news/summary`, { text });
      setSummary(response.data.summary);
    } catch (err) {
      setSummary("Error occurred while summarizing.");
    }
    setSummaryLoading(false);
  };
  // console.log(news);
  if (!news)
    return (
      <div role="status" className="flex justify-center">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  return (
    <>
      <main className="pt-4 pb-8 lg:pt-8 lg:pb-12 bg-white dark:bg-gray-900 antialiased">
        <div className="flex flex-wrap justify-between items-center px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex flex-wrap items-center gap-4 mb-6 not-italic">
                <div className="flex items-center space-x-4 text-sm text-gray-900 dark:text-white">
                  <img
                    className="w-16 h-16 rounded-full"
                    src={news.ownerImage}
                    alt="Profile Picture"
                    loading="lazy"
                  />
                  <div>
                    <a
                      href="#"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {news.ownerName}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      {news.date.split("T")[0]}
                    </p>
                  </div>
                </div>
              </address>
              <img src={news.newsImage} className="rounded-md" />
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {news.title}
              </h1>
            </header>
            <div
              className="dark:text-white"
              dangerouslySetInnerHTML={{ __html: news.content }}
            ></div>
            <div>
              {!summary.length > 0 && (
                <button
                  className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
                  onClick={handleSummary}
                >
                  Generate with AI
                </button>
              )}
              {summaryLoading && (
                <div role="status" className="flex justify-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              )}
              {summary.length > 0 && <div>{summary}</div>}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
