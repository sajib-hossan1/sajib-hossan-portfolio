import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <h1>Md. Sajib Hossan</h1>
            <div className="footer-icon">
                <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="copy-right-text container">
                <p>&copy; All Rights Reserved By Md. Sajib Hossan | 2022</p>
            </div>
        </div>
    );
};

export default Footer;