import React from "react";
import "./homeStyles.css";
import Navigation from "../Navigation/Navigation";
import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

function Home() {
  return (
    <div className="home-container">
      <div className="header">
        <Navigation />
        <div className="text-box">
          <h1 className="text-box-title">The Cafe Club</h1>
          <Typography gutterBottom variant="subtitle1">
            Best Pizza in town!
          </Typography>
          <br />
          <Link to="/about">Learn More..</Link>
        </div>
      </div>
      <Categories />
    </div>
  );
}

export default Home;
