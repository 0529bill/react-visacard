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
    card_holder_first: "",
    card_holder_second: "",
    expiration_year: "YY",
    expiration_month: "MM",
    card_cvc: 0,
    error: {},
  };

  let [cardSide, setCardSide] = useState<boolean>(true);
  let [state, dispatch] = useReducer(selectReducer, initailSelectState);
  return (
    <Container fluid className="App">
      <Switch>
        <Route path="/" exact>
          <LandingPage dispatch={dispatch} state={state} />
        </Route>
        <Route path="/cardPage">
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
