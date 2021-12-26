import React, { useContext, useReducer } from "react";

export const state_context = React.createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <state_context.Provider value={useReducer(reducer, initialState)}>
      {children}
    </state_context.Provider>
  );
};

export const useStateValue = () => useContext(state_context);
