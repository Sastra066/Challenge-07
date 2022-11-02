import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  LandingPage,
  About,
  Login,
  Protected,
  FileProcessing,
  ListCars
} from "./components";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <LandingPage />
            </Protected>
          }
        />
        <Route
          path="/about"
          element={
            <Protected>
              <About />
            </Protected>
          }
        />
        <Route
          path="/file"
          element={
            <Protected>
              <FileProcessing />
            </Protected>
          }
        />
        <Route
          path="/list-cars"
          element={
            <Protected>
              <ListCars />
            </Protected>
          }
        />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
