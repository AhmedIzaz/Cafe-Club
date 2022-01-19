import React from "react";
import "./ownerOrderListStyles.css";
import { useStateValue } from "../../../StateProvider/StateContext";
import { Button } from "@material-ui/core";
import useMethods from "../../../StateProvider/useMethods";
function OwnerOrderList() {
  const [state] = useStateValue();
  const { delete_order } = useMethods();
  return (
    <div className="owner-page-order-list">
      {state.owner.orders.length < 1 ? (
        <div className="no-order">No order yet</div>
      ) : (
        state.owner.orders.map((order) => (
          <div className="owner-page-order-item-container">
            <div className="order-item-header">
              <h2>
                {order.type} of {order.user_name}
              </h2>

              <div>
                <p>
                  {order.type} Date : {order.date_time[0]}
                </p>
                <p>Mobile : {order.user_number}</p>
                {order.type == "Delivery" && (
                  <p>Delivery Location : {order.address}</p>
                )}
              </div>
            </div>
            <div className="owner-page-order-item-food-container">
              <div className="owner-page-order-item">
                {order.food_list.map((food) => (
                  <div>
                    <h3>{food.name}</h3>
                    <h3> Quantity : {food.quantity}</h3>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => delete_order(order._id)}
                color="primary"
                variant="outlined"
              >
                Complete {order.type}
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default OwnerOrderList;
