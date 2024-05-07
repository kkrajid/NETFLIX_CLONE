import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import {instance} from '../axios'
import {API_KEY,imageUrl} from '../../constants/constants';
import YouTube from 'react-youtube'
import axios from 'axios';
function RowPost(props) {
  const [movies, setMovies] = useState([])
 const[urlId,setUrlId]= useState('')
  useEffect(()=>{
    instance.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
     // alert("network error")
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const handleMovie = (id) =>{
    console.log(id);
    instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>(
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallPost':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            ))
          }
            
            
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key}  />}
    </div>
  )
}

export default RowPost