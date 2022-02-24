import "./Nav.css";
import { Link } from "react-router-dom";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="nav" color={"transparent"}>
      

      <AppBar position="static" color={"transparent"}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                <MenuItem key="Add Note" onClick={handleCloseNavMenu}>
                  <Link
                    to="/veersa-practice-app/"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography textAlign="center">Add Note</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key="Add Note" onClick={handleCloseNavMenu}>
                  <Link
                    to="/veersa-practice-app/notes"
                    style={{ textDecoration: "none" }}
                  >
                    <Typography textAlign="center">Notes</Typography>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key="Add Notes"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {" "}
                <Link
                  to="/veersa-practice-app"
                  style={{ textDecoration: "none" }}
                >
                  Add Note
                </Link>
              </Button>
              <Button
                key="Add Notes"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {" "}
                <Link
                  to="/veersa-practice-app/notes"
                  style={{ textDecoration: "none" }}
                >
                  Notes
                </Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Nav;
