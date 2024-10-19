import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./CustomLoading.css";

function CustomLoading() {
  return (
    <div className="loading-container">
      <CircularProgress color="inherit" />
    </div>
  );
}

export default CustomLoading;
