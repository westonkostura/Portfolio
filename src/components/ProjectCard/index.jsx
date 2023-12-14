// ProjectCard.jsx
import React from 'react';

export default function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
    );
}