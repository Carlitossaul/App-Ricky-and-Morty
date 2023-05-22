import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Redux/store/index";
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "rgba(0, 255, 170, 0.6)",
              border: "2px solid rgba(0, 255, 170, 0.5)",
              color: "#000000",
            },
          },
          error: {
            style: {
              background: "rgba(127, 255, 0, 0.5)",
              border: "2px solid rgba(127, 255, 0, 0.5)",
              color: "#000000",
            },
          },
          style: {
            background: "rgba(127, 255, 0, 0.5)",
            border: "2px solid rgba(127, 255, 0, 0.5)",
            color: "#000000",
          },
        }}
      />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
