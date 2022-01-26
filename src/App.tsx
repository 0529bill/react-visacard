import React, { useState, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
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

  let [cardSide, setCardSide] = useState<boolean>(true);
  let [state, dispatch] = useReducer(selectReducer, initailSelectState);
  console.log("APP_STATE", state);
  return (
    <Container fluid className="App">
      <Switch>
        <Route path="/react-card" exact>
          <LandingPage dispatch={dispatch} />
        </Route>
        <Route path="/react-card/cardPage">
          <CardPage
            dispatch={dispatch}
            state={state}
            cardSide={cardSide}
            setCardSide={setCardSide}
          />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
