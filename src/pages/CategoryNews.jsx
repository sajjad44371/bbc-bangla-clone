import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

const CategoryNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const categoryId = id || "main";

    fetch(`https://news-api-fs.vercel.app/api/categories/${categoryId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.articles) {
          setNews(data.articles);
        } else {
          setNews([]);
        }
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  // Loading state handling
  if (news?.length === 0) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <div className="mt-10">
        <h1 className="uppercase font-bold text-3xl mb-3">{id}</h1>
        <div className="grid grid-cols-4 gap-5">
          {news?.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem}></NewsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryNews;
