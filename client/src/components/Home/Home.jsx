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
<<<<<<< HEAD
          <h1 className="text-box-title">The Cafe Club</h1>
=======
          <Typography variant="h1">The Cafe Club</Typography>
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
          <Typography gutterBottom variant="subtitle1">
            Best Pizza in town!
          </Typography>
          <br />
<<<<<<< HEAD
          <Link to="/about">Learn More..</Link>
        </div>
      </div>
=======
          <Link to="/">Learn More..</Link>
        </div>
      </div>

>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
      <Categories />
    </div>
  );
}

export default Home;
