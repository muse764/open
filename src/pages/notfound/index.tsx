import { Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
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
}
