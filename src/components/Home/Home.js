import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import { Projects } from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Blogs></Blogs>
            <Contact></Contact>
        </div>
    );
};

export default Home;