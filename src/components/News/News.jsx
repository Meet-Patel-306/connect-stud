import Footer from "./Footer";
import NewsCard from "./NewsCard";
import NewsForm from "./NewsForm";
import React from "react";
import NewsBlog from "./NewsBlog";

export default function News() {
  return (
    <>
      <div class="py-4 lg:py-13 bg-gray-50 dark:bg-gray-800">
        <div class="px-4 mx-auto max-w-screen-xl">
          <div class="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>

        <NewsBlog />
      </div>

      <Footer />
      <NewsForm />
    </>
  );
}
