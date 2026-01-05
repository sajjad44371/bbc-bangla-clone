import React from "react";
import NewsCard from "./NewsCard";
import Ads from "./Ads";

const FeaturedNews = ({ news }) => {
  const sortedAllNews = [...news].sort(
    (a, b) => new Date(b.time) - new Date(a.time)
  );

  const liveNewsItem = sortedAllNews[0];
  const featuredNewsList = sortedAllNews.slice(1, 5);
  const trendingNewsList = sortedAllNews.slice(5, 9);
  const selectionNews = sortedAllNews[10];
  const othersSelectionNews = sortedAllNews.slice(11, 15);
  const remainingNews = sortedAllNews.slice(15);

  return (
    <div className="max-w-6xl mx-auto py-5">
      {/* grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="p-2">
          <img
            src={
              liveNewsItem.image?.srcset?.[8]?.url ||
              liveNewsItem.image?.srcset?.[0]?.url
            }
            alt={liveNewsItem.alt}
            className="w-full h-auto object-cover"
          />
          <h1 className="text-3xl font-bold leading-10 mt-3 hover:underline cursor-pointer">
            {liveNewsItem.title}
          </h1>
          <p className="text-xl mt-2 text-gray-700 line-clamp-3 leading-8">
            {liveNewsItem.description}
          </p>
          <p className="text-gray-500 text-sm mt-2">{liveNewsItem.time}</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {featuredNewsList.map((newsItem) => (
            <div key={newsItem.id} className="p-2 border-b md:border-none">
              <img
                src={
                  newsItem.image?.srcset?.[7]?.url ||
                  newsItem.image?.srcset?.[0]?.url
                }
                alt={newsItem.alt}
                className="w-full h-32 object-cover"
              />
              <h2 className="text-xl font-bold mt-2 hover:underline cursor-pointer line-clamp-2 leading-8">
                {newsItem.title}
              </h2>
              <p className="text-gray-500 text-sm  mt-2">{newsItem.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* trending news */}
      <div className="grid grid-cols-4 gap-3 my-3 ">
        {trendingNewsList.map((newsItem) => (
          <div key={newsItem.id} className="p-2 border-t border-gray-200">
            <h2 className="text-xl leading-8 font-bold mt-2 hover:underline cursor-pointer line-clamp-2">
              {newsItem.title}
            </h2>
            <p className="text-gray-500 text-sm  mt-2">{newsItem.time}</p>
          </div>
        ))}
      </div>

      {/* ads */}
      <Ads></Ads>

      {/* selection news  */}
      <div className="mt-10 ">
        <h2 className="text-2xl font-bold pb-4">নির্বাচিত খবর</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="p-2">
            <img
              src={
                selectionNews.image?.srcset?.[8]?.url ||
                selectionNews.image?.srcset?.[0]?.url
              }
              alt={selectionNews.alt}
              className="w-full h-auto object-cover"
            />
            <h1 className="text-3xl font-bold leading-10 mt-3 hover:underline cursor-pointer">
              {selectionNews.title}
            </h1>
            <p className="text-xl mt-2 text-gray-700 line-clamp-3 leading-8">
              {selectionNews.description}
            </p>
            <p className="text-gray-500 text-sm mt-2">{selectionNews.time}</p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {othersSelectionNews.map((newsItem) => (
              <div key={newsItem.id} className="p-2 border-b md:border-none">
                <img
                  src={
                    newsItem.image?.srcset?.[7]?.url ||
                    newsItem.image?.srcset?.[0]?.url
                  }
                  alt={newsItem.alt}
                  className="w-full h-32 object-cover"
                />
                <h2 className="text-xl font-bold mt-2 hover:underline cursor-pointer line-clamp-2 leading-8">
                  {newsItem.title}
                </h2>
                <p className="text-gray-500 text-sm  mt-2">{newsItem.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ads */}
      <Ads></Ads>

      {/* remaining news */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold pb-4">অন্যান্য খবর</h2>
        <div className="grid grid-cols-4 gap-6 ">
          {remainingNews.map((newsItem) => (
            <NewsCard key={newsItem.id} newsItem={newsItem}></NewsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNews;
