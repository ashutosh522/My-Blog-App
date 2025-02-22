import { createSlice } from "@reduxjs/toolkit";
import { nanoid, customAlphabet } from "nanoid";
const initialState = {
  
  formData: {
    title: '',
    description: '',
    id: nanoid(5)
  },
  blogList: []
};

export const blogListSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      //console.log(action);

      let copyFormData = { ...state.formData };
      copyFormData = {
        ...copyFormData,
        ...action.payload
      };
      state.formData = copyFormData;
    },
    handleFormSubmit: (state, action) => {
      
      //console.log(action);
      state.blogList.push({
        id: nanoid(5),
        ...state.formData
      })


      state.formData = {
        title: '',
        description: ''
      }
      localStorage.setItem("bloglist", JSON.stringify(state.blogList))
    },
    handleDelBtn: (state, action) => {
      //console.log(action.payload);
      const { payload } = action;
      const { currentBlogId } = payload;
      let copyBlogList = [...state.blogList]
      copyBlogList = copyBlogList.filter(item => item.id !== currentBlogId)
      state.blogList = copyBlogList
      localStorage.setItem("bloglist", JSON.stringify(copyBlogList))
    },

    setBlogOnInitialLoad: (state, action) => {
      state.blogList = action.payload.bloglist

    }
  }

});



export const { handleInputChange, handleFormSubmit,setBlogOnInitialLoad, handleDelBtn } = blogListSlice.actions;
export default blogListSlice.reducer;