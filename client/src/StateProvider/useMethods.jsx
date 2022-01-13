import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateContext";

function useMethods() {
  const auth_base_url = "http://localhost:8000/auth";
  const cart_base_url = "http://localhost:8000/cart";
  const category_base_url = "http://localhost:8000/category";
  const [state, dispatch] = useStateValue();
  const navigate = useNavigate();
  ////======================================
  ////======================================
  const login = ({ email, password }) => {
    axios
      .post(`${auth_base_url}/login`, { email, password })
      .then((response) => {
        if (!response.data.user || !response.data.token)
          return alert(response.data?.message || response.data?.error);
        const { user, token } = response.data;
        dispatch({ type: "ADD_USER", user });
        dispatch({ type: "ADD_TOKEN", token });
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", token);
        return navigate("/");
      })
      .catch((error) => {
        return alert(error);
      });
  };
  ////======================================
  ////======================================
  const signup = (data) => {
    axios
      .post(`${auth_base_url}/signup`, { ...data })
      .then((response) => {
        if (response.data.status !== 200)
          return alert(response.data?.message || response.data?.error);
        alert(response.data.message);
        return navigate("/login");
      })
      .catch((error) => alert(error));
  };
  ////======================================
  ////======================================
  const logout = () => {
    dispatch({ type: "REMOVE_USER" });
    dispatch({ type: "REMOVE_TOKEN" });
    return sessionStorage.clear();
  };
  ////======================================
  ////======================================
  const get_category_list = () => {
    axios
      .get(`${category_base_url}/category-list`)
      .then((response) => {
        if (response.status !== 200) return alert(response.data.error);
        dispatch({
          type: "ADD_CATEGORIES",
          categories: response.data.categories,
        });
        return;
      })
      .catch((error) => alert(error.message));
  };
  ////======================================
  ////======================================
  const add_to_cart = (food) => {
    if (state.carts.filter((cart) => cart._id == food._id).length > 0)
      return alert("Food is already exist in your food cart!");
    axios
      .post(`${cart_base_url}/create-cart`, {
        food_id: food._id,
        token: state.token,
      })
      .then((response) => {
        if (!response.data.added)
          return alert("can't add to cart! please try again letter!");
        dispatch({ type: "ADD_TO_CARTS", food: response.data.cart });
        return;
      })
      .catch((error) => alert(error.message));
  };
  ////======================================
  ////======================================
  const change_quantity = (value, cart) => {
    axios
      .post(`${cart_base_url}/change-quantity`, {
        value,
        cart_id: cart._id,
        token: state.token,
      })
      .then((response) => {
        if (response.status !== 200)
          return alert("Cart quantity doesn't update!Please try again!");
        const index = state.carts.indexOf(cart);
        let carts = state.carts;
        carts[index] = response.data.updated_cart;
        return dispatch({ type: "CHANGE_CART_QUANTITY", carts });
      })
      .catch((error) => alert(error.message));
  };
  ////======================================
  ////======================================
  const remove_cart = (cart_id) => {
    axios
      .post(`${cart_base_url}/remove-cart`, { cart_id, token: state.token })
      .then((response) => {
        if (response.status == 200)
          return alert("Cart  doesn't deleted ! Please try again!");
        return dispatch({ type: "REMOVE_FROM_CARTS", cart_id });
      })
      .catch((error) => alert(error.message));
  };
  ////======================================
  ////======================================
  const delete_user_carts = () => {
    axios
      .post(`${cart_base_url}/delete-user-carts`, {
        token: state.token,
      })
      .then((response) => {
        if (response.status == 200) return navigate("/");
        return alert("Can't delete carts.. Please try again letter!");
      })
      .catch();
  };
  return {
    get_category_list,
    login,
    signup,
    logout,
    add_to_cart,
    change_quantity,
    remove_cart,
    delete_user_carts,
  };
}

export default useMethods;
