import React, { useState, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { selectReducer } from "@utils/reducers";
import { SelectState } from "@utils/reducers";

import LandingPage from "@pages/LandingPage/LandingPage";
import CardPage from "@pages/CardPage/CardPage";

import "./App.css";

function App() {
  const initailSelectState: SelectState = {
    selected: "",
    card_num: 0,
    card_holder: "",
    expiration_year: 0,
    expiration_month: 0,
    card_cvc: 0,
  };

  let [name, setName] = useState("hi");
  let [state, dispatch] = useReducer(selectReducer, initailSelectState);
  console.log("APP_STATE", state);
  return (
    <Container fluid className="App">
      <Routes>
        <Route
          path="/react-card"
          element={<LandingPage dispatch={dispatch} />}
        />
        <Route
          path="/react-card/cardPage"
          element={<CardPage name={name} dispatch={dispatch} state={state} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
