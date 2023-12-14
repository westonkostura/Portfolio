import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import './social.css';

export default function SocialMedia() {
    return (
        <div className="social-media">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noreferrer">
                <FaGithub />
            </a>
        </div>
    );
}