import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
