import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page not available</h1>
      <p>Something went wrong, please try again later.</p>
      <Button variant="contained">
        <NavLink color="error" to="/">
          Home
        </NavLink>
      </Button>
    </div>
  );
};

export default NotFoundPage;
