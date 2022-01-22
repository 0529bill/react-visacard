import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import VerticalModal from "@gadget/VerticalModal";
import { SelectCardAction } from "@utils/enums";

import "./LandingPage.css";

function LandingPage() {
  let navigate = useNavigate();
  let [modalShow, setmodalShow] = useState<boolean>(false);
  let [selectTarget, setSelectTarget] = useState<string | null>(null);
  // let [state, dispatch] = useReducer(selectReducer);
  console.log("modalShow", modalShow);
  return (
    <>
      <Row className="landingpage_row">
        <Col className="landingpage_left">
          <div className="landingpage_title">Welcome to react-card</div>
          <div className="landingpage_selectbtn">
            <button onClick={() => setmodalShow(true)}>Select</button>
          </div>
          <div className="landingpage_startbtn">
            <button onClick={() => navigate("cardPage")}>Start</button>
          </div>
        </Col>
        <Col>
          <div>card</div>
        </Col>
      </Row>
      <VerticalModal
        show={modalShow}
        onHide={() => setmodalShow(false)}
        onSelect={setSelectTarget}
      />
    </>
  );
}

export default LandingPage;
