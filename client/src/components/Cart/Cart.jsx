import { Grid, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import demofood from "../../demodata/demofood";
import { useStateValue } from "../../StateProvider/StateContext";
import Navigation from "../Navigation/Navigation";
import "./cartStyles.css";
function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const [state] = useStateValue();
  useEffect(() => {
    if (state.carts.length < 1) return navigate("/");
  });

  return (
    <>
      <Navigation />
      <br />
      <br />
      <div className="cart-container">
        <Grid spacing={4} container>
          {state.carts.map((cart) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className="cart">
                <Typography align="center" variant="h6">
                  {cart.name}
                </Typography>
                <div className="cart-image-container">
                  <img className="cart-image" src={cart.image} />
                </div>
                <div className="cart-actions">
                  <IconButton className="cart-action-button">+</IconButton>
                  <Typography variant="body1" color="primary">
                    {cart.quantity}
                  </Typography>
                  <IconButton className="cart-action-button">-</IconButton>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Cart;
