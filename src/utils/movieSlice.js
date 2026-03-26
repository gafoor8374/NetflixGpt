import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        palyingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.palyingMovies = action.payload
        }
    }
});

export const{addNowPlayingMovies} = movieSlice.actions

export default movieSlice.reducer;