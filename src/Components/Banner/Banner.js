import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants';
import './Banner.css';
import {instance} from '../axios'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    instance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[2])
      setMovie(response.data.results[2])
    })
  }, [])
  
  return (

    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='discription'>{movie?movie.overview:''}</h1>

        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner