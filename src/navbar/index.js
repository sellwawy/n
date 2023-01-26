import React from "react";
import { API_URL } from "../constants/Config";
import axios from "axios";
import movie from "../assets/img/movie.png";
import menu from "../assets/img/menu.png";
import { clearCookie, getCookie, isLoggedIn, setCookie } from "../lib/helper";
import history from "../history";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { search } from "../actions";
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    clearCookie("session_token");
    clearCookie("userId");
    clearCookie("usersId");
  };
  searchinput = e => {
    let inputValue = e.target.value;
    this.props.search(inputValue);
  };

  render() {
    const { categories } = this.props.state;
    return (
      <div>
        <div className="sub-container">
          <nav className="navbar navbar-expand-lg navbar-bg-color">
            <a className="navbar-brand" href="/home">
              <img src={movie} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <img src={menu} alt="menu" />
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                {categories &&
                  categories.slice(0, 7).map((category, index) => (
                    <li className="nav-item active" key={category.id}>
                      <Link
                        className="nav-link"
                        to={{
                          pathname: this.getIdentifier(category),
                          state: category.name
                        }}
                      >
                        {category.name}{" "}
                      </Link>
                    </li>
                  ))}
                <li className="nav-item active">
                  <Link
                    className="nav-link"
                    to={{
                      pathname: "/live"
                    }}
                  >
                    Live
                  </Link>
                </li>
              </ul>
              <form className="form-inline  my-2 my-lg-0">
                <div className="input-group" style={{ width: 280 }}>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    aria-label="Text input with checkbox"
                    placeholder="Search...."
                    onChange={this.searchinput}
                  />
                  &ensp;
                  <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="dropdown user user-menu">
                      <a
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        href="/"
                      >
                        <img
                          src="http://cdn.onlinewebfonts.com/svg/img_568656.png"
                          className="float-left rounded-circle"
                          style={{ cursor: "pointer" }}
                          alt="avatar image"
                          height="40"
                        />
                      </a>
                      <ul className="dropdown-menu ">
                        <div className="card">
                          <li className="user-body">
                            <div className="row no-gutters">
                              <div className="col-12 text-left">
                                <Link to="/forgot">
                                  <i className="fa fa-lock"></i> Change Password
                                </Link>
                              </div>
                              <div
                                role="separator"
                                className="divider col-12"
                              ></div>
                              <div className="col-12 text-left">
                                <Link to="/login" onClick={this.logout}>
                                  <i className="fa fa-power-off"></i> Logout
                                </Link>
                              </div>
                            </div>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps, {
  search
})(Navbar);
