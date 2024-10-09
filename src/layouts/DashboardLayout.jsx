import * as React from "react";
import PropTypes from "prop-types";
import left_img from "../assets/dashboard/left_bg.png";
import BookIcon from "@mui/icons-material/Book";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SchoolIcon from "@mui/icons-material/School";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./DashboardLayout.css";

function DashboardLayout({ type, children }) {
  const navigate = useNavigate();
  return (
    <div className="dashboard-page-container">
      <Navbar />
      <div className="dashboard-page">
        <div className="dashboard-left-panel">
          <div className="dashboard-left-panel-content">
            <div
              className={`dashboard-left-panel-content-item ${
                type === "Textbook" ? "selected" : ""
              }`}
              onClick={() => navigate("/textbook")}>
              <BookIcon />
              <span className="dashboard-left-panel-content-item-title">
                Textbook.ai
              </span>
            </div>
            <div
              className={`dashboard-left-panel-content-item ${
                type === "Learning" ? "selected" : ""
              }`}
              onClick={() => navigate("/learning")}>
              <LightbulbIcon />
              <span className="dashboard-left-panel-content-item-title">
                Learning.ai
              </span>
            </div>
            <div
              className={`dashboard-left-panel-content-item ${
                type === "Test" ? "selected" : ""
              }`}
              onClick={() => navigate("/test")}>
              <SchoolIcon />
              <span className="dashboard-left-panel-content-item-title">
                Test.ai
              </span>
            </div>
            <div
              className={`dashboard-left-panel-content-item ${
                type === "Ask to AI" ? "selected" : ""
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
        <div className="dashboard-right-panel">{children}</div>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
