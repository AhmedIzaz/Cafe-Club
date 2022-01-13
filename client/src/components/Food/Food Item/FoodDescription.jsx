import React, { useEffect, useState } from "react";
import "./foodDescriptionStyles.css";
import { useParams } from "react-router-dom";
import { Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Navigation from "../../Navigation/Navigation";
import useMethods from "../../../StateProvider/useMethods";
import { useStateValue } from "../../../StateProvider/StateContext";
import axios from "axios";

function FoodDescription() {
  const [state] = useStateValue();
  const { food_id } = useParams();
  const [food, setFood] = useState({});
  const { add_to_cart } = useMethods();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/food/food-description/${food_id}`)
      .then((response) => {
        if (response.status !== 200) return alert(response.data.error);
        setFood(response.data.food);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <>
      <Navigation />

      <br />
      <br />
      <div className="food-description-page">
        <Typography gutterBottom variant="h3">
          {food.name}
        </Typography>
        <Grid spacing={3} container>
          <Grid item xs={12} md={6} sm={8} lg={7}>
            <div className="food-description-page-image-container">
              <img
                className="food-description-page-image"
                src={food.image}
                alt="food image"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6} sm={4} lg={5}>
            <div className="right">
              <Typography variant="body1" color="textSecondary">
                {food.description}
              </Typography>
              <div className="food-description-action">
                <Typography variant="body1">{food.price}৳</Typography>
                {state.user && state.token && (
                  <div className="food-description-action-button">
                    <Typography variant="body2" color="textSecondary">
                      Add to Food Cart ?
                    </Typography>
                    <Tooltip title="Add to food cart">
                      <IconButton onClick={() => add_to_cart(food)}>
                        <Add />
                      </IconButton>
                    </Tooltip>
                  </div>
                )}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default FoodDescription;
