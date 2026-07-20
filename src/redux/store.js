import { configureStore } from '@reduxjs/toolkit'
import searchReducers from './Features/searchSlice'
import collectionReducers from './Features/collectionSlice'


export const store = configureStore({
  reducer: {
    search : searchReducers,
    collection : collectionReducers
  },
})