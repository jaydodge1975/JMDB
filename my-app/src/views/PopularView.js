import Hero from '../components/Hero';

const PopularView = () => {
  return (
    <>
      <Hero text="Popular" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
              <h2>Movies</h2>
              <h2>TV Shows</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularView;
