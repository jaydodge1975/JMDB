import movieDetails from "../views/MovieView";

const Genres = () => {

  return (
    <div className='genreContainer'>
    {movieDetails.genres.map(genres => {
      return (
        <div className='genres' key={genres.id}>{genres.name}</div>
      )
    })}
    </div>
  )

};

export default Genres;
