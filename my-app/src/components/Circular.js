// taken from https://codesandbox.io/s/fallback-image-for-a-broken-image-in-reactjs-forked-ldij9?file=/src/ImageLoader/circular.js:0-577
// Source for the spinner taken from https://codepen.io/jczimm/pen/vEBpoL
import React, { Component } from "react";

//Loading CSS
import ".//css/Circular.css";

class Circular extends Component {
  render() {
    return (
      <div className="loader">
        <svg className="circular" viewBox="25 25 50 50">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    );
  }
}

export default Circular;
