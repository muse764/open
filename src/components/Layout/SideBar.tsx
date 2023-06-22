import {
  Card,
  CardContent,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function SideBar({
  drawerWidth,
  handleLoginModalOpen,
  handleRegisterModalOpen,
  auth,
}: {
  drawerWidth: number;
  handleLoginModalOpen: any;
  handleRegisterModalOpen: any;
  auth: boolean;
}) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        // make sidebar transparent
        // "& .MuiDrawer-paperAnchorDockedLeft": {
        //   borderRight: "none",
        //   backgroundColor: "transparent",
        // },
      }}
    >
      <Toolbar>
        <Typography>Muse</Typography>
      </Toolbar>
      <Divider />
      <Card
        sx={{
          m: 0.5,
        }}
      >
        <CardContent>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>
                  <NavLink to="/">Home</NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton>
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText>
                  <NavLink to="/search">search</NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Divider />

      {!auth && (
        <Card
          sx={{
            m: 0.5,
          }}
        >
          <CardContent>
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton onClick={handleLoginModalOpen}>
                  <ListItemText>Login</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton onClick={handleRegisterModalOpen}>
                  <ListItemText>Register</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      )}
    </Drawer>
  );
}
