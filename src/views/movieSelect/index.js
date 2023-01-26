import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Movies = ({ movieDatas }) => {
    const [Hrs, SetHrs] = useState(0)
    const [Min, SetMin] = useState(0);
    const [popup, setPopup] = useState(false);

    useEffect(() => {
        const hours = (movieDatas.runtime) / 60
        const minutes = (movieDatas.runtime) % 60
        SetHrs(hours);
        SetMin(minutes);
        var html = (movieDatas.summary);
        var div = document.getElementById("summary");
        div.innerHTML = html;
    }, [])
    const showPop = () => {
        setPopup(true)
    }
    return (
        <>
            <div className="movieselect">
                <div></div>
                <div className="row">
                    <div className="col-md-2 col-lg-2" style={{ margin: "3%" }}>
                        <img className="imageShow" src={movieDatas.image.medium} alt={movieDatas.name} />
                    </div>
                    <div className="asset-details col-md-9 col-lg-8 col-sm-12 col-12 " style={{ margin: "2%" }}>
                        <h3 className="product__title bottom-section-space">
                            <span className="product__title-copy">
                                {movieDatas.name}</span>
                        </h3>
                        <div className="vl" ><p>
                            <div style={{ borderRight: "0.5px solid white", display: "inline-block", lineHeight: "15px" }}>
                                {(movieDatas.premiered).slice(0, 4)}&ensp;
                            </div>&ensp;
                            <div style={{ borderRight: "0.5px solid white", display: "inline-block", lineHeight: "15px" }}>
                                {Hrs}hr {Min}mins &ensp;
                            </div>
                            Cert. U
                        </p>
                        </div>
                        <div className="out-of-locale-container top-section-space bottom-section-space" style={{ backgroundColor: "#132544", fontSize: "15px" }}>
                            <p style={{ padding: "2%" }}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="yellow" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>&ensp; Only content that has been downloaded can be watched outside of UK, Republic of Ireland and Channel Islands.
                            </p>
                        </div>
                        <div className="product__details b1-top-cta-space b2-top-group-space b3-top-group-space">
                            <div className="product__details-wrapper">
                                <div className="row">
                                    <div className="col-b1-12" id="summary"></div>
                                </div>
                                <div className="product__additional-details">
                                    <div className="row top-paragraph-space b3-top-section-space bottom-paragraph-space b3-bottom-section-space">
                                        <div className="col-b1-12 product__guidance secondary-text" style={{ color: "#A3B2C4" }}>
                                            {movieDatas.genres[0]}, {movieDatas.genres[1]}, {movieDatas.genres[2]}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row half-horizontal-gutter top-paragraph-space bottom-group-space" style={{ marginTop: "10px" }}>
                                            <div className="col-b1-10 col-b2-8 col-b3-8">Cast : &ensp; <a className="std-reset product__actor-anchor">Jared Leto</a>,&ensp;<a className="std-reset product__actor-anchor">Matt Smith</a>,&ensp;<a className="std-reset product__actor-anchor">Adria Arjona</a>,&ensp;<a className="std-reset product__actor-anchor">Jared Harris</a>
                                            </div>
                                        </div>
                                        <div className="row half-horizontal-gutter top-group-space bottom-group-space">
                                            <div className="col-b1-10 col-b2-8 col-b3-8">Director : &ensp; <a className="std-reset product__actor-anchor">Daniél Espinosa</a></div>
                                        </div>
                                        <div className="row half-horizontal-gutter top-group-space bottom-group-space">
                                            <div className="col-b1-10 col-b2-8 col-b3-8">Genre : &ensp; <a className="std-reset product__actor-anchor">{movieDatas.genres[0]}</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={`/player/${movieDatas.id}`}>
                        <a style={{ color: "#4E7AAB", margin: "3%", marginTop: "0% !important", cursor: "grab", fontSize: "large" }} ><i className='fas fa-play-circle' style={{ color: "#4E7AAB" }}></i>Thriler</a>
                    </Link>
                </div>
            </div>
        </>
    );
};


export default Movies;
