import React from "react";
import "./aboutStyles.css";
<<<<<<< HEAD
import Navigation from "../Navigation/Navigation";
function About() {
  return (
    <>
      <Navigation />
=======
import { useLocation, useNavigate } from "react-router-dom";
function About() {
  return (
    <>
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
      <br />
      <br />
      <div className="about-page-container">
        <h3>About us</h3>
        Cafe club opened its doors in 2021. The restaurant quickly became the
        sector’s leader with its top quality pizza, unprecedented service
        quality remains as number 1 in Feni Town.
        <br />
        <br />
        By offering many unique options to pizza lovers, Cafe Club quickly
        brought extra flair to the pizza culture and still serves as an
        indispensable location for its guests.
        <br />
        <br />
        The restaurant became the one and only address for pizza and fast food
        lovers since its opening and continues to be different and special with
        its rich food offerings, warm atmosphere and top notch service.
        <br />
        <br />
        Cafe Club always prioritize its guest comforts and tasty habits and
        continues to be the number one choice in Feni,
        <br />
        <br />
        Also Cafe Club Burger carries taste and service legacy into a burger
        joint concept. Cafe Club accomodates all of its precious guests.
      </div>
    </>
  );
}

export default About;
