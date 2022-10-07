import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
      <div>

        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand fs-3" to="/">
              News25
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/national">
                    National
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/world">
                    World
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/politics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/startup">
                    Startup
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item mx-1">
                  <Link className="nav-link" to="/automobile">
                    Automobile
                  </Link>
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
