import Hero from '../components/Hero';

const AboutView = () => {
  return (
    <>
      <Hero text="About The JMDB Project" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-1">
          <h2>Projects TODO List</h2>
              <ul className="lead">
                <li>Done:  There is no 404 page</li>
                <li>Done:  Sometimes a search result doesn't have an image</li>
                <li>Done:  There is no handler if there are no search results</li>
                <li>Done:  Missing Poster fuzzy in movie view - converted to font awesome</li>
                <li>Done:  If No Rating is found display MPAA NR = No Rating</li>
                <li>Done:  Runtime and break down to hr and min</li>
                <li>Done:  I might have a issue if the MPAA doesn't find US</li>
                <li>Done:  Sticky left column</li>
                <li>TODO:  The search button in the navigation doesn't work</li>
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
                <li>TODO:  page selector and fetch more results</li>
                <li>TODO:  Stuff under the poster in movie view should be in a wrapper with the poster.</li>
                <li>TODO:  Line height of the lang badge has issues when on smaller screens</li>

              </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
