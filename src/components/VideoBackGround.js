import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackGround = ({ movieId }) => {

  const trailerVideo = useSelector((store)=>store.movies?.movieTrailer);
   useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      {trailerVideo && <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+ trailerVideo.key+"?autoplay=1&mute=1&controls=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        // referrerPolicy="strict-origin-when-cross-origin" 
      ></iframe>}
    </div>
  );
};

export default VideoBackGround;
