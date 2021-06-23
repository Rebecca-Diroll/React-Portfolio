import React from "react";
import "./Project.css";

function Project(props) {
console.log(props);
    return (
        <>
            <h2>
                {props.projectTitle}
            </h2>

            <div className="linkType">Deployed App Link:</div>
            <div className="linkText">
                <a href={props.projectLink}>{props.projectLink}</a>
            </div>
            
            <div className="gitLinkType">GitHub Repo Link:</div>
            <div className="gitLinkText">
                <a href={props.projectGitHub}>{props.projectGitHub}</a>
            </div>
            
            <p className="description">
                {props.projectDesc}
            </p>

            <div>
                <img src={props.projectImage?.default} alt="project screenshot" className="projImage" />
            </div>
            <hr />
        </>
    )
}

export default Project;