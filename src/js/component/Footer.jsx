import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
            </div>
        </nav>
    );
};

Footer.PropTypes = {
    jumbotronTitle: PropTypes.string,
    jumbotronDescription: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonText: PropTypes.string,
};

Footer.defaultProps = {
    jumbotronTitle: "A Warm Welcome!",
    jumbotronDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    buttonURL: "#",
    buttonText: "Call to action!",
};

export default Footer;

