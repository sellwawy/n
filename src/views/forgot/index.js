import React from "react";

import Form from "../../components/Form";
import DefaultFooter from "../../containers/DefaultLayout/DefaultFooter.js";

// Helper
import { setCookie } from "../../lib/helper";

import { toast } from "react-toastify";
// import Navbar from "../../components/Navbar";

import Text from "../../components/Text";
import { API_URL } from "../../constants/Config";
import axios from "axios";
import history from "../../history";

export function _userRegister(data, redirect = false) {
  console.log(data);

  axios
    .put(API_URL + "/users/update", data)
    .then(response => {
      console.log(response, "response");
      let successMessage;
      if (response && response.data) {
        successMessage = response.data.message;
      }

      const { token, userId } = response.data;

      setCookie("session_token", token);
      setCookie("userId", userId);

      if (response.data.message === "Password not matched") {
        alert("Password not matched :(");
        window.location.replace("forgot");
      } else if ("Password updated successfully" === response.data.message) {
        toast.success("Password updated successfully ☺☺☺", {
          position: toast.POSITION.TOP_RIGHT
        });
        history.push("login");
      }

      return { successMessage } || {};
    })
    .catch(error => {
      if (error.response && error.response.status >= 400) {
        let errorMessage;
        const errorRequest = error.response.request;
        if (errorRequest && errorRequest.response) {
          errorMessage = JSON.parse(errorRequest.response).message;
          toast.error(errorMessage);
        }
        return { errorMessage } || {};
      }
    });
}

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      message: ""
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this._updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._updateDimensions);
  }

  render() {
    return (
      <div className="logo-section">
        <div className="logo-center">
          <img src={""} alt={"logo"} />
        </div>
        {/* <Navbar /> */}
        <div>
          <div className="card rounded m-auto">
            <h1>Forgot Password</h1>
            <div className={["basic-login-form", ""].join(" ")}>
              <Form
                onSubmit={values => {
                  values.email = values.email ? values.email : null;
                  values.password = values.password ? values.password : null;

                  _userRegister(values);
                }}
              >
                <div className={["field-wrapper"].join("")}>
                  <label for="mwud_email" class="m-form-label">
                    Email or mobile phone number
                  </label>
                  <Text
                    name="email"
                    placeholder="Email Address"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join(" ")}>
                  <label for="mwud_password" class="m-form-label">
                    New Password
                  </label>
                  <Text
                    name="password"
                    placeholder="Password"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join(" ")}>
                  <label for="mwud_password" class="m-form-label">
                    Confirm Password
                  </label>
                  <Text
                    name="cpassword"
                    placeholder="Confirm Password"
                    onKeyDown={this._hideErrorMessage}
                    required
                  />
                </div>
                <div className={["field-wrapper"].join(" ")}>
                  <div className="form-group text-center">
                    <button
                      type="submit"
                      className="btn btn-login w-100 forgot-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>

          <div className="auth-footer">
            <div className="auth-footer-inner"></div>
            <div className="mov-size-mini">
              <span className="auth-footer-seperator"></span>
              <a href="/">Conditions of Use</a>
              <span className="auth-footer-seperator"></span>
              <a href="/">Privacy Notice</a>
              <span className="auth-footer-seperator"></span>
              <a href="/">Help</a>
              <span className="auth-footer-seperator"></span>
            </div>

            <div className="mov-spacing-none">
              <span className="mov-size-mini mov-color-secondary">
                &copy; 2020-2021 sky Store. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
