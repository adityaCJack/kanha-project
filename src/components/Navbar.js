import React from "react";

//Navbar further catogeries further into 3 parts

function Navbar() {
  return (
    <>
      <div className="top-nav py-2">
        <div className="container ">
          <div className="d-flex justify-content-end">
            <button className="btn btn-warning">View cart</button>
            <button className="btn btn-dark ms-2 ">Order History</button>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light middle-nav">
        <div className="container">
          <a className="navbar-brand text-white fs-2" href="#">
            SITE LOGO
          </a>

          <div className="" id="navbarSupportedContent">
            <form className="d-flex ms-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light middle-nav">
        <div className="container">
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list text-white fs-4"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="col-lg-3"></div>
            <ul className="navbar-nav me-auto fs-6">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link">|</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link">|</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link">|</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link">|</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  News
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link">|</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Support
                </a>
              </li>
              <li className="nav-item d-none d-lg-block">
                <a className="nav-link">|</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item fs-5">
                <a className="nav-link " href="#">
                  800-888-8888
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
