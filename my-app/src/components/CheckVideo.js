const checkVideo = (imgName, imgTitle) => {
  if (imgName !== null) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${imgName}`
    return <img src={posterUrl} className='card-img-top' alt={imgTitle} />
  } else {
    return (
      <div>
        <img
          src={noImg}
          className='card-img-top no-img-card'
          alt='Poster missing'
        />
        <div className='no-img-info'></div>
      </div>
    )
  }
}

export default checkVideo;
