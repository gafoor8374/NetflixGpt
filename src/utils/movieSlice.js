import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        palyingMovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.palyingMovies = action.payload;
        },
        addMovieTrailer:(state, action)=>{
             state.movieTrailer = action.payload;
        }
    }
});

export const{addNowPlayingMovies,addMovieTrailer} = movieSlice.actions

export default movieSlice.reducer;