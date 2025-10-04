import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWE4NWM4OGFmNTgzOGQ2YzZlNjU0NTg5ZmZjNDkyMiIsIm5iZiI6MTc1OTQ4Nzg4Ni45MjIsInN1YiI6IjY4ZGZhNzhlN2ZjODAzYTRmNTViODZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nEMe7K1CH7YYRqijzU1rYbA_MKsVsqcF36ZnD0wt96M'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img
        src={back_arrow_icon}
        alt="Back"
        className="back-arrow"
        onClick={() => navigate(-1)} // ✅ Correct usage
      />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>
          {apiData?.published_at
            ? new Date(apiData.published_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })
            : ""}
        </p>

        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
