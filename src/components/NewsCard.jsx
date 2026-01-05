import React from "react";

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

        <div id={newsItem.id} className="mt-3">
          <h2 className="text-xl font-bold leading-tight cursor-pointer hover:underline hover:text-[#b80000]">
            {newsItem.title}
          </h2>
          <p className="mt-2 text-gray-500 text-sm gap-2">{newsItem.time}</p>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
