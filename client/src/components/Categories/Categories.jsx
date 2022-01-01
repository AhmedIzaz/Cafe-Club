import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
import categories from "../../demodata/democategories";
import Navigation from "../Navigation/Navigation";
import "./styles.css";
function Categories() {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/categories" && (
        <>
          <Navigation />
          <br />
          <br />
        </>
      )}
=======
import { Link } from "react-router-dom";

import categories from "../../demodata/democategories";
import "./styles.css";
function Categories() {
  return (
    <>
      <br />
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
      <div className="categories">
        <Typography gutterBottom variant="h3">
          Food Categories We Have!
        </Typography>
        <div className="category_list">
          {categories.map((category, key) => (
            <Card
              component={Link}
              to={`/food-list/${category._id}/${category.name}`}
              style={{ borderRadius: "1em" }}
              key={key}
              className="category"
            >
              <CardMedia className="category-image" image={category.image} />
              <CardContent className="card-content">
                <Typography variant="h6">{category.name}</Typography>
                <Typography variant="body1" color="textSecondary">
                  {category.description.slice(0, 20) + "...."}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
