import "./Home.scss";
import React from "react";
import { Link } from "react-router-dom";

import Jumbotron from "./Jumbotron";

const Home = props => {
  return (
    <main role="main">
      <Jumbotron />
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <Link class="btn btn-secondary" to="#" role="button">
                View details »
              </Link>
            </p>
          </div>
          <div class="col-md-3">
            <h2>Heading</h2>
            <p>
              Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
              tellus ac cursus commodo, tortor mauris condimentum nibh, ut
              fermentum massa justo sit amet risus. Etiam porta sem malesuada
              magna mollis euismod. Donec sed odio dui.{" "}
            </p>
            <p>
              <Link class="btn btn-secondary" to="#" role="button">
                View details »
              </Link>
            </p>
          </div>
          <div class="col-md-3">
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <Link class="btn btn-secondary" to="#" role="button">
                View details »
              </Link>
            </p>
          </div>
          <div class="col-md-3">
            <h2>Heading</h2>
            <p>
              Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Vestibulum id ligula porta felis euismod
              semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </p>
            <p>
              <Link class="btn btn-secondary" to="#" role="button">
                View details »
              </Link>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </main>
  );
};

export default Home;
