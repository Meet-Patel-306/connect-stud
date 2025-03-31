import Navbar from "../Navbar";
import Footer from "./Footer";
import NewsCard from "./NewsCard";
import NewsForm from "./NewsForm";

export default function News() {
  return (
    <>
      <Navbar />
      <div aria-label="news" class="py-4 lg:py-13 bg-gray-50 dark:bg-gray-800">
        <div class="px-4 mx-auto max-w-screen-xl">
          <h1 className="text-4xl font-semibold text-gray-900 dark:text-white text-center mb-2">
            News
          </h1>

          <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>

      <Footer />
      <NewsForm />
    </>
  );
}
