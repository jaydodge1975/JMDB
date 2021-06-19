import Hero2 from '../components/Hero2';
import MpaaRating from '../components/MPAA';
import MissingPosterLg from '../components/MissingPosterLg';
// import Genres from '../components/Genres';
import VideoPlayer from '../components/VideoPlayer';
import Cast from '../components/Cast';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
  const { id } = useParams()
  const [ movieDetails, setMovieDetails ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6dbfefac6de6ecc76ddbd5147477c2e3&language=en-US`)
      .then(respone => respone.json())
      .then(details => {
        // console.log('details')
        // console.log(details)
        setMovieDetails(details)
        setIsLoading(false)
      })

    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=6dbfefac6de6ecc76ddbd5147477c2e3&language=en-US`)
      .then(respone => respone.json())
      .then(similar => {
        // console.log('similar')
        // console.log(similar)
      })

  }, [id])

  function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "hr " + rminutes + "min";
  }

  let runTime = timeConvert(movieDetails.runtime);



  // function castDisplay() {

    // for (let i = 0; i < 20; i++) {

      // charPicUrl.map
    // return (
    //   {charPicUrl.map((charPicUrl) => (
    //     <div className='charPic'><img src={charPicUrl} key={charId} alt='' /></div>
    //   ))}
    // );


    // const castDisplay = () => {

    //   return (
    //     <div className={'charWrapper' + charInfo.id}>
    //     {charInfo.map(charInfo => {
    //       return (
    //         <div className='charInfo' key={charInfo.id}>{charInfo.name}</div>
    //       )
    //     })}
    //     </div>
    //   )
    
    // };


      // <div className={'charWrapper' + charGen}>

      //   <div className='charPic'><img src={charPicUrl} key={charId} alt='' /></div>

      //   <div>{charName}</div>
      //   <div>{charRealName}</div>
      // </div>
  // }




    // if (charPicUrl !== null) {
    //   let picUrl = 'https://image.tmdb.org/t/p/original'
    //   let vaildPicUrl = (picUrl + charPicUrl)
    // } else {
    //   let charPicCheck = 'noPic';
    // }

    // console.log(vaildPicUrl)



  function renderMovieDetails() {
    if(isLoading) {
      return <Hero2 text='Loading...' />
    }
    if(movieDetails) {
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

      return (
        <>
          <Hero2 backdrop={backdropUrl} />
            <div className='movieView container my-3'>
              <div className='row'>
                <div className='leftColumn col-md-4'>

                  <div className='movie-poster'>
                    {MissingPosterLg(movieDetails.poster_path)}
                  </div>
                  <div className='underPoster'>
                    <div className='underLine1'>
                      <div>Release Date:  {movieDetails.release_date}</div>
                      <div>
                          <MpaaRating />
                      </div>
                      <div className='lang'>{movieDetails.original_language}</div>
                    </div>
                    <div className='underLine2'>
                      <div>Run Time:  {runTime}</div>
                      <div>Rating:  {movieDetails.vote_average}</div>
                    </div>
                    <div className='genreContainer'>
                      {movieDetails.genres.map(genresMap => {
                        return (
                          <div className='genres' key={genresMap.id}>{genresMap.name}</div>
                        )
                      })}
                    </div>
                  </div>

              </div>


                <div className='movie-details col-md-8'>
                  <div className='details'>
                    <h1>{movieDetails.original_title}</h1>
                    <h3>{movieDetails.tagline}</h3>
                    <p>{movieDetails.overview}</p>
                  </div>
                      <VideoPlayer />

                      <Cast />

                      {/* <h3>Cast</h3> */}
                      {/* <div className='castMembers'>
                        {castCrew.cast.map(cast => {
                          return (
                            <div className={'charWrapper' + cast.gender} key={cast.cast_id}>
                              <div className='charPic'><img
                                src={'https://image.tmdb.org/t/p/original' + cast.profile_path}
                                // key={cast.id}
                                alt=""
                              /></div>
                              <div className='charName' key={cast.credit_id}>{cast.character}</div>
                              <div className='charRealName' key={cast.id}>{cast.original_name}</div>
                            </div>
                          )
                        })}
                      </div> */}






                  
              {/* {charInfo.name.map(charInfo => {
                return (
                  <div className='charInfo' key={charInfo.id}>{charInfo.name}</div>
                )
              })} */}


                  <h3>Crew</h3>
                  <h3>Collections</h3>
                  <h3>Similar</h3>
                  <div className='testPage'></div>
                  Page End
                </div>


            </div>
          </div>
        </>
      )
    }
  }

  return renderMovieDetails()

};

export default MovieView;
