import "./App.css";
import AITextbook from "./features/AI-Textbook/AITextbook";
import LoginPage from "./users/LoginPage";
import DashboardPage from "./users/DashboardPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage type="login" />} />
          <Route path="/register" element={<LoginPage type="register" />} />
          <Route path="/textbook" element={<DashboardPage page="Textbook" />} />
          <Route path="/learning" element={<DashboardPage page="Learning" />} />
          <Route path="/test" element={<DashboardPage page="Test" />} />
          <Route
            path="/ask-questions"
            element={<DashboardPage page="Ask Questions" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
