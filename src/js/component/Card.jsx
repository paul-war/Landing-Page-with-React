import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 m-3">
            <div className="col">
                <div className="card h-100 ">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body ">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">Find Out More!</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">Find Out More!</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">Find Out More!</a>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                </div>
                <div className="card-footer">
                    <a href="#"className="btn btn-primary btn-lg d-flex justify-content-center" type="button">Find Out More!</a>
                </div>
                </div>
            </div>
        </div>
    );
};

Card.PropTypes = {
    jumbotronTitle: PropTypes.string,
    jumbotronDescription: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonText: PropTypes.string,
};

Card.defaultProps = {
    jumbotronTitle: "Custom jumbotron",
    jumbotronDescription: "Using a series of utilities, you can create this jumbotron.",
    buttonURL: "#",
    buttonText: "Example button",
};

export default Card;

