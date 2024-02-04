import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
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
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>

        {/* <div className="d-flex">
          <div
            className="bg-primary rounded mx-2"
            onClick={() => {
              props.toggleDarkMode("primary");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>

          <div
            className="bg-success rounded mx-2"
            onClick={() => {
              props.toggleDarkMode("success");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>

          <div
            className="bg-warning rounded mx-2"
            onClick={() => {
              props.toggleDarkMode("warning");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>

          <div
            className="bg-danger rounded mx-2"
            onClick={() => {
              props.toggleDarkMode("danger");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>

          <div
            className="bg-dark rounded mx-2"
            onClick={() => {
              props.toggleDarkMode("dark");
            }}
            style={{ height: "30px", width: "30px", cursor: "pointer" }}
          ></div>
        </div>

        <div
          className="bg-light rounded mx-2"
          onClick={() => {
            props.toggleDarkMode("light");
          }}
          style={{ height: "30px", width: "30px", cursor: "pointer" }}
        ></div> */}

        <div
          className={`custom-control custom-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            // onClick={()=>props.toggleDarkMode(null)}
            onClick={()=>props.toggleDarkMode(null)}
          />
          <label className="custom-control-label" htmlFor="customSwitch1">
            Enable DarkMode
          </label>
        </div>

        {/* <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch2"
            onClick={props.toggleBlueMode}
          />
          <label className="custom-control-label" htmlFor="customSwitch2">
            Enable BlueMode
          </label>
        </div> */}

        {/* <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch3"
            onClick={props.toggleRedMode}
          />
          <label className="custom-control-label" htmlFor="customSwitch3">
            Enable RedMode
          </label>
        </div> */}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired, // now its necessary to give value , undefined will give error
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  // if value is not assigned then , these default values are provided
  title: "Title here",
  aboutText: "About",
};
