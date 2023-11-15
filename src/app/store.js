import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import postReducer from "../features/posts/postSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postReducer,
    },
});

export default store