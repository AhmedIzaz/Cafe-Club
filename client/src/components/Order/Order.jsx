import {
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
} from "@material-ui/core";
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
  const [number, setNumber] = useState(null);
  const [type, setType] = useState("Reservation");
  const [address, setAddress] = useState(null);
  const navigate = useNavigate();
  let total_price = 0;
  const onDateTimeChange = (e) => {
    const date_and_time = e.target.value.split("T");
    setDateTime([date_and_time[0], date_and_time[1]]);
  };
  const change_type = (e) => {
    setType(e.target.value);
  };
  const onAddressChange = (e) => setAddress(e.target.value);
  const onNumberChange = (e) => setNumber(e.target.value);
  const onOrderSubmit = (e) => {
    e.preventDefault();

    if (type == "Delivery" && !address)
      return alert("please give the location!");
    if (!number || number.length < 10 || !dateTime)
      return alert("please type a valid mobile number!");
    confirm_order(dateTime, type, total_price, number, address);
  };
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
          <Typography className="field-label" variant="caption">
            Give a delivery or order date :
          </Typography>
          <TextField
            size="small"
            variant="outlined"
            type="datetime-local"
            onChange={(e) => onDateTimeChange(e)}
          />
        </div>
        <div className="order-type-container">
          <Typography variant="caption" className="field-label">
            Order Type :{" "}
          </Typography>
          <FormControl>
            <InputLabel>Order Type</InputLabel>
            <Select
              variant="standard"
              value={type}
              label="Type"
              onChange={change_type}
            >
              <MenuItem value={"Reservation"}>Reservation</MenuItem>
              <MenuItem value={"Delivery"}>Delivery</MenuItem>
            </Select>
          </FormControl>
        </div>
        {type == "Delivery" && (
          <div className="delivery-type-container">
            <Typography variant="caption" className="field-label">
              Give address please! (only inside of Feni Town) :
            </Typography>
            <TextField
              label="Address"
              variant="outlined"
              size="small"
              onChange={onAddressChange}
            />
          </div>
        )}
        <div className="order-number-container">
          <Typography className="field-label" variant="caption">
            Mobile Number :
          </Typography>
          <TextField
            label="Number"
            size="small"
            type="text"
            onChange={onNumberChange}
            variant="outlined"
          />
        </div>
        <div className="order-page-footer">
          <Typography align="center" variant="h6" color="textSecondary">
            Total amount is : {total_price}
          </Typography>
          <Button onClick={onOrderSubmit} variant="contained" color="primary">
            Confirm {type}!
          </Button>
        </div>
      </div>
    </>
  );
}

export default Order;
