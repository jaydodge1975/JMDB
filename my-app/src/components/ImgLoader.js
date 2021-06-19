import React, { Component, Fragment } from "react";
import CircularSpinner from "./Circular";

class ImageLoader extends Component {

  state = {
    src: `https://image.tmdb.org/t/p/w500`,
    // src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    fallbackSrc: `./missing_poster.jpg`,
    loaded: false,
    error: false
  };

  onImageLoaded = () => {
    this.setState({ loaded: true });
  };

  onImageError = () => {
    this.setState({ error: true });
  };

  render() {
    const { src, loaded, fallbackSrc, error } = this.state;
    let imgSrc = !error ? src : fallbackSrc;

    return (
      <Fragment>
        <div className="image-container">
          <img
            src={imgSrc}
            onLoad={this.onImageLoaded}
            onError={this.onImageError}
            alt=''
          />
          {!loaded && (
            <div className="image-container-overlay">
              <CircularSpinner />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default ImageLoader;
