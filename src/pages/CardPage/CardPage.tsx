import React, { Dispatch } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import { SelectAction } from "@utils/reducers";
import { SelectCardAction } from "@utils/enums";
import { SelectState } from "@utils/reducers";
import VisaPage from "@pages/VisaPage/VisaPage";
import "./CardPage.css";

interface CardPageState {
  name: string;
  dispatch: Dispatch<SelectAction>;
  state: SelectState;
}

const month: Array<string> = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CardPage(props: CardPageState) {
  console.log("CardPage", props);
  console.log("props.state", props.state);
  let navigate = useNavigate();
  return (
    <>
      <div className="cardpage_outerContainer">
        <VisaPage state={props.state} />
        <div className="cardpage_container">
          <Form>
            <Form.Group className="mb-3" controlId="floatingInput">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                required
                value={props.state.card_num}
                onChange={(e) =>
                  props.dispatch({
                    type: SelectCardAction.CARDNUMSELECTED,
                    payload: e.target.value,
                  })
                }
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Card Holder</Form.Label>
              <Form.Control
                required
                onChange={(e) =>
                  props.dispatch({
                    type: SelectCardAction.CARDHOLDETRSELECTED,
                    payload: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Expiration Date</Form.Label>
                <Form.Select required defaultValue="Month">
                  {/* <option disabled key="Month">
                    Month...
                  </option> */}
                  {month.map((value, index) => (
                    <option key={index}>{value}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Year</Form.Label>
                <Form.Select
                  required
                  defaultValue="Choose..."
                  onChange={(e) =>
                    props.dispatch({
                      type: SelectCardAction.EXPIRATIONDATE_YEAR,
                      payload: e.target.value,
                    })
                  }
                >
                  <option key="Year">Year...</option>
                  {Array.from({ length: 15 }).map((_, index) => (
                    <option key={index + 2022 + ""}>{2022 + index}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CVC</Form.Label>
                <Form.Control
                  required
                  onChange={(e) =>
                    props.dispatch({
                      type: SelectCardAction.CARDCVCSELECTED,
                      payload: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <button onClick={() => navigate("../react-card")}>back</button>
        </div>
      </div>
    </>
  );
}

export default CardPage;
