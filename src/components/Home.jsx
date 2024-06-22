import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClickedArticle, setArticles, setPage, setQuery } from "../ArticleStore/articleSlice";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
function Home() {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles);
  const query = useSelector((state) => state.query);
  const page = useSelector((state) => state.page);
  const navigate = useNavigate();
  const handleNews = async () => {
    try {
      // const fetchArticle = await fetch(
      //   `https://newsapi.org/v2/everything?q=${query}&apiKey=${
      //     import.meta.env.VITE_API_KEY
      //   }&pageSize=${100}&page=${page}`
      // );
      const fetchArticle = await fetch(`https://newsapi.org/v2/top-headlines?country=us&pageSize=${10}&page=${page}&apiKey=${import.meta.env.VITE_API_KEY}&`);
      const data = await fetchArticle.json();
      if (data && data.articles) {
        dispatch(setArticles(data.articles));
        console.log(data.articles);
      }
    } catch (error) {
      console.log(error);
      dispatch(setError(error.message));
    }
  }; 
  const detailedView = (article) => {
    dispatch(setClickedArticle(article));
    navigate("/detail");
  }
  useEffect(() => {
    handleNews();
  }, [query, page]);
  return (
    <>
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 py-20 lg:p-4 mb-20">
    {error && <p className="text-center text-red-500">{error}</p>}

      {article && article.length 
        ? article.map((article, index) => (
             <div
              className="max-w-sm bg-[#e9e9e9] border border-gray-200 rounded-lg shadow-lg h-[500px]"
              key={index}
            >
                {article.urlToImage ? <img className="rounded-t-lg w-full h-[40%]" src={article.urlToImage} alt="" /> : <div className="rounded-t-lg w-full h-[40%] flex justify-center items-center">We don't have enough data!</div>}
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-black">
                    {article.title || "we don't have full information about this article"}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-black-300 text-sm">
                  {article.description ? article.description.slice(1,100) : "Sorry we don't have enough about this article "}....
                </p>
                <button
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={() => detailedView(article)}
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div> 
          
          ))
        : <div className="w-full h-screen">Loading...</div>}
    </div>
    <Pagination/>
    </>
  );
}

export default Home;
