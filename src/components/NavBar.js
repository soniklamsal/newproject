import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function NavBar({ title = "TextUtilsD", aboutText = "About UsD", mode = "light" }) {
  return (
    <nav className={`navbar bg-${mode}`} data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{title}</a> {/* Use Link instead of a tag */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">{aboutText}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">textform</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
};
