import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/logo3.jpeg";
import left_img from "../assets/left_bg.png";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Zoom from "@mui/material/Zoom";
import BookIcon from "@mui/icons-material/Book";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SchoolIcon from "@mui/icons-material/School";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import ai_logo from "../assets/ai_logo.png";
import "./DashboardPage.css";
import { useNavigate } from "react-router-dom";
import TypingPattern from "../utils/TypePattern";

function DashboardPage({ page }) {
  const navigate = useNavigate();
  return (
    <div className="dashboard-page-container">
      <Box>
        <AppBar className="dashboard-appbar" position="static">
          <Toolbar className="dashboard-appbar-toolbar">
            <div className="dashboard-appbar-logo">
              <img src={logo} alt="logo" width={"40px"} />
              <Typography className="dashboard-appbar-title">
                {/* Ai.Text<b>book</b> */}
                <TypingPattern />
              </Typography>
            </div>

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
      <div className="dashboard-page">
        <div className="dashboard-left-panel">
          <div className="dashboard-left-panel-content">
            <div
              className={`dashboard-left-panel-content-item ${
                page === "Textbook" ? "selected" : ""
              }`}
              onClick={() => navigate("/textbook")}>
              <BookIcon />
              <span className="dashboard-left-panel-content-item-title">
                Textbook.ai
              </span>
            </div>
            <div
              className={`dashboard-left-panel-content-item ${
                page === "Learning" ? "selected" : ""
              }`}
              onClick={() => navigate("/learning")}>
              <LightbulbIcon />
              <span className="dashboard-left-panel-content-item-title">
                Learning.ai
              </span>
            </div>
            <div
              className={`dashboard-left-panel-content-item ${
                page === "Test" ? "selected" : ""
              }`}
              onClick={() => navigate("/test")}>
              <SchoolIcon />
              <span className="dashboard-left-panel-content-item-title">
                Test.ai
              </span>
            </div>
            <div
              className={`dashboard-left-panel-content-item ${
                page === "Ask Questions" ? "selected" : ""
              }`}
              onClick={() => navigate("/ask-questions")}>
              <ChatIcon />
              <span className="dashboard-left-panel-content-item-title">
                Ask to AI
              </span>
            </div>
          </div>
          <div className="dashboard-left-panel-content-item-footer">
            <div className="dashboard-left-panel-content-img">
              <img src={left_img} alt="left-panel-img" width={"220px"} />
            </div>
            <div className="dashboard-left-panel-content-footer-logout">
              <LogoutIcon />
              <span className="logout-text">Logout</span>
            </div>
          </div>
        </div>
        <div className="dashboard-right-panel"></div>
      </div>
    </div>
  );
}

export default DashboardPage;
