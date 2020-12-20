import { configureStore } from '@reduxjs/toolkit';
import blogSlice from '../slice/blogSlice';
import categorySlice from '../slice/categorySlice';

export default configureStore({
  reducer: {
    blogs: blogSlice,
    categories: categorySlice,
  },
});
