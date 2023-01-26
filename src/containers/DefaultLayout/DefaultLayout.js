import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// routes config
import routes from "../../routes";

class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      avatarUrl: "",
      isLoading: false,
      userId: null,
      allowAccess: true
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="app">
        <div className="app-body">
          <main className="main drawer-container">
            <Suspense>
              <Switch>
                {routes.map((route, idx) => {
                  console.log(route);
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
