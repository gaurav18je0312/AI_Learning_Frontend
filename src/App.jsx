import "./App.css";
import {
  LoginScreen,
  RegisterScreen,
  TextbookAIScreen,
  TestAIScreen,
  LearningAIScreen,
  AskToAIScreen,
} from "./screens";
import AITextbook from "./features/textbook_ai/AITextbook";
import { PublicRoutes, UserRoutes } from "./routers";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoutes>
                <LoginScreen />
              </PublicRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoutes>
                <RegisterScreen />
              </PublicRoutes>
            }
          />
          <Route
            path="/textbook/*"
            element={
              <UserRoutes>
                <TextbookAIScreen />
              </UserRoutes>
            }
          />
          <Route
            path="/learning/*"
            element={
              <UserRoutes>
                <LearningAIScreen />
              </UserRoutes>
            }
          />
          <Route
            path="/test/*"
            element={
              <UserRoutes>
                <TestAIScreen />
              </UserRoutes>
            }
          />
          <Route
            path="/ask-questions/*"
            element={
              <UserRoutes>
                <AskToAIScreen />
              </UserRoutes>
            }
          />
          <Route
            path="/chatbot"
            element={
              <UserRoutes>
                <AITextbook />
              </UserRoutes>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
