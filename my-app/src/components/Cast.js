import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import MissingCast from './MissingCast';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

const Cast = () => {
  const { id } = useParams()
  const [ cast, setCast ] = useState({})

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6dbfefac6de6ecc76ddbd5147477c2e3&language=en-US`)
    .then(respone => respone.json())
    .then(castCrew => {
      let cast = castCrew.cast
      console.log(cast)
      setCast(cast)
    })

  }, [id])

    return (
      <>
        <h3>Cast</h3>
        <div className='castMembers'>

          {cast.map(castMap => {
            return (
              <div className={'charWrapper' + castMap.gender} key={castMap.character}>
                <div className='charPic'><img
                  src={'https://image.tmdb.org/t/p/original' + castMap.profile_path}
                  key={castMap.original_name}
                  alt=""
                /></div>
                <div className='charName' key={castMap.cast_id}>{castMap.character}</div>
                <div className='charRealName' key={castMap.credit_id}>{castMap.original_name}</div>
              </div>
            )
          })}

        </div>
      </>
    )
  };

export default Cast;
