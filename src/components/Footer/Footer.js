import React from "react";
// import { Link } from "react-router-dom";
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <a href="https://docs.google.com/document/d/1bv2vLVlDrhb30TA34iLhZXJHCJm6ScTH6qgDYrLBBW8/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="footerButton" id="f1">Resume</button></a>
            <a href="https://github.com/Rebecca-Diroll" target="_blank" rel="noopener noreferrer"><button className="footerButton" id="f2">GitHub</button></a>
            <a href="https://www.linkedin.com/in/rebecca-diroll-134a44102/" target="_blank" rel="noopener noreferrer"><button className="footerButton" id="f3">LinkedIn</button></a>
            <a href="mailto:rebecca.diroll@gmail.com" target="_blank" rel="noopener noreferrer"><button  className="footerButton"id="f4">Email</button></a>
        </div>
    )
}

export default Footer;