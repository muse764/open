import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import React from "react";
import { Layout } from "./components";
import ThemeProvider from "./theme";
import store from "./redux";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Layout>
            <App />
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
