import Hero from '../components/Hero';
import MovieCard from '../components/MovieCard';

const SearchView = ({ keyword, searchResults, returnedSearched }) => {
  const title = `You are searching for ${keyword}`
  if (!returnedSearched) {
    return (
      <>
        <Hero text={title} />
        <div className='alert-secondary my-5 p-3 rounded-2 w-75 mx-auto'>
          No results found for <strong>{keyword}</strong>
        </div>
      </>
    )
  } else {
    const resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />
  })
    return (
      <>
        <Hero text={title} />
        {resultsHtml && (
          <div className='container'>
            <div className='row'>
              {resultsHtml}
            </div>
          </div>
        )}
      </>
    )
  }

};

export default SearchView;
