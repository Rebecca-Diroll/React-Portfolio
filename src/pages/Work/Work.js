import React from "react";
import Project from "../../components/Project/Project.js"

function Work() {

    const projectArray = [
        {
            projectTitle: "Trey's List",
            projectLink: "https://treyslist.herokuapp.com",
            projectGitHub: "https://github.com/Rebecca-Diroll/TreysList",
            projectImage: require("../../assets/TreysList.jpg"),
            projectDesc: "Trey's List is an application to help students buy or sell textbooks. This will help to save money or earn back some of the expense."
        },
        {
            projectTitle: "Budget Tracker",
            projectLink: "https://rdd-budget-tracker.herokuapp.com",
            projectGitHub: "https://github.com/Rebecca-Diroll/18-Budget-Tracker",
            projectImage: require("../../assets/BudgetTracker.jpg"),
            projectDesc: "Keep track of finances online, entering income and expenses. Log financial transactions when offline. The application will update the online records when back online."
        },
        {
            projectTitle: "Workout Tracker",
            projectLink: "https://rdd-workout-tracker.herokuapp.com",
            projectGitHub: "https://github.com/Rebecca-Diroll/17-Workout-Tracker",
            projectImage: require("../../assets/WorkoutTracker.jpg"),
            projectDesc: "Make healthier choices and lead a more active life. This app keeps track of fitness accomplishments."
        },
        {
            projectTitle: "Tech Blog",
            projectLink: "https://rdd-tech-blog.herokuapp.com/",
            projectGitHub: "https://github.com/Rebecca-Diroll/14-Tech-Blog",
            projectImage: require("../../assets/TechBlog.jpg"),
            projectDesc: "The Tech Blog is a place for software engineers to post about development tools and resources that are useful. It is a place to share and collaborate with others."
        },
        {
            projectTitle: "Team Profile Generator",
            projectLink: "https://github.com/Rebecca-Diroll/10-Team-Profile-Generator",
            projectGitHub: "https://github.com/Rebecca-Diroll/10-Team-Profile-Generator",
            projectImage: require("../../assets/TeamProfileGenerator.jpg"),
            projectDesc: "This application is used to create a software team profile using node.js. A team manager, one or more engineers, and one or more interns may be included. Once the information is entered, an HTML page will be created."
        },
        {
            projectTitle: "E-Commerce",
            projectLink: "https://github.com/Rebecca-Diroll/13-E-Commerce",
            projectGitHub: "https://github.com/Rebecca-Diroll/13-E-Commerce",
            projectImage: require("../../assets/ECommerce.jpg"),
            projectDesc: "Keep track of your e-commerce inventory using databases for products, categories, and tags."
        }
    ]

    return (
        <>
            <h1>
                Work 
            </h1>

            <div id="projects-container">
                { projectArray.map(eachProject => {
                    return (
                        <Project 
                            projectTitle={eachProject.projectTitle}
                            projectLink={eachProject.projectLink} 
                            projectGitHub={eachProject.projectGitHub} 
                            projectDesc={eachProject.projectDesc}
                            projectImage={eachProject.projectImage}
                        />
                    )}
                ) }
            </div>
            <br />
        </>
    )
}

export default Work;