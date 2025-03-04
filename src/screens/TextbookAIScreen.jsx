import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import "./TextbookAIScreen.css";
import TextbookComponent from "../components/TextbookComponent";

function TextbookAIScreen() {
  return (
    <DashboardLayout type="Textbook">
      <TextbookComponent />
    </DashboardLayout>
  );
}

export default TextbookAIScreen;
