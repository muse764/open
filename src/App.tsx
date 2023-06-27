import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./router";
import ThemeProvider from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  );
};

export default App;
