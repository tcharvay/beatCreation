import "./NavBar.css";

import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img className="beat-logo" src="/media/logos/beat-logo.png" alt="Logo-beat" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
             data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            href='../Home/Home.jsx'
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Mix
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Music Production
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Mastering
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  DJ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bio
                </a>
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
                    <a className="dropdown-item" href="#">
                      Guitar
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Piano
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Music Production - Recording
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
