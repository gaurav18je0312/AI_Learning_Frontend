import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";

function ChaptersScreen() {
  return (
    <DashboardLayout type="Textbook">
      <TextbookComponent />
    </DashboardLayout>
  );
}

export default ChaptersScreen;
