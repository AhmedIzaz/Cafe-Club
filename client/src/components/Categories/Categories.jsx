import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { useStateValue } from "../../StateProvider/StateContext";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./styles.css";
function Categories() {
  const location = useLocation();
  const [state] = useStateValue();
  return (
    <>
      {location.pathname == "/categories" && (
        <>
          <Navigation />
          <br />
          <br />
        </>
      )}

      <br />

      <div className="categories">
        <Typography gutterBottom variant="h3">
          Food Categories We Have!
        </Typography>
        <div className="category_list">
          {state.categories.map((category, key) => (
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
