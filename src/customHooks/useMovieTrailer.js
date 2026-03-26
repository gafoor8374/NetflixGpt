import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";


const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
  useEffect(() => {
    trainerVideo();
  }, []);
  const trainerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS,
    );

    const json = await data.json();
    // console.log(json.results);

    const filterData = json.results.filter((video)=>video.type == "Trailer");
    const trailerData = filterData.length ? filterData[0] : json.results[0]; // fallback
    dispatch(addMovieTrailer(trailerData));
  };
};

export default useMovieTrailer;