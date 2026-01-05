import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import NewsCard from "../components/NewsCard";
import FeaturedNews from "../components/FeaturedNews";
import BD from "../components/BD";

const Home = () => {
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
  if (news.length === 0) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <>
      <FeaturedNews news={news}></FeaturedNews>
      
    </>
  );
};

export default Home;
