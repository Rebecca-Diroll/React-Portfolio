import React from "react";
import "./Project.css";

function Project(props) {

    return (
        <>
            <h2>
                {props.projectTitle}
            </h2>
            <p>
                <div className="linkType">Deployed App Link:</div>
                <div className="linkText">
                    <a href={props.projectLink}>{props.projectLink}</a>
                </div>
                 
            </p>
            <p className="description">
                {props.projectDesc}
            </p>
            <div>
                {/* <img src={props.projectImage} alt="project screenshot" className="projImage" /> */}
            </div>
            <hr />
        </>
    )
}

export default Project;