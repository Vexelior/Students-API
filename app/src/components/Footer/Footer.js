import React from "react";
import "./Footer.css";

const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear();
    };

    // Create a bootstrap footer
    return (
        <footer className="footer">
            <p>
                &copy; {getYear()} -  Alexander Sanderson
                <div className="float-right">
                    <a href="https://www.alexsandersontech.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-globe fa-1x"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/asanderson94/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin fa-1x"></i>
                    </a>

                    <a href="https://www.github.com/vexelior" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-1x"></i>
                    </a>
                </div>
            </p>
        </footer>
    );
};

export default Footer;