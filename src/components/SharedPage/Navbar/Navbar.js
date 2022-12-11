import React from "react";
import "./Navbar.css";
import Logo from '../../../images/weblogo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          <img className="logo" src={Logo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link mr-5 font-weight-bold" to="#">
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mr-5 font-weight-bold" to="#">
                About
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mr-5 font-weight-bold" to="#">
                Dental Services
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mr-5 font-weight-bold" to="#">
                Reviews
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mr-5 font-weight-bold" to="#">
                Blog
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mr-5 font-weight-bold" to="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
