import React, { Dispatch } from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import { SelectAction } from "@utils/reducers";
import { SelectCardAction, CardActionValidate } from "@utils/enums";
import { SelectState } from "@utils/reducers";
import VisaPage from "@pages/VisaPage/VisaPage";
import ErrorMessage from "@gadget/ErrorMessage/ErrorMessage";
import "./CardPage.css";

interface CardPageState {
  dispatch: Dispatch<SelectAction>;
  state: SelectState;
  cardSide: boolean;
  setCardSide: Dispatch<React.SetStateAction<boolean>>;
}

const month: Array<string> = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function CardPage(props: CardPageState) {
  let history = useHistory();
  console.log("props_state_cardPageState", props.state);
  return (
    <>
      <div className="cardpage_outerContainer">
        <VisaPage
          state={props.state}
          cardSide={props.cardSide}
          setCardSide={props.setCardSide}
        />
        <div className="cardpage_container">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              props.dispatch({
                type: CardActionValidate.CARDVALIDATE,
              });
            }}
          >
            <Form.Group className="mb-3" controlId="floatingInput">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="number"
                autoComplete="off"
                maxLength={16}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
                  (e.target.value = e.target.value.slice(0, 16))
                }
                // onKeyPress={(e) => (e.target.value.length == 16 ? false : null)}
                onKeyDown={(e) => [
                  ["-", "+", "e"].includes(e.key) ? e.preventDefault() : null,
                ]}
                onChange={(e) => {
                  props.setCardSide(true);
                  props.dispatch({
                    type: SelectCardAction.CARDNUMSELECTED,
                    payload: e.target.value,
                  });
                }}
              />
              <ErrorMessage id="card_num" data={props.state.error} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Card Holder</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="First Name"
                    autoComplete="off"
                    maxLength={8}
                    onChange={(e) => {
                      props.setCardSide(true);
                      props.dispatch({
                        type: SelectCardAction.CARDHOLDERFIRST,
                        payload: e.target.value,
                      });
                    }}
                  />
                  <ErrorMessage
                    id="card_holder_first"
                    data={props.state.error}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Last Name"
                    autoComplete="off"
                    maxLength={8}
                    onChange={(e) => {
                      props.setCardSide(true);
                      props.dispatch({
                        type: SelectCardAction.CARDHOLDERSECOND,
                        payload: e.target.value,
                      });
                    }}
                  />
                  <ErrorMessage
                    id="card_holder_second"
                    data={props.state.error}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Select
                  autoComplete="off"
                  defaultValue="Month"
                  onChange={(e) => {
                    props.setCardSide(true);
                    props.dispatch({
                      type: SelectCardAction.EXPIRATIONDATE_MONTH,
                      payload: e.target.value,
                    });
                  }}
                >
                  <option key="Year" hidden>
                    Month...
                  </option>
                  {month.map((value, index) => (
                    <option key={index}>{value}</option>
                  ))}
                </Form.Select>
                <ErrorMessage id="expiration_month" data={props.state.error} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Year</Form.Label>
                <Form.Select
                  autoComplete="off"
                  defaultValue="Choose..."
                  onChange={(e) => {
                    props.setCardSide(true);
                    props.dispatch({
                      type: SelectCardAction.EXPIRATIONDATE_YEAR,
                      payload: e.target.value,
                    });
                  }}
                >
                  <option key="Year" hidden>
                    Year...
                  </option>
                  {Array.from({ length: 15 }).map((_, index) => (
                    <option key={index + 2022 + ""}>{2022 + index}</option>
                  ))}
                </Form.Select>
                <ErrorMessage id="expiration_year" data={props.state.error} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  type="number"
                  autoComplete="off"
                  maxLength={3}
                  onKeyDown={(e) => [
                    ["-", "+", "e"].includes(e.key) ? e.preventDefault() : null,
                  ]}
                  onChange={(e) => {
                    if (e.target.value.length == 1 && props.cardSide == true) {
                      props.setCardSide(false);
                    } else if (e.target.value == "") {
                      props.setCardSide(true);
                    }
                    props.dispatch({
                      type: SelectCardAction.CARDCVCSELECTED,
                      payload: e.target.value,
                    });
                  }}
                />
                <ErrorMessage id="card_cvc" data={props.state.error} />
              </Form.Group>
            </Row>

            <button type="submit" className="cardpage_submitBtn">
              Submit
            </button>
          </Form>
          <button
            className="cardpage_backBtn"
            onClick={() => history.push("../")}
          >
            back
          </button>
        </div>
      </div>
    </>
  );
}

export default CardPage;
