import {
  Button,
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
import { useGetMyPlaylistsQuery } from "../../redux/services/meApi";
import Cookies from "js-cookie";

const SideBar = ({
  drawerWidth,
  handleLoginModalOpen,
  handleRegisterModalOpen,
  auth,
}: {
  drawerWidth: number;
  handleLoginModalOpen: any;
  handleRegisterModalOpen: any;
  auth: boolean;
}) => {
  const { data } = useGetMyPlaylistsQuery({
    limit: 10,
    offset: 0,
    accessToken: Cookies.get("accessToken"),
  });

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
      <Divider />
      {auth && (
        <>
          <List>
            {data?.playlists.map((playlist: any) => (
              <ListItem
                key={playlist.id}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton>
                  <ListItemText>
                    <NavLink to={`/playlist/${playlist.id}`}>
                      {playlist.name}
                    </NavLink>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Drawer>
  );
};

export default SideBar;
