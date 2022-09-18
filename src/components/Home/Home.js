import React from 'react';
import { useState } from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import { Projects } from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'

const Home = () => {
    const [isScroll, setIsScroll] = useState(false);
    const visibleTopBtn = () => {
        if(window.scrollY >= 80){
            setIsScroll(true);
        }else{
            setIsScroll(false);
        };
    };
    window.addEventListener('scroll', visibleTopBtn);
    
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <a href="#home" className={isScroll ? "back-to-top-btn visible" : "back-to-top-btn"} title='Go To Top'>
                <div className="back-top-btn-C">
                        <i className="fa-sharp fa-solid fa-arrow-up" />
                </div>
                </a>
        </div>
    );
};

export default Home;