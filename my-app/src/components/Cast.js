import React from 'react';
import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
// import MissingCast from './MissingCast';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

const Cast = () => {
  const { id } = useParams()
  // const [ movie, setMovie ] = useState()

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6dbfefac6de6ecc76ddbd5147477c2e3&language=en-US`)
    .then(respone => respone.json())
    .then(castCrew => {


      // ! Pull all the cast arrays
      // const cast = castCrew.cast
      // let castArrCount = cast.length
      // for(let listCast = 0; listCast < castArrCount; listCast++){
      //   let charInfo = cast.[listCast]
      //   console.log(charInfo)
      //   setCast(charInfo)
      // }

      // setMovie(castCrew)

      // console.log(castCrew)
      // console.log(typeof castCrew.cast.map)

      // let DisplayInner = castCrew.map((outterArrays) => outterArrays.cast.map((innerArr) => innerArr.name))

      // console.log(typeof DisplayInner)

    })

    // console.log(movie.cast)
    // console.log(movie.crew)

    // let cast = movie.cast
    // console.log(movie.cast)

  }, [id])

    return (
      <>
        <h3>Cast</h3>
        <div className='castMembers'>

          {/* {console.log(cast.[0].character)} */}
          {/* {cast.[0].character} */}



          {/* {console.log(typeof movie.map)} */}

          {/* {movie.cast.map(castInfo => {
            return (
              castInfo
            )
          })} */}

          


          {/* </div>{movie.cast.map(castMap => {
            return (


            <div className={'charWrapper' + castMap.gender} key={castMap.cast_id}>
              <div className='charPic'><img
                src={'https://image.tmdb.org/t/p/original' + castMap.profile_path}
                key={castMap.original_name}
                alt=""
              /></div>
              <div className='charName' key={castMap.character}>{castMap.character}</div>
              <div className='charRealName' key={castMap.credit_id}>{castMap.original_name}</div>
            </div>


            )
          })} */}

        </div>
      </>
    )
  };

export default Cast;
