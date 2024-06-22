import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setArticles , setError } from '../ArticleStore/articleSlice';

function SearchBar() {
  const {page ,error} = useSelector(state => state)
  const dispatch = useDispatch();
  const handleNews = async (query) => {
    try {
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
  const handleSearchEvent = (e) => {
    if(e.key === "Enter"){
      handleNews(e.target.value);
    }
  }
  
  return (
    <div>
      <input type='text' className='border-2 border-[gray] rounded-md text-sm px-4 py-1' placeholder='Business,Technology....' onKeyDown={handleSearchEvent}/>
    </div>
  )
}

export default SearchBar
