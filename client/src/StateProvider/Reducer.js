export const InitialState = {
  categories: [],
  user: null,
  token: null,
  carts: [],
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CATEGORIES":
      return {
        ...state,
        categories: action.categories,
      };
    case "ADD_USER":
      return {
        ...state,
        user: action.user,
      };
    case "REMOVE_USER":
      return {
        ...state,
        user: null,
      };
    case "ADD_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "REMOVE_TOKEN":
      return {
        ...state,
        token: null,
      };
    case "ADD_TO_CARTS":
      return {
        ...state,
        carts: [...state.carts, action.food],
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        carts: action.carts,
      };
    case "REMOVE_FROM_CARTS":
      return {
        ...state,
        carts: [...state.carts.filter((cart) => cart._id != action.cart_id)],
      };
    case "DELETE_CARTS":
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};
