import React from "react";
import { FaAngleRight } from "react-icons/fa";
import NewsCard from "./NewsCard";

const BD = ({ news }) => {
  const filteredNews = news.filter((item) => item.id === "bangladesh");
  const bdNews = filteredNews.slice(0, 4);
  console.log(news);

  return (
    <>
      <div className="mt-12">
        <h2 className="text-2xl font-bold pb-4 flex items-center gap-2">
          বাংলাদেশ <FaAngleRight></FaAngleRight>
        </h2>
        <div>
          {bdNews.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem}></NewsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default BD;
