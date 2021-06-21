import React from "react";
import { Link } from "react-router-dom";
import './NavTabs.css';

function NavTabs() {
    return (
      <div className="navBar">
        <Link to="/"><button className="headerButton" id="hb1">About Me</button></Link>
        <Link to="/work"><button className="headerButton" id="hb2">Work</button></Link>
      </div>
    )
}

export default NavTabs;