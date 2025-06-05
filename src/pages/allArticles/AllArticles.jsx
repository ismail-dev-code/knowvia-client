import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router'; 
import { AuthContext } from '../../context/authContext/AuthContext';
import Loading from '../Shared/Loading';

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:3000/articles')
      .then(res => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching articles:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center"><Loading/></div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">All Articles</h2>
      {articles.length === 0 ? (
        <p className="text-center my-24">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article._id} className="border p-4 rounded-xl shadow hover:shadow-md transition">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-xl font-semibold mb-1">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                By <span className="font-medium">{article?.username || user?.displayName}</span>
              </p>
              <p className="text-xs text-gray-400 mb-2">Published on: {article.date}</p>
              <p className="text-gray-700 mb-3">
                {article.content.length > 100
                  ? `${article.content.slice(0, 100)}...`
                  : article.content}
              </p>
            
              <Link to={`/articles/${article._id}`}>
                <button className="bg-base-300 cursor-pointer px-4 py-2 rounded hover:bg-blue-700 hover:text-white">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
