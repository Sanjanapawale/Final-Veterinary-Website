import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ServiceImg from '../Assets/7.webp';

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={ServiceImg}
        title="Remarkable Pets Need Rearkable Care"
        text=""
        btntext="Our services"
        url="/service"
        btnClass="show"
        />
    </>
 );
}

export default Service;
