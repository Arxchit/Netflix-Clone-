import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom'

const TitleCard = ({ title, catageory }) => {
  

  const cardsRef = useRef()
  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWE4NWM4OGFmNTgzOGQ2YzZlNjU0NTg5ZmZjNDkyMiIsIm5iZiI6MTc1OTQ4Nzg4Ni45MjIsInN1YiI6IjY4ZGZhNzhlN2ZjODAzYTRmNTViODZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nEMe7K1CH7YYRqijzU1rYbA_MKsVsqcF36ZnD0wt96M'
    }
  };

 

  const handleWheel = (e) => {
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(() => {

     fetch(`https://api.themoviedb.org/3/movie/${catageory?catageory:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard