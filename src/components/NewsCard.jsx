import React from "react";
import { Link } from "react-router";

const NewsCard = ({ newsItem }) => {
  return (
    <>
      <div>
        <div>
          <img
            src={
              newsItem.image?.srcset?.[7]?.url ||
              newsItem.image?.srcset?.[6]?.url
            }
            alt={newsItem.alt}
            className="w-full object-cover h-32"
          />
        </div>

        <div className="mt-3">
          <Link
            to={`/category/news/details/${newsItem.id}`}
            className="text-xl font-bold leading-tight cursor-pointer hover:underline"
          >
            {newsItem.title}
          </Link>
          <p className="mt-2 text-gray-500 text-sm gap-2">{newsItem.time}</p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
