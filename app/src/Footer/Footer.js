import React from "react";
import "./Footer.css";

const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear();
    };

    // Create a bootstrap footer
    return (
        <footer className="footer">
            <div className="container">
                <p className="text-muted">
                    &copy; {getYear()} Student Management System
                </p>
            </div>
        </footer>
    );
};

export default Footer;