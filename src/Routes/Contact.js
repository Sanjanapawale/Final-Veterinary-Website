import React from 'react'
import Hero from '../Components/Hero';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import HomeImg2 from '../Assets/HomeImg2.png'
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg={HomeImg2}
        title="Your Caring Veterinarians"
        text=""
        btntext="Contact Us"
        url="/contact"
        btnClass="show"/>
        </>
    );
}

export default Contact;