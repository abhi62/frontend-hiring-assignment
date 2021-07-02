import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import shiftApp from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  shiftApp,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => console.log("Store Subscribed"));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
