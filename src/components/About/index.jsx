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
                    <p>I enjoy spending my free time </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem perferendis repellat neque ducimus quos alias nisi hic expedita iste, tempore delectus tempora accusantium qui, voluptatum ad est repudiandae, consectetur culpa.</p>
                </div>
            </div>
            <img src={myImage} alt="About" className="about-image" />
        </div>
    );
}