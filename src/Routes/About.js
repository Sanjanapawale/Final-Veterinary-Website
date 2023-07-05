import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutImg from "../Assets/9.avif";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={AboutImg}
        title="VetLink Hub"
        text="Where pets are treated like family"
        btntext="About Us"
        url="/about"
        btnClass="show"
        />
        </>
    );
}

export default About;