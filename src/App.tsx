import React, { useState, useReducer, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { selectReducer } from '@utils/reducers';
import { SelectState } from '@utils/reducers';

import './App.css';
const LandingPage = lazy(() => import('@pages/LandingPage/LandingPage'));
const CardPage = lazy(() => import('@pages/CardPage/CardPage'));

function App() {
  const initailSelectState: SelectState = {
    selected: '',
    card_num: 0,
    card_holder_first: '',
    card_holder_second: '',
    expiration_year: 'YY',
    expiration_month: 'MM',
    card_cvc: 0,
    error: {
      card_num: null,
      card_holder_first: null,
      card_holder_second: null,
      card_cvc: null,
      expiration_month: null,
      expiration_year: null
    },
    download_input: ''
  };

  const [cardSide, setCardSide] = useState<boolean>(true);
  const [state, dispatch] = useReducer(selectReducer, initailSelectState);
  return (
    <Container fluid className="App">
      <React.Suspense fallback={<div>Loading...</div>}>
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
      </React.Suspense>
    </Container>
  );
}

export default App;
