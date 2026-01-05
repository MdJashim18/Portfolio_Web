import React from 'react';
import Hero from '../Hero';
import Skills from '../Skills';
import Education from '../Education';
import Experience from '../Experience';
import Projects from '../Projects';
import Services from '../Services';
import Testimonials from '../Testimonials';
import Contact from '../Contact';
import About from '../About';

const Home = () => {
    return (
        <div>
            <div className='mb-10 py-5'>
                <Hero></Hero>
            </div>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Home;