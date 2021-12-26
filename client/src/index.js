import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StateProvider } from "./StateProvider/StateContext";
import { InitialState, Reducer } from "./StateProvider/Reducer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
