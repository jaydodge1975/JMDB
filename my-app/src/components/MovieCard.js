// import ImageLoader from "../components/ImgLoader";
import MissingPosterSm from './MissingPosterSm';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  if (movie == null) {
    return <div>No movie found</div>
  } else {
    const detailUrl = `/movie/${movie.id}`
    return (
      <div className='col-lg-3 col-md-3 col-2 my-4'>
        <div className="card bg-dark" >
          <div className='card-img-wrapper'>
            {MissingPosterSm(movie.poster_path, movie.original_title)}
          </div>
          <div className="card-body">
            <h5 className="card-title">{movie.original_title}</h5>
            <div className='centerBtn'>
              <Link to={detailUrl} className="btn btn-secondary">Show details</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;
