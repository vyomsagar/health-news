import React, { useEffect, useState } from "react";

export const NewsSection = ({ category }) => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${category}&apiKey=7bb9446d6c574e81b47539aaf8721c1e`
        );

        const data = await response.json();
        // console.log("Fetch the data ", data);
        if (Array.isArray(data.articles)) {
          setNewsList(data.articles);
        } else {
          setNewsList([]);
        }
      } catch (error) {
        console.error("Error fetching news: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category]);

  return (
  <div className="p-4 w-full max-w-[1300px] mx-auto bg-sky-100">
    <h2 className="text-2xl font-bold text-center mb-4 text-green-700">
      {category} News
    </h2>

    {loading ? (
      <p className="text-center text-gray-500">Loading...</p>
    ) : newsList.length > 0 ? (
      <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-sky-100">
        {newsList.map((article, index) => (
          <div
            key={index}
            className="bg-sky-100 shadow-md rounded-xl p-4 flex flex-col justify-between h-full"
          >
            <img
              src={
                article.urlToImage || "https://via.placeholder.com/400x200"
              }
              alt="news"
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h3 className="font-bold text-lg mb-1">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {article.description?.slice(0, 100)}...
            </p>
            <div className="mt-auto flex justify-between items-center w-full">
              <span className="text-xs text-gray-500 italic">
                {article.author ? `By ${article.author}` : "By Unknown"}
              </span>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-red-500">No news available.</p>
    )}
  </div>
);

};
