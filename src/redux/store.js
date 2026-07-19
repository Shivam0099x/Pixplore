import { configureStore } from '@reduxjs/toolkit'
import searchReducers from './Features/searchSlice'


export const store = configureStore({
  reducer: {
    search : searchReducers,
  },
})