import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cast = () => {

  const { id } = useParams();
  const [ movie, setMovie ] = useState({})

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6dbfefac6de6ecc76ddbd5147477c2e3&language=en-US`)
    .then(respone => respone.json())
    .then(castCrew => {

      // ! Pull all the cast arrays
      // const cast = castCrew.cast
      // let castArrCount = cast.length
      // for(let listCast = 0; listCast < castArrCount; listCast++){
      //   let charInfo = cast.[listCast]
      //   setMovie(charInfo)
      // }
      // console.log('Before')
      // console.log(castCrew)
      setMovie(castCrew)
    })

  }, [id])

  function renderCast() {

    return (
      <>
        <h3 className='castMembersTitle'>Cast and Characters</h3>
        <div className='castMembers'>

          {/* {console.log('After')} */}
          {console.log(movie)}
          {/* {console.log(typeof movie)} */}

          {/* {movie.cast.map(castMap => {
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
  }

  return renderCast()

};

export default Cast;
