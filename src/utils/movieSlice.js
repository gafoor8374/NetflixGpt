import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        palyingMovies:null,
        movieTrailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.palyingMovies = action.payload;
        },
        addMovieTrailer:(state, action)=>{
             state.movieTrailer = action.payload;
        },
        addPopulatMovies:(state, action)=>{
             state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=>{
             state.topRatedMovies = action.payload;
        },
        addUpComingMovies:(state, action)=>{
             state.upComingMovies = action.payload;
        }
    }
});

export const{addNowPlayingMovies,addMovieTrailer, addPopulatMovies, addTopRatedMovies, addUpComingMovies} = movieSlice.actions

export default movieSlice.reducer;