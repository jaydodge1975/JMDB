import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import TvView from './views/TvView';
import PeopleView from './views/PeopleView';
import PopularView from './views/PopularView';
import AboutView from './views/AboutView';
import SearchView from './views/SearchView';
import MovieView from './views/MovieView';
import ErrorView from './views/ErrorView';
import { Switch, Route } from 'react-router-dom';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [returnedSearched, setReturnedSearched] = useState(false);

  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=6dbfefac6de6ecc76ddbd5147477c2e3&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
          if (data.results.length > 0) {
            setReturnedSearched(true)
          } else {
            setReturnedSearched(false)
          }
        })
    }
  }, [searchText])

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path='/' exact component={HomeView} />
        <Route path='/movies' component={MoviesView} />
        <Route path='/tv' component={TvView} />
        <Route path='/people' component={PeopleView} />
        <Route path='/popular' component={PopularView} />
        <Route path='/about' component={AboutView} />
        <Route path='/search'>
          <SearchView
            keyword={searchText}
            searchResults={searchResults}
            returnedSearched={returnedSearched}
          />
        </Route>
        <Route path='/movie/:id' component={MovieView} />
        <Route component={ErrorView} />
      </Switch>
    </>
  );
}

export default App;
