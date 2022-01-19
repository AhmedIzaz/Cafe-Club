import React, { useEffect } from "react";
import "./orderListStyles.css";
import Navigation from "../../Navigation/Navigation";
import { Typography } from "@material-ui/core";
import { useStateValue } from "../../../StateProvider/StateContext";
import { useNavigate } from "react-router-dom";

function OrderList() {
  const [state] = useStateValue();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.user) return navigate("/");
  }, []);
  return (
    <>
      <Navigation />
      <br />
      <br />
      <div className="order-list-page-container">
        <Typography variant="h5">
          Your {state.order.type} for {state.order.date_time[0]}
        </Typography>
        <table className="order-list-wrapper">
          <thead>
            <td>
              <Typography variant="h6">Food Item</Typography>
            </td>
            <td>
              <Typography variant="h6">Quantity</Typography>
            </td>
            <td>
              <Typography variant="h6">Price</Typography>
            </td>
          </thead>

          <tbody>
            {state.order.food_list.map((food) => (
              <tr className="order-item">
                <td>
                  <Typography variant="body1">{food.name}</Typography>
                </td>
                <td>
                  <Typography variant="body1" color="textSecondary">
                    {food.quantity}
                  </Typography>
                </td>
                <td>
                  <Typography variant="body1">
                    {JSON.parse(food.price) * food.quantity}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OrderList;
