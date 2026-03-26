

# New Project- Netflix-Gpt

- create-react-app
- configure tailwind version 3
- header
- Routing
- login 
- sign up
- Form validation through regex help
- useRef
- use firebase for deploy and authencation process
- create a signup user account
- Ccraete sign in user api
- create redux store into userSlice
- implement signout feature
- update profile api
- update navigate feature.
- update the navigate into child component to router into header 
- unsubscribe to the onAuthStateChanged 
- ADD hard coded values to the constants file
- Registere with TMDB for crating access token and key 
- Get data from TMDB now playing movie API
- custom hook for noe playin movies
- create movieslice
- update the movie data in movies
- In browse page 
  - Main movie contaniner
   - video background
   - video title
   - info
 - Movie List Container
  - frame movie
  - movie title
- fetch data from trailer video data
- update the store with tailerdata
- embede the youtube video and autoplay and mute
- ssecond container
- movie List
- movie card
- TMDB IMG. CDN


## Video background ### using state variable is here
import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackGround = ({ movieId }) => {

  const [trailer, setTrailer ] = useState(null);

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
    console.log(trailerData);
    setTrailer(trailerData);
  };
  return (
    <div>
      {trailer && <iframe
        src={"https://www.youtube.com/embed/"+ trailer.key}
        title="YouTube video player"
    
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>}
    </div>
  );
};

export default VideoBackGround;

# Planing to our app
- login Page(before authentication)
  -sign in / sing up page
  -redirect to browser page
- # BROWSER PAGE(after authentication)
  - Header
   - Main movie
     - movie tailer backgroung
     - movie name and description
     - Movie List * N
- Netflis GPT
 - Sarch bar
 - movie suggestion



 1. We can create a Login, body, browse components
 2. We install the rect-router-dom as a dependencies npm i -D
 3. Used for routing in React apps
 4. Handles pages like:

 form validation then use ### formik library ###