import React from 'react';

const NewsCard = ({ title, description, author, url, image }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden mb-6 flex flex-col md:flex-row">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/3 h-60 object-cover"
        />
      )}
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-700">
            {description ? description.slice(0, 200) + '...' : 'No description available.'}
          </p>
           <p className="text-gray-700">
            {author ? author.slice(0, 200) + '...' : 'No author available.'}
          </p>
         
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline mt-3 font-medium"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
