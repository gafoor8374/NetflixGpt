import React, { useEffect, useState } from 'react'

const VideoTitle = ({Info}) => {
const [info, setInfo] = useState(true);

useEffect(()=>{
setTimeout(()=>{
setInfo(false);

},5000);
 clearInterval();
},[info])
   const  {original_title, overview} = Info;
  return (
    <div className='w-screen aspect-video pt-36 px-12 absolute  text-white'>

        <h1 className='font-bold text-4xl w-1/4 p-4'>{original_title}</h1>
        {info && <p className='text-lg w-1/4 p-4 transition-opacity'>{overview}</p>}

        <div className='m-2'>
            <button className='bg-gray-500 text-white p-4 wx-4 rounded-lg px-8'>▶️ Play</button>
            <button className='bg-gray-500 text-white p-4 wx-4 rounded-lg px-8 m-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;