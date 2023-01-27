import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
    return (
        <div className="text-start m-2">
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{props.jumbotronTitle}</h1>
                    <p className="col-md-8 fs-4">{props.jumbotronDescription}</p>
                    <a href={props.buttonURL} className="btn btn-primary btn-lg" type="button">{props.buttonText}</a>  
                </div>
            </div>
        </div>
    );
};

Jumbotron.PropTypes = {
    jumbotronTitle: PropTypes.string,
    jumbotronDescription: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonText: PropTypes.string,
};

Jumbotron.defaultProps = {
    jumbotronTitle: "A Warm Welcome!",
    jumbotronDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    buttonURL: "#",
    buttonText: "Call to action!",
};

export default Jumbotron;




