import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import "./SubjectComponent.css";

function SubjectComponent() {
  return (
    <div className="subject-component">
      <div className="subject-name">Mathematics</div>
      <div className="subject-textbook">
        <Card className="textbook-box">
          <CardActionArea className="textbook-box-area">
            <div className="textbook-box-name">Mathematics-1</div>
          </CardActionArea>
        </Card>
        <Card className="textbook-box">
          <CardActionArea className="textbook-box-area">
            <div className="textbook-box-name">Mathematics-1</div>
          </CardActionArea>
        </Card>
        <Card className="textbook-box">
          <CardActionArea className="textbook-box-area">
            <div className="textbook-box-name">Mathematics-1</div>
          </CardActionArea>
        </Card>
        <Card className="textbook-box">
          <CardActionArea className="textbook-box-area">
            <div className="textbook-box-name">Mathematics-1</div>
          </CardActionArea>
        </Card>
        <Card className="textbook-box">
          <CardActionArea className="textbook-box-area">
            <div className="textbook-box-name">Mathematics-1</div>
          </CardActionArea>
        </Card>
        <Card className="textbook-box">
          <CardActionArea className="textbook-box-area">
            <div className="textbook-box-name">Mathematics-1</div>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}

export default SubjectComponent;
