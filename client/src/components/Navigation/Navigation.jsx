import React from "react";
import logo from "../images/logo.jpg";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  MenuItem,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./navigationStyles.css";
import { useStateValue } from "../../StateProvider/StateContext";
const Navigation = () => {
  const [state] = useStateValue();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    "Home",
    "Categories",
    "About",
    state.user ? "Logout" : "Login",
  ];

  return (
    <AppBar
      style={{
        backgroundColor: location.pathname == "/" ? "transparent" : "#2c2c2c",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar style={{ alignItems: "unset" }} disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton>
              <Avatar
                component={Link}
                to="/"
                style={{ width: "7em", height: "7em" }}
                src={logo}
                alt="Cafe Club"
              />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              style={{ height: "2em", marginTop: "2em" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={page !== "Home" ? `/${page.toLowerCase()}` : "/"}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            style={{
              paddingRight: "10em",
              width: "30em",
              marginTop: "2em",
            }}
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                className="nav-link"
                to={page !== "Home" ? `/${page.toLowerCase()}` : "/"}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
