import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <Link className="navbar-brand" to="#">
        Williams Waterproofing
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Locations
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="dropdown01"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More Designs
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <Link className="dropdown-item" to="#">
                Tile Cut
              </Link>
              <Link className="dropdown-item" to="#">
                Stencil Tile
              </Link>
              <Link className="dropdown-item" to="#">
                Liquid Dazzel
              </Link>
              <Link className="dropdown-item" to="#">
                Designs for Stairs
              </Link>
            </div>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <a
            className="nav-link mr-sm-2 btn btn-outline-info"
            href="mailto:chs95602@yahoo.com"
            style={{ marginRight: "5px" }}
          >
            <i className="fa fa-envelope" />
          </a>
          <a
            className="nav-link btn btn-outline-success my-2 my-sm-0"
            href="tel:916-698-6081"
          >
            <i className="nav-link p-2 fa fa-phone" />
            916-698-6081
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
