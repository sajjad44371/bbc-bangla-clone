import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailsNews = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://news-api-fs.vercel.app/api/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.article);
      });
  }, [id]);

  return (
    <>
      <div className="">
        <div className="">
          <h2 className="text-4xl font-bold leading-15 py-5">
            {details?.title}
          </h2>
          <img
            src={details?.images?.[0]?.url}
            alt={details?.title}
            className="object-cover w-full"
          />
          <p className="py-5 text-xl text-gray-500">{details?.timestamp}</p>
          <p className="text-2xl leading-10">{details?.content}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsNews;
