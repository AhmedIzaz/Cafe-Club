import React, { useEffect } from "react";
import "./homeStyles.css";
import Navigation from "../Navigation/Navigation";
import Categories from "../Categories/Categories";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useStateValue } from "../../StateProvider/StateContext";

function Home() {
  const navigate = useNavigate();
  const [state] = useStateValue();
  useEffect(() => {
    if (state.owner) return navigate("/owner-dashboard");
  }, []);
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
