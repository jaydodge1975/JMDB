import Hero from '../components/Hero';

const AboutView = () => {
  return (
    <>
      <Hero text="About React 201 Project" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
          <h2>React 201 project:</h2>
              <p className="lead">
                You will be creating a movie browser that's API driven. There's a search function,
                movie detail view, about page, all built into a single page application / progressive web application.
              </p>
              <p className="lead">
                There are tasks I have purposely left out of this project for you to solve on your own. This is
                VERY similar to a take home assignment that a company will give you when you apply to work with
                them.
              </p>
              <p className="lead">Just a few bugs that have not been solved yet:</p>
              <ul className="lead">
                <li>Done:  Sometimes a search result doesn't have an image</li>
                <li>Done:  If No Rating is found display MPAA NR = No Rating</li>
                <li>Done:  run time and break down to hr and min</li>
                <li>Done:  There is no handler if there are no search results</li>
                <li>Done:  I might have a issue if the MPAA doesn't find US</li>
                <li>Done:  Missing Poster fuzzy in movie view - converted to font awesome</li>
                <li>Done:  Sticky left column</li>
                <li>Done:  There is no 404 page - page done but doesn't get trigger yet</li>
                <li>The search button in the navigation doesn't work</li>
                <li>TODO:  Fix Loader</li>
                <li>TODO:  <span className='lineStrike'>No Missing Poster in movie view</span>  - Need to catch error</li>
                <li>TODO:  Disable React Player if no Trailer URL is given</li>
                <li>TODO:  Add a to watch list</li>
                <li>TODO:  Add watched Icon</li>
                <li>TODO:  Video File saved on NAS</li>
                <li>TODO:  Movie part of collection</li>
                <li>TODO:  Add Cast info</li>
                <li>TODO:  What about other titles?</li>
                <li>TODO:  Brain Divided - wrong name, no run time, no trailer</li>
                <li>TODO:  People Search</li>
                <li>TODO:  Possible sticky on/off for the trailer</li>
                <li>TODO:  Possible movie/tv title in title of app with JMDB append</li>
                <li>TODO:  Fix mobile view</li>

              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
