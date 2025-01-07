import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SubjectComponent from "./SubjectComponent";
import { useLocation } from "react-router-dom";

function TextbookComponent() {
  const location = useLocation();
  const currentUrl = location.pathname;
  const pathSplit = currentUrl.split("/");
  const locDict = pathSplit.filter((part) => part !== "");
  const capitalizedList = locDict.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1)
  );

  return (
    <div className="textbook-container">
      <div className="textbook-breadcrumbs">
        <Breadcrumbs>
          {capitalizedList.map((val) => (
            <div className="breadcrumb-content">{val}</div>
          ))}
        </Breadcrumbs>
      </div>
      <div className="subject-textbook-container">
        <SubjectComponent />
        <SubjectComponent />
        <SubjectComponent />
      </div>
    </div>
  );
}

export default TextbookComponent;
