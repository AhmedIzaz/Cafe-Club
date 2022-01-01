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
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
import "./navigationStyles.css";
const pages = ["Home", "Categories", "About"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
<<<<<<< HEAD
  const location = useLocation();
  return (
    <AppBar
      style={{
        backgroundColor: location.pathname == "/" ? "transparent" : "#2c2c2c",
      }}
      position="static"
    >
=======

  return (
    <AppBar style={{ backgroundColor: "transparent" }} position="static">
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
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
<<<<<<< HEAD
              style={{ height: "2em", marginTop: "2em" }}
=======
              style={{ top: "-20%" }}
>>>>>>> e71d92572079cd317945651a1ef2a69705723a83
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
              width: "20em",
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
