import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    articles : [],
    query : "bussiness",
    page : 1,
    error : "",
    clickedArticle : {}
}
const articleSlice = createSlice({
    name : "article",
    initialState,
    reducers : {
        setArticles : (state , action) => {
            state.articles = [...action.payload]
        },
        setPage : (state , action) => {
            state.page = action.payload
        },
        setQuery : (state,action) => {
            state.query = action.payload.toLowerCase();
        },
        setError : (state , action) => {
            state.error = action.payload;
        },
        setClickedArticle : (state , action) => {
            state.clickedArticle  = action.payload;
        }
    }
})

export const {setArticles , setPage , setQuery,setError,setClickedArticle} = articleSlice.actions;
export default articleSlice.reducer;
