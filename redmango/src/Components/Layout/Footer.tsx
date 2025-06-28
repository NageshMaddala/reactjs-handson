import React from 'react';
// This is the Footer component that will be displayed at the bottom of the page
// It is a functional component that returns a div with some text and an icon
function Footer() {
    return (
        <div className="footer fixed-bottom text-center p-3 bg-dark text-white">
            &copy; Made with <i className="bi bi-heart-fill text-danger"></i> by Nagesh
            <br />
        </div>
    )
}

export default Footer;
