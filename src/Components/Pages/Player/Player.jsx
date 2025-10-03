import React from 'react'
import { useEffect } from 'react'
import { useState}  from 'react'
import './Player.css'
import back_arrow_icon from '../../../assets/back_arrow_icon.png'

const Player = () => {

  const [apiData, setApiData] = useState({
    name : "",
    key : "",
    publised_at : "",
    typeof : "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWE4NWM4OGFmNTgzOGQ2YzZlNjU0NTg5ZmZjNDkyMiIsIm5iZiI6MTc1OTQ4Nzg4Ni45MjIsInN1YiI6IjY4ZGZhNzhlN2ZjODAzYTRmNTViODZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nEMe7K1CH7YYRqijzU1rYbA_MKsVsqcF36ZnD0wt96M'
    }
  };

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/713704/videos?language=en-US', options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" className="back-arrow" />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
