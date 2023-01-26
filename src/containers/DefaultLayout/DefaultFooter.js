import React, { Component } from "react";
import { getCurrentYear } from "../../lib/helper";

class DefaultFooter extends Component {
  render() {
    return (
      <div className="footer p-3">
        <div className="container">
          <div className="row">
            <div className="col mx-auto text-center">
              <span>
                &copy; {getCurrentYear()}
                <a
                  href={"#"}
                  className="ml-2"
                  target="_blank"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontFamily: "robato"
                  }}
                ></a>
                All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultFooter;
