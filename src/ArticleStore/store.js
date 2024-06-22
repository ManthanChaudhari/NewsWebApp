import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./articleSlice"

const store = configureStore(
    {
        reducer : articleReducer
    }
)
export default store;