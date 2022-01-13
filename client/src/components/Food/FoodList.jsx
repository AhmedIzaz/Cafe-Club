import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./foodListStyles.css";
import Navigation from "../Navigation/Navigation";
import { useStateValue } from "../../StateProvider/StateContext";
import useMethods from "../../StateProvider/useMethods";
import axios from "axios";

function FoodList() {
  const [state] = useStateValue();
  const { add_to_cart } = useMethods();
  const { category_id, category_name } = useParams();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/category/category-foods/${category_id}`)
      .then((response) => {
        if (response.status !== 200) return alert(response.data.error);
        setFoods(response.data.foods);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <>
      <Navigation />

      <br />
      <br />
      <div className="food-list-page">
        {foods.length > 0 ? (
          <>
            <h2 className="food-item-name">Items of {category_name}</h2>
            <Grid spacing={2} container>
              {foods.map((food) => (
                <Grid item xs={10} sm={6} md={4} lg={3}>
                  <Card style={{ borderRadius: "1em" }} className="food-item">
                    <CardMedia className="food-list-image" image={food.image} />
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

                    <div className="food-list-item-footer">
                      <Typography variant="body1">{food.price}৳</Typography>
                      {state.user && state.token && (
                        <CardActions className="food-item-actions">
                          <Tooltip title="Add to Order Cart!">
                            <IconButton onClick={() => add_to_cart(food)}>
                              <Add />
                            </IconButton>
                          </Tooltip>
                        </CardActions>
                      )}
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        ) : (
          <Typography variant="h3" className="for-no-food">
            There is no food for this category..Sorry!
          </Typography>
        )}
      </div>
    </>
  );
}

export default FoodList;
