import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";
import store from "./redux";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
