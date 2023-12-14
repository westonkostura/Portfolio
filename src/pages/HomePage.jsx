import React from 'react';
import './HomePage.css';

import About from '../components/About';
import SocialMedia from '../components/Social';

export default function HomePage() {
    return (
        <>
            <h1 className="home-header">Weston Kostura.</h1>
            <About />
            <SocialMedia />
        </>
        
    );
}

