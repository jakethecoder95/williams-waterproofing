import React from "react";

const First = props => {
  return (
    <div className="carousel-item active first-item">
      <div className="container">
        <div className="carousel-caption text-left">
          <h1>Honest and Reliable Estimates.</h1>
          <p>
            Whether it’s our quick, quality, friendly service or the honesty and
            value we bring to every interaction, our customers love us.
          </p>
          <p>
            <a
              className="btn btn-lg btn-primary"
              href="tel:916-698-6081"
              role="button"
            >
              <i className="nav-link p-2 fa fa-phone" />
              Get an estimate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default First;
