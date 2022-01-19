import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./styles.css";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import FoodList from "./components/Food/FoodList";
import FoodDescription from "./components/Food/Food Item/FoodDescription";
import Home from "./components/Home/Home";
import { useStateValue } from "./StateProvider/StateContext";
import { isExpired } from "react-jwt";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Cart from "./components/Cart/Cart";
import useMethods from "./StateProvider/useMethods";
import Order from "./components/Order/Order";
import OrderList from "./components/Order/Order-List/OrderList";
import OwnerDashboard from "./components/Owner-Dashboard/OwnerDashboard";
import OwnerOrderList from "./components/Owner-Dashboard/OwnerOrderList/OwnerOrderList";
import CustomerList from "./components/Owner-Dashboard/CustomerList/CustomerList";
function App() {
  const [state, dispatch] = useStateValue();
  const { get_category_list, get_carts_and_orders } = useMethods();
  // ==========================================
  // ==========================================
  useEffect(() => {
    console.log("at app");
    get_category_list();
    let token = sessionStorage.getItem("token");
    let user = sessionStorage.getItem("user");
    let owner = sessionStorage.getItem("owner");
    if (token && !isExpired(token)) {
      if (user) {
        get_carts_and_orders(user, token);
        return;
      }
      dispatch({ type: "ADD_OWNER", owner: JSON.parse(owner) });
      dispatch({ type: "ADD_TOKEN", token });
      return;
    }

    dispatch({ type: "DELETE_EVERYTHING" });
    return sessionStorage.clear();
  }, []);
  // ==========================================
  // ==========================================
  return (
    <main className="main">
      <div className="priority">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/food-list/:category_id/:category_name"
            element={<FoodList />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/food-description/:food_id"
            element={<FoodDescription />}
          />

          <Route path="/login" element={<Login />} />
          <Route path="/owner-login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/create-order" element={<Order />} />
          <Route path="/order-list" element={<OrderList />} />
          <Route path="/owner-dashboard/*" element={<OwnerDashboard />}>
            <Route path="order-list" element={<OwnerOrderList />} />
            <Route path="customer-list" element={<CustomerList />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
