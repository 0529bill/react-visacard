import React, { Dispatch, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import VerticalModal from "@gadget/VerticalModal";
import { SelectAction } from "@utils/reducers";
import { SelectState } from "@utils/reducers";
import road_visa from "@assets/road_visa.jpeg";
import visa from "@assets/visa.png";
import visa_cvc from "@assets/visa_cvc.png";

import "./LandingPage.css";

interface landingPageProps {
  dispatch: Dispatch<SelectAction>;
  state: SelectState;
}

function LandingPage(props: landingPageProps) {
  let { dispatch } = props;
  let history = useHistory();
  let [modalShow, setmodalShow] = useState<boolean>(false);
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <Row className="landingpage_row">
          <Col className="landingpage_left">
            <div className="landingpage_leftConatiner">
              <div className="landingpage_title1">react-card</div>
              <div className="landingpage_selectbtn">
                <button onClick={() => setmodalShow(true)}>Select</button>
              </div>
              <div className="landingpage_startbtn">
                <button
                  onClick={() => {
                    history.push("/cardPage");
                    window.location.reload();
                  }}
                >
                  Start
                </button>
              </div>
            </div>
          </Col>
          <Col style={{ height: "100vh" }}>
            <div className="landing_card_container flipped">
              <div className="landing_card landing_front">
                <img
                  className="landing_card_background"
                  src={props.state.selected ? props.state.selected : road_visa}
                  alt="landing_card_background"
                />
                <div>
                  <img
                    className="landing_card_visaIcon"
                    src={visa}
                    alt="visa"
                  />
                </div>
                <div>
                  <img
                    className="landing_card_visaCvc"
                    src={visa_cvc}
                    alt="visa_cvc"
                  />
                </div>
                <div className="landing_card_cardNum">################</div>
                <div className="landing_card_cardHolder">
                  <div className="landing_card_cardHolder_title">
                    Card Holder
                  </div>
                  <div className="landing_card_cardHolder_text">
                    {props.state.card_holder_first ||
                    props.state.card_holder_second
                      ? props.state.card_holder_first +
                        " " +
                        props.state.card_holder_second
                      : "Full Name"}
                  </div>
                </div>
                <div className="visapage_expireDate">
                  <div className="visapage_expireDate_title">Expires</div>
                  <div>
                    {props.state.expiration_month || props.state.expiration_year
                      ? `${props.state.expiration_month}/${props.state.expiration_year}`
                      : "MM/YY"}
                  </div>
                </div>
              </div>
              <div className="visapageDiv visapage_back">
                <img
                  className="visapage_background"
                  src={props.state.selected ? props.state.selected : road_visa}
                  alt="visapage_background"
                />
                <div className="visapage_blackStrip" />
                <div className="visapage_cvcNum">
                  <div className="visapage_cvcNum_title">
                    {props.state.card_cvc ? props.state.card_cvc : "CVC"}
                  </div>
                </div>
                <div className="visapage_whiteStrip" />
                <div>
                  <img
                    className="visapage_visaIcon_back"
                    src={visa}
                    alt="visa"
                  />
                </div>
                <div>
                  <img
                    className="visapage_visaCvc_back"
                    src={visa_cvc}
                    alt="visa_cvc"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <VerticalModal
          show={modalShow}
          onHide={() => setmodalShow(false)}
          onSelect={dispatch}
        />
      </Container>
    </>
  );
}

export default LandingPage;
