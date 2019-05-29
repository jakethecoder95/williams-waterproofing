import React from "react";
import { Link } from "react-router-dom";

const First = props => {
  return (
    <div className="carousel-item active first-item">
      <div className="container">
        <div className="carousel-caption text-left">
          <h1>Example headline.</h1>
          <p>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus. Nullam id dolor id nibh
            ultricies vehicula ut id elit.
          </p>
          <p>
            <Link className="btn btn-lg btn-primary" to="#" role="button">
              Sign up today
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
