export const InitialState = {
  user: null,
  token: null,
};

export const Reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};
