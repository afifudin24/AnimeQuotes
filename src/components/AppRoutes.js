import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../App";
import Show from "../pages/Show";
function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/show/:title" element={<Show />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;