import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setError , setArticles } from '../ArticleStore/articleSlice';

function Category() {
  const page = useSelector(state => state.page);
  const dispatch = useDispatch();
  const [query , setQueryParam] = useState("");
  const categories = [
    "Business",
     "Technology",
     "Sports",
    "Politics"
  ]
  const handleNews = async (query) => {
    try {
      dispatch(setArticles([]));
      const fetchArticle = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${
          import.meta.env.VITE_API_KEY
        }&pageSize=${10}&page=${page}`
      );
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
  const handleClick = (categ) => {
  // console.log(e);
   setQueryParam(categ);
   handleNews(categ)
  }
  return (
    <div className='bg-[#f5f5f5] px-2 py-3 w-[120px] shadow-lg absolute top-[100%] lg:left-[-100%] right-0'>
      <ul className='flex flex-col gap-y-3 lg:items-end'>
      {
        categories.length && categories.map((categ , index) =>
          <li className='hover:text-gray-800' key={index} onClick={() => handleClick(categ)}>{categ}</li>
         )
      }
      </ul>
    </div>
  )
}

export default Category
