import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name:'search',
    initialState :{
        query : '',
        activeTab : 'photos',
        result : [],
        loading : false,
        error: null
    },
    reducers:{
       setQuery : (state,action)=>{
          state.query = action.payload
       },
       setActiveTabs : (state,action)=>{
          state.activeTab = action.payload
       },
       setResults : (state,action)=>{
          state.result = action.payload
          state.loading = false;
       },
       setLoading : (state,action)=>{
          state.loading = true,
          state.error = null
       },
       setErrors : (state,action)=>{
          state.error = action.payload
          state.loading = false
       },
       clearResults:(state)=>{
        state.result = []
       }
    }
})


export const {setQuery, setErrors, setLoading, setResults, setActiveTabs, clearResults } = searchSlice.actions
export default searchSlice.reducer