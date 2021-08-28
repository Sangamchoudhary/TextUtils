import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-1 my-1"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-danger rounded mx-1 my-1"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-warning rounded mx-1 my-1"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div className="d-flex">
            <div
              className="bg-success rounded mx-1 my-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          <div
            className={`form-check my-2 mx-2 form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={() => {
                props.toggleDarkMode();
              }}
            />
            Dark Mode
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "title here",
};
