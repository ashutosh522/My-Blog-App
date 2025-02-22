// This store will have all the state logics which are required.
// This is the main store of the application.
//This store will take multiple reducers and then combine them into a single one.


import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/counter"
import blogReducer from "./slices/blogList"

const store= configureStore({
  reducer: {
    counter: CounterReducer,
    blog: blogReducer
  }
})

export default store;