import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from "@mui/material";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import { useNavigate } from "react-router-dom";

const CustomAppBar = ({
  drawerWidth,
  handleLogout,
  auth,
}: {
  drawerWidth: number;
  handleLogout: () => void;
  auth: boolean;
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Stack direction="row">
          <IconButton onClick={() => navigate(-1)}>
            <KeyboardArrowLeftOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => navigate(1)}>
            <KeyboardArrowRightOutlinedIcon />
          </IconButton>
        </Stack>

        {auth && (
          <>
            <IconButton onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={() => {
                handleClose();
              }}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
