import React from "react";
import "./projects.css";
import { Link } from "react-router-dom";

import jobBoard from "../assets/job-board-demo.gif";
import pinIt from "../assets/Pin-it.jpg";
import recipeFinder from "../assets/FoodMakerApp.png";

const projects = [
  {
    title: "Job Board Application",
    description: "As a small team of motivated devlopers, we set out to provide a hiring solution for small to medium sized business owners.Our target audience often cannot justify spending a large sum on an enterprise applicant tracking system (ATS), but has just as much of a need to fill positions as any business. \n Our completed application will prove invaluable to our customers, and the diverse features belie the low-price tag! Candidates can browse and apply to any job they desire. Admin users are able to view these applicants, and reach out to them to schedule an interview if they choose to. Additional admin features include the ability to create and delete job postings, and create other admin user accounts. In building this application, we built valuable skills as developers, and as members of a functional team. We've delployed a stable, full stack solution that can be customized and easily implemented for any potential clients by leveraging the MERN stack and best practices!",
    image: jobBoard,
    path: "https://job-board-djwu.onrender.com"
  },
  {
    title: "Pin It! - A social Media Concept.",
    description: "As a developer we have created a website that allows user to pin locations that they have been to. In this application the user can create their login information and pin their locaation they have been. They also can add a pic to show the location that they have been to and what it was like when they were there.",
    image: pinIt,
    path: "https://group6-pinit-ed814e5448cb.herokuapp.com/"
  },
  {
    title: "Recipe Finder Application",
    description: "Created a Recipe Finder App that pulls recipes based off of user input selection. Selection categories include Diet, Cuisine Type, Meal Type, and Health Label. Based off user preferences, the Edamam API will load 10 recipies for the user to choose from. Once the recipes load, the user can click on the picture to take them to the recipe link which includes ingredients and recipe instructions. The user also has an option to add a recipe to their favorites page.",
    image: recipeFinder,
    path: "https://peterjanasz.github.io/Recipe-Finder-App/"
  },

];

export default function ProjectPage() {
  return (
    <>
      <h1 className="home-header">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Link to={project.path} key={index}>
            <div className="project-card">
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}