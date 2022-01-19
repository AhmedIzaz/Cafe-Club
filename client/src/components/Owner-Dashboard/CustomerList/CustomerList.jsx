import { Avatar, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../StateProvider/StateContext";
import "./customerListStyles.css";
function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [state] = useStateValue();
  useEffect(() => {
    axios
      .post("http://localhost:8000/owner/get-customers", {
        token: state.token,
      })
      .then((response) => {
        if (response.status !== 200) return alert("server error");
        setCustomers(response.data.customers);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <div className="customer-list-page">
      {customers.map((customer) => (
        <div className="customer">
          <div className="customer-image-container">
            <Avatar alt={customer.name} src={customer.image} />
          </div>
          <div className="customer-description">
            <Typography variant="subtitle1">{customer.name}</Typography>
            <Typography variant="subtitle2" color="textSecondary">
              EMAIL : {customer.email}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              MOBILE : {customer.number}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;
