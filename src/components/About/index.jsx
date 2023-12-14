import React from 'react';
import './about.css';
import myImage from '../../assets/me.jpg';

export default function About() {
    return (
        <div className="about">
            <div className="about-content">
                <h2 className="my-story">My Story</h2>
                <h3 className="about-title">ABOUT</h3>
                <div className="main-about">
                    <p>Hello, my name is Weston Kostura. I am a 23-year-old software developer. I am a recent graduate from the Arizona State University Full Stack Bootcamp.</p>
                    <p>In my free time, I enjoy hanging out with friends, exploring the outdoors, and snowboarding when the weather permits. I currently work at an outdoor venue bar, which allows me to combine my love for music and the outdoors.</p>
                    <p>Working in a fast-paced environment like a live music venue has helped me develop strong problem-solving skills and the ability to think on my feet, skills that I believe are also valuable in software development.</p>
                </div>
            </div>
            <img src={myImage} alt="About" className="about-image" />
        </div>
    );
}