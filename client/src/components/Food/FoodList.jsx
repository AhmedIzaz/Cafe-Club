import {
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import demofood from "../../demodata/demofood";
import "./foodListStyles.css";
<<<<<<< HEAD
import Navigation from "../Navigation/Navigation";
=======
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
function FoodList() {
  const { categoryId, categoryName } = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    let food_list = [];
    demofood.map((food) =>
      food.category_id == categoryId ? food_list.push(food) : null
    );
    setFoods(food_list);
  }, []);
  return (
    <>
<<<<<<< HEAD
      <Navigation />
=======
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
      <br />
      <br />
      <div className="food-list-page">
        {foods.length > 0 ? (
          <>
            <h2 className="food-item-name">Items of {categoryName}</h2>
            <Grid spacing={2} container>
              {foods.map((food) => (
                <Grid item xs={10} sm={6} md={4} lg={3}>
                  <Card style={{ borderRadius: "1em" }} className="food-item">
                    <div className="food-item-image-container">
                      <img
                        className="food-item-image"
                        alt="food-item-image"
                        src={food.image}
                      />
                    </div>

                    <CardContent
                      component={Link}
                      to={`/food-description/${food._id}`}
                      className="food-item-description"
                    >
                      <Typography color="textPrimary" variant="h6">
                        {food.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {food.description.slice(0, 20) + "..."}
                      </Typography>
                    </CardContent>

                    <CardActions className="food-item-actions">
                      <Tooltip title="Add to Order Cart!">
                        <IconButton>
                          <Add />
                        </IconButton>
                      </Tooltip>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
<<<<<<< HEAD
          <Typography variant="h3" className="for-no-food">
=======
          <Typography
            style={{
              textAlign: "center",
              width: "fit-content",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            variant="h1"
            color="textSecondary"
          >
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
            There is no food for this category..Sorry!
          </Typography>
        )}
      </div>
    </>
  );
}

export default FoodList;
