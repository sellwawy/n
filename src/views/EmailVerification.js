import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import { API_URL } from "../constants/Config";
import history from "../history";

class EmailVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailVerified: null
    };
  }

  componentDidMount() {
    const { token } = this.props.match.params;

    if (token) {
      axios
        .put(API_URL + "/users/verify-email", {
          access_key: token
        })
        .then(response => {
          if (response && response.data) {
            if (response.data.message === "Email verified!") {
              toast.success("Success", {
                position: toast.POSITION.TOP_RIGHT
              });
              this.setState({ emailVerified: true });
            }
          }
        })
        .catch(error => {
          if (error && error.response && error.response.data) {
            this.setState({ emailVerified: false });
            return toast.error(error.response.data);
          }
        });
    } else {
      history.push("login");
    }
  }

  render() {
    const { emailVerified } = this.state;
    return (
      <div style={{ minHeight: "100vh", color: "#000" }}>
        <Navbar />
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {emailVerified === true ? (
            <div className="text-center">
              <p>
                Your email address has been verified. Please login to access
                your account.
              </p>
              <Link to="/login">Go to login</Link>
            </div>
          ) : emailVerified === false ? (
            <div className="text-center">
              <p>
                Your email has already been verified. Please login to access
                your account. If you are having trouble logging in, please
                contact our customer support
              </p>
              <Link to="/login">Go to login</Link>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default EmailVerification;
