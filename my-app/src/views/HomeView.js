import Hero from '../components/Hero';

const HomeView = () => {
  return (
    <>
      <div className='home-background'>
        <Hero text="Welcome To Jay's Movie Data Base." />
        <div className='home-container container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <h2>Search the database to find.</h2>
              <h3 className='homeMoto'>Millions of movies, TV shows and people. Explore now.</h3>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default HomeView;
