import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  function loginBtnClick() {
    if (document.getElementById("navLoginBtn").innerText == "Login") {
      document.getElementById("loginForm").reset();
      document.getElementById("bgPage").style.overflow = "hidden";
      document.getElementById("login").style.display = "block";
    } else {
      props.setUser(null, null);
      document.getElementById("navLoginBtn").innerText = "Login";
      document.getElementById("addContent").style.display = "none";
      document.getElementById("manageContent").style.display = "none";
      document.getElementById("navSignupBtn").style.display = "block";
    }
  }
  function signupBtnClick() {
    document.getElementById("signupForm").reset();
    document.getElementById("bgPage").style.overflow = "hidden";
    document.getElementById("signup").style.display = "block";
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="addContent"
                  className="nav-link active"
                  aria-current="page"
                  to="/addContent"
                  style={{ display: "none", textDecoration: "none" }}
                >
                  Add Content
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  id="manageContent"
                  className="nav-link active"
                  aria-current="page"
                  to="/manageContent"
                  style={{ display: "none", textDecoration: "none" }}
                >
                  Manage Content
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />

                  <button className="btn btn-outline-info" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li>
                <button
                  id="navLoginBtn"
                  className="btn btn-info"
                  type="button"
                  onClick={loginBtnClick}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="mx-2 btn"
                  id="navSignupBtn"
                  type="button"
                  style={{ backgroundColor: "#ec8b24" }}
                  onClick={signupBtnClick}
                >
                  SignUp
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
