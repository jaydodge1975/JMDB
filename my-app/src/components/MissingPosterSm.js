import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const MissingPosterSm = (imgName, imgTitle) => {
  if (imgName !== null) {
    const posterUrl = `https://image.tmdb.org/t/p/w500${imgName}`
    return <img src={posterUrl} className='card-img-top' alt={imgTitle} />
  } else {
    return (
      <>
        <div className='missingPosterSm'>
          <div>Movie Poster</div>
          <FontAwesomeIcon icon={faFilm} size="6x" />
          <div>Is Missing</div>
        </div>
      </>
    )
  }
}

export default MissingPosterSm;
