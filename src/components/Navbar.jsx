import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/logos/logo3.jpeg";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Zoom from "@mui/material/Zoom";
import TypingPattern from "../utils/TypePattern";
import "./Navbar.css";

function Navbar() {
  return (
    <Box>
      <AppBar className="dashboard-appbar" position="static">
        <Toolbar className="dashboard-appbar-toolbar">
          <div className="dashboard-appbar-logo">
            <img src={logo} alt="logo" width={"40px"} />
            <Typography className="dashboard-appbar-title">
              <TypingPattern />
            </Typography>
          </div>

          <div className="dashboard-appbar-search"></div>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Notifications" TransitionComponent={Zoom} arrow>
              <IconButton sx={{ marginRight: 3 }}>
                <Badge badgeContent={5} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <IconButton sx={{ p: 0, marginRight: 2 }}>
              <Tooltip title="Profile" TransitionComponent={Zoom} arrow>
                <Avatar sx={{ height: 35, width: 35 }}>G</Avatar>
              </Tooltip>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
