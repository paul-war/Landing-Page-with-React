import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid justify-content-center">
                <a className="navbar-brand" href="#"><small>{props.footerText}</small></a>
            </div>
        </nav>
    );
};

Footer.PropTypes = {
    footerText: PropTypes.string,
};

Footer.defaultProps = {
    footerText: "Copiright @ Your Website 2023",
};

export default Footer;

