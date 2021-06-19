import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const MissingCast = (cast) => {
  if (cast.profile_path !== null) {
      <div className='charPic'><img
        src={'https://image.tmdb.org/t/p/original' + cast.profile_path}
        // key={cast.id}
        alt=""
      /></div>
  } else {
  return (
    <div className='charPic'>
      <div className='missingCrew'>
        <FontAwesomeIcon icon={faUser} size="2x" />
      </div>
    </div>
  )}

}

export default MissingCast;
