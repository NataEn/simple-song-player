import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App.js";
import songReducers from "./reducers/songReducers";

ReactDom.render(
  <Provider store={createStore(songReducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
