import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          <a className="navbar-brand" href="/">
            Uber
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            {/* Left side of the navbar */}
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  Ride
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  Drive
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  Business
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>

            {/* Right side of the navbar */}
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/login">
                <i class="fa-solid fa-globe mx-2"></i>
                  EN
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/signup">
                  Help
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/login">
                  Log in
                </a>
              </li> 
              <li className="nav-item mx-2">
                <a className="btn btn-light rounded-pill" href="/signup">
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
