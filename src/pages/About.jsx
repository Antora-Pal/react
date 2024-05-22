import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import guyImg from "../assets/images/burger-new.jpg";
import "../styles/hero-section.css";

const About = () => {
  return (
    <Helmet title="About">
     
       <div class="heading">
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             At officia mollitia voluptates vel reiciendis quod numquamut deserunt corporis esse, doloremque dolore.</p>
       </div>
       <div class="container">
        <section class="about">
            <div class="about-image">
                <img src="https://theurbanbiriyani.in/wp-content/uploads/2022/10/MuttonHandi.jpeg" alt=""/>
            </div>
            <div class="about-content">
                <h2>A chill energy with a drink in whiskey</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Harum fuga asperiores, repudiandae inventore ratione eum cum, aliquid accusamus maiores eveniet 
                    ipsa laboriosam eaque vitae. Ducimus minus quidem veritatis facilis aliquam.
                Cum ipsam perspiciatis provident odit tempora mollitia laboriosam totam! Libero quaerat deleniti
                 reprehenderit fugit sapiente enim, consectetur excepturi ab maxime? Dignissimos earum assumenda dicta. 
               </p>
               <a href="" class="read-more">Read More</a>
            </div>
        </section>
       </div>
       
    
    </Helmet>
  );
};


export default About;
