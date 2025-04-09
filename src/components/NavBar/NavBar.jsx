import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="beat-logo"
            src="/media/logos/beat-logo.png"
            alt="Logo-beat"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Mix">
                Mix
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Production">
                Music Production
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Mastering">
                Mastering
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Dj">
                DJ
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Bio">
                Bio
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Academy
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/academy/guitar">
                    <i class="fa-solid fa-guitar"></i> Guitar
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/academy/piano">
                    <img
                      className="ico"
                      src="/public/media/Icons/piano.jpg"
                      alt="Piano"
                    />
                    Piano
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/academy/music-production"
                  >
                    <img
                      className="ico"
                      src="/public/media/Icons/recording.png"
                      alt="mic"
                    />
                    Music Production - Recording
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
