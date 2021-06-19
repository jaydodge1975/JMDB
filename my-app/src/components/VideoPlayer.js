import ReactPlayer from "react-player";
// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VideoPlayer = () => {

  const { id } = useParams()
  // const [ movieKey, setMovieKey ] = useState()
  const [ movieVideos, setMovieVideos ] = useState({})

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=6dbfefac6de6ecc76ddbd5147477c2e3&language=en-US`)
    .then(respone => respone.json())
    .then(videos => {
      // console.log('Trying to catch missing youTube link')
      // const ytKey = videos.results.[0].key
      const ytArr = videos.results
      if (ytArr.length !== 0) {
        // console.log('Founded Trailer')
        const ytKey = ytArr.[0].key
        const ytUrl = `https://www.youtube.com/watch?v=${ytKey}`
        // console.log(ytUrl)
        // setMovieKey(ytKey)
        setMovieVideos(ytUrl)
      } else {
        // console.log('Trailer Missing')
      }
    })

  }, [id])



  // const checkVideo = (ytArr, movieVideos) => {
  //   if (ytArr !== 0) {
  //     return (
  //         <>
  //         <div className='player-wrapper'>
  //             <ReactPlayer
  //               className='react-player'
  //               url = {`${movieVideos}.ytp-scroll-min.ytp-pause-overlay`}
  //               // key = {movieKey}
  //               width = '63%'
  //               height = '100%'
  //               controls = {true}
  //               />
  //         </div>
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         <div className='no-video-info'>No Trailer</div>
  //       </>
  //     )
  //   }
  // }


    return (
      <>
        {/* // TODO: need to figure out error for 'I'm reed fish' */}
        <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url = {`${movieVideos}.ytp-scroll-min.ytp-pause-overlay`}
              width = '100%'
              height = '100%'
              controls = {true}
              />
        </div>
      </>
    )

};

export default VideoPlayer;
