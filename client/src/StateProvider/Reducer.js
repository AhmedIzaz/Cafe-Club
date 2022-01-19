export const InitialState = {
  categories: [],
  user: null,
  token: null,
  carts: [],
  order: null,
  owner: null,
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
    case "ADD_CARTS":
      return {
        ...state,
        carts: [...action.carts],
      };
    case "ADD_TO_CARTS":
      return {
        ...state,
        carts: [action.cart, ...state.carts],
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        carts: action.carts,
      };
    case "REMOVE_FROM_CARTS":
      return {
        ...state,
        carts: action.carts,
      };
    case "DELETE_CARTS":
      return {
        ...state,
        carts: [],
      };
    case "ADD_ORDER":
      return {
        ...state,
        order: action.order,
      };
    case "DELETE_ORDER":
      return {
        ...state,
        order: null,
      };
    case "DELETE_EVERYTHING":
      return {
        ...state,
        user: null,
        token: null,
        carts: [],
        order: null,
        owner: null,
      };

    case "ADD_OWNER":
      return {
        ...state,
        owner: action.owner,
      };
    case "REMOVE_OWNER":
      return {
        ...state,
        owner: null,
        owner_token: null,
      };
    case "DELETE_ORDER_FROM_OWNER":
      return {
        ...state,
        owner: {
          ...state.owner,
          orders: action.orders,
        },
      };
    default:
      return state;
  }
};
