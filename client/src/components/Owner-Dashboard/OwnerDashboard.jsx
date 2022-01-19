import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { useStateValue } from "../../StateProvider/StateContext";
import logo from "../images/logo.jpg";
import useMethods from "../../StateProvider/useMethods";
import "./ownerDashboardStyles.css";
function OwnerDashboard() {
  const [state] = useStateValue();
  const navigate = useNavigate();
  const { logout } = useMethods();
  useEffect(() => {
    if (!state.token && !state.owner && state.user) return navigate("/");
  }, []);
  return (
    <div className="owner-dashboard-container">
      <div className="dashboard-header">
        <div className="dashboard-logo-container">
          <img className="dashboard-logo" src={logo} />
        </div>
        <Link to="order-list">
          <h3>Dashboard</h3>
        </Link>
        <Link to="customer-list">
          <h3>Customer List</h3>
        </Link>
        <Button
          onClick={logout}
          variant="outlined"
          color="secondary"
          size="small"
        >
          Logout
        </Button>
      </div>
      <br />
      <Outlet />
    </div>
  );
}

export default OwnerDashboard;
