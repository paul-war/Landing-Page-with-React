import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 mb-3">
            <div className="col">
                <div className="card h-100 ">
                <img src={props.cardSrc} className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.pText}</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={props.cardSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={props.cardSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.pText}</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src={props.cardSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.pText}</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">{props.buttonText}</a>
                </div>
                </div>
            </div>
        </div>
    );
};

Card.PropTypes = {
    cardSrc: PropTypes.string,
    cardTitle: PropTypes.string,
    pText: PropTypes.string,
    buttonText: PropTypes.string,
};

Card.defaultProps = {
    cardSrc: "https://picsum.photos/500/325?grayscale",
    cardTitle: "Card Title",
    pText: "Lorem Ipsum Sanctum Totum Locum viajum a la Quiacum Argentinum",
    buttonText: "Find Out More!",
};

export default Card;

