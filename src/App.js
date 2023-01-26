import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import Notifications from "react-notification-system-redux";
import Loadable from "react-loadable";
import history from "./history";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { getCookie, isLoggedIn } from "./lib/helper";
/** Layouts **/
import DefaultLayout from "./containers/DefaultLayout";
/** Views **/
// import Home from "./views/Home/index.js";
import Login from "./views/login";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-multi-carousel/lib/styles.css";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// 404 error page
const Page404 = Loadable({
  loader: () => import("./views/Page404"),
  loading
});

/*
   App
 */
class App extends Component {
  bodyClass(authenticated) {
    if (!authenticated) {
      document.body.classList.remove("loggedin-layout");
    } else {
      document.body.classList.add("loggedin-layout");
    }
  }

  componentDidMount() {
    this.bodyClass(getCookie("session_token"));
  }

  componentWillReceiveProps(nextProps) {
    this.bodyClass(getCookie("session_token"));
  }

  componentWillUnmount() {
    this.bodyClass(getCookie("session_token"));
  }

  render() {
    const { notifications } = this.props;
    return (
      <div>
        <Notifications notifications={notifications} />
        <ToastContainer
          autoClose={4000}
          pauseOnHover={false}
          toastClassName="toastRequestSuccess"
          bodyClassName="toastBody"
        />
        <div className="routeSection">
          <Router history={history}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/ott/.com/" />
              </Route>
              <DefaultLayout
                exact
                name="Page 404"
                path="*"
                component={Page404}
              />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
