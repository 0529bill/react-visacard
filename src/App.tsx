import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import "./App.css";
import LandingPage from "@pages/LandingPage/LandingPage";
import CardPage from "@pages/CardPage/CardPage";

function App() {
  return (
    <Container className="App">
      <Routes>
        <Route path="/react-card" element={<LandingPage />} />
        <Route path="/react-card/cardPage" element={<CardPage />} />
      </Routes>
    </Container>
  );
}

export default App;
