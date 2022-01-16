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
  Typography,
  Badge,
  Tooltip,
} from "@material-ui/core";
import {
  EmojiFoodBeverage,
  LocalDiningOutlined,
  Menu as MenuIcon,
  ShoppingCart,
} from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./navigationStyles.css";
import { useStateValue } from "../../StateProvider/StateContext";
import useMethods from "../../StateProvider/useMethods";
const Navigation = () => {
  const { logout } = useMethods();
  const [state] = useStateValue();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="box-menu-item" to="/">
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="box-menu-item" to="/categories">
                  Categories
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="box-menu-item" to="/about">
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                {state.user && state.token ? (
                  <Typography
                    variant="body1"
                    className="box-menu-item"
                    onClick={() => logout()}
                    style={{ cursor: "pointer" }}
                  >
                    Logout
                  </Typography>
                ) : (
                  <Link className="box-menu-item" to="/login">
                    Login
                  </Link>
                )}
              </MenuItem>
              {state.user && state.token && (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link className="box-menu-item" to="/cart">
                    <Badge badgeContent={state.carts.length} color="secondary">
                      Food Carts
                    </Badge>
                  </Link>
                </MenuItem>
              )}
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
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/categories">
              Categories
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            {state.user && state.token ? (
              <Typography
                variant="body1"
                className="nav-link"
                onClick={() => logout()}
                style={{ cursor: "pointer" }}
              >
                Logout
              </Typography>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}

            {state.user && state.token && (
              <Tooltip title="Click to see your food cart">
                <IconButton
                  style={{ width: "1em", height: "1.5em" }}
                  className="nav-link"
                >
                  <Badge
                    component={Link}
                    to="/cart"
                    badgeContent={state.carts.length}
                    color="secondary"
                  >
                    <LocalDiningOutlined style={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
