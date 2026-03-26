import React from 'react'
import { IMG_URL } from '../utils/constants'

const MovieCard = ({posterpath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt="Movie Poster" src={IMG_URL+ posterpath}/>
    </div>
  )
}

export default MovieCard