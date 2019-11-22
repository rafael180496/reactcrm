import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex  mb-4">
          <div className="container">
            <Link to="/" className="navbar-brand text-light font-weight-bold">
              {this.props.name}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navegacion"
              aria-controls="navegacion"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
              <ul className="navbar-nav ml-auto text-right">
                <li className="nav-item active">
                  <Link to="/cliente/nuevo" className="btn btn-success">
                    Nuevo Cliente
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
}
Header.propTypes = {
  name: PropTypes.string.isRequired
};
export default Header;
