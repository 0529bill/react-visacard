import React, { Dispatch } from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import { SelectAction } from "@utils/reducers";
import { SelectCardAction } from "@utils/enums";
import { SelectState } from "@utils/reducers";
import VisaPage from "@pages/VisaPage/VisaPage";
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
            }}
          >
            <Form.Group className="mb-3" controlId="floatingInput">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                required
                autoComplete="off"
                maxLength={16}
                onChange={(e) => {
                  props.setCardSide(true);
                  props.dispatch({
                    type: SelectCardAction.CARDNUMSELECTED,
                    payload: e.target.value,
                  });
                }}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Card Holder</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    required
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
                </Col>
                <Col>
                  <Form.Control
                    required
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
                </Col>
              </Row>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Select
                  required
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
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Year</Form.Label>
                <Form.Select
                  required
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
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  required
                  autoComplete="off"
                  maxLength={3}
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
