import { Button, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateContext";
import useMethods from "../../StateProvider/useMethods";
import Navigation from "../Navigation/Navigation";
import "./orderStyles.css";
function Order() {
  const [state] = useStateValue();
  const { confirm_order } = useMethods();
  const [dateTime, setDateTime] = useState(null);
  const [type, setType] = useState("Reservation");
  const navigate = useNavigate();
  let total_price = 0;
  const onDateTimeChange = (e) => {
    const date_and_time = e.target.value.split("T");
    setDateTime([date_and_time[0], date_and_time[1]]);
    console.log(dateTime);
  };
  const change_type = (e) => setType(e.target.value);

  useEffect(() => {
    if (!state.user && state.carts.length < 1) return navigate("/");
  }, []);
  return (
    <>
      <Navigation />
      <br />
      <br />
      <div className="order-table-container">
        <Typography variant="h3">Items</Typography>
        <table className="order-table">
          <thead>
            <tr>
              <td>
                <Typography variant="h6">Foods</Typography>
              </td>
              <td>
                <Typography variant="h6">Quantity</Typography>
              </td>
              <td>
                <Typography variant="h6">Price</Typography>
              </td>
            </tr>
          </thead>
          <tbody>
            {state.carts.map((cart, index) => {
              total_price = total_price + parseInt(cart.price) * cart.quantity;
              return (
                <tr className="order-table-row">
                  <td>
                    <Typography variant="body1">{cart.name}</Typography>
                  </td>
                  <td>
                    <Typography variant="body1">{cart.quantity}</Typography>
                  </td>
                  <td>
                    <Typography variant="body1">
                      {parseInt(cart.price) * cart.quantity}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="order-date-container">
          <Typography variant="caption">
            Give a delivery or order date :
          </Typography>
          <input onChange={(e) => onDateTimeChange(e)} type="datetime-local" />
        </div>
        <div className="order-type-container">
          <Typography variant="caption">Order Type : </Typography>
          <select onChange={change_type}>
            <option>Delivery</option>
            <option selected>reservation</option>
          </select>
        </div>
        <div className="order-page-footer">
          <Typography align="center" variant="h6" color="textSecondary">
            Total amount is : {total_price}
          </Typography>
          <Button
            onClick={() => confirm_order(dateTime, type, total_price)}
            variant="contained"
            color="primary"
          >
            Confirm {type}!
          </Button>
        </div>
      </div>
    </>
  );
}

export default Order;
