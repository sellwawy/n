import React, { useEffect, useState } from "react";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";
// import Popover from 'react-bootstrap/Popover';

const Movies = ({ title, movies, movieName, select, sliceValue }) => {
  const [limit, setlimit] = useState(42);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    if (sliceValue) {
      setlimit(sliceValue);
    }
  }, [sliceValue]);

  let filteredMovie;
  if (movies && movieName) {
    filteredMovie =
      movies &&
      movies.filter(each =>
        each.name.toLowerCase().includes(movieName.toLowerCase())
      );
  }
  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const movieselection = evt => {
    select(evt.id);
  };
  const ShowMore = () => {
    setloading(true);
    if (sliceValue) {
      setloading(false);
    } else if (limit < movies.length) {
      setTimeout(() => {
        setlimit(limit + 42);
        setloading(false);
      }, 1000);
    } else {
      setloading(false);
    }
  };
  const renderTooltip = props => {
    return (
      <Popover
        id="popover-basic"
        placement="auto left"
        positionLeft={200}
        style={{ backgroundColor: "#0E306D" }}
        positionTop={50}
        title={props.name}
      >
        <Popover.Header style={{ backgroundColor: "#0E306D" }}>
          {props && props.name}
        </Popover.Header>
        <Popover.Body style={{ color: "whitesmoke" }}>
          2022 | 1hr 0min | Cert:A
          <br />
          <br />
          <div className="summary" id="summary">
            {props.summary.replace(/<\/?[^>]+(>|$)/g, "")}
          </div>
        </Popover.Body>
      </Popover>
      // </div>
    );
  };
  return (
    <div className="movies container-fluid">
      <div className="title">
        <h3 className="latest" style={{ marginLeft: "5%", marginBottom: "2%" }}>
          {title}
        </h3>
      </div>
      <div className="row" style={{ marginLeft: "5%", marginRight: "5%" }}>
        {filteredMovie &&
          filteredMovie.slice(0, limit).map((value, index) => {
            return (
              <>
                <div
                  class="col-lg-2 col-md-3 col-sm-3 col-6"
                  style={{ cursor: "grab", cursor: "-webkit-grab" }}
                  onClick={() => movieselection(value)}
                >
                  <img src={value.image.medium} alt="card" width="100%" />
                  <p className="hidepara">{value.name}</p>
                </div>
              </>
            );
          })}
        {console.log(limit, "limit")}
        {!filteredMovie &&
          movies.slice(0, limit).map((value, index) => {
            return (
              <>
                <div
                  class="col-lg-2 col-md-3 col-sm-3 col-6"
                  style={{ cursor: "grab", cursor: "-webkit-grab" }}
                  onClick={() => movieselection(value)}
                >
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip(value)}
                  >
                    <img src={value.image.medium} alt="card" width="100%" />
                  </OverlayTrigger>
                  <p>{value.name}</p>
                </div>
              </>
            );
          })}
      </div>
      {!sliceValue && (
        <div
          class="text-center relative-container btn-row-container b1-top-cta-space b2-top-cta-space"
          style={{ marginTop: "3%" }}
        >
          <button
            onClick={() => ShowMore()}
            className="Showmore btn--medium b3-btn--small show-more-button active "
            data-tracking="true"
            type="button"
            style={{
              backgroundColor: loading ? "#030F1F" : "#2873C5",
              color: "white",
              marginLeft: "15%",
              border: "none"
            }}
          >
            {loading ? (
              <div className="spin">
                {" "}
                <div class="spinner-border text-light" role="status">
                  <span class="sr-only"></span>
                </div>
              </div>
            ) : (
              <span class="text">Show more</span>
            )}
          </button>
          <button class="back-to-top-link" onClick={() => topFunction()}>
            <a>
              <i class="fas fa-arrow-circle-up"></i> Back to top
            </a>
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
