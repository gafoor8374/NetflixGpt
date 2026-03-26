import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopulatMovies } from "../utils/movieSlice";


const usePopularMovies = ()=>{

    const dispatch = useDispatch()
    const getPopularmovies = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);

        const json = await data.json();
        // console.log(json.results);
        dispatch(addPopulatMovies(json?.results));

    }
useEffect(()=>{
    getPopularmovies()
},[])
}

export default usePopularMovies;