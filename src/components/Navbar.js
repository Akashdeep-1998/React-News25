import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsBites
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">All</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">National</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Business</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">World</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Politics</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Technology</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Startup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Science</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Automobile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
