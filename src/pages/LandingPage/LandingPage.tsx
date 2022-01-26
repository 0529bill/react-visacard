import React, { Dispatch, useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import VerticalModal from "@gadget/VerticalModal";
import { SelectAction } from "@utils/reducers";
// import { SelectState } from "@utils/reducers";
// import { selectReducer } from "@utils/reducers";

import "./LandingPage.css";

interface landingPageProps {
  dispatch: Dispatch<SelectAction>;
}

function LandingPage(props: landingPageProps) {
  let { dispatch } = props;
  let history = useHistory();
  let [modalShow, setmodalShow] = useState<boolean>(false);
  return (
    <>
      <Row className="landingpage_row">
        <Col className="landingpage_left">
          <div className="landingpage_leftConatiner">
            <div className="landingpage_title1">react-card</div>
            <div className="landingpage_selectbtn">
              {/* <button onClick={() => setmodalShow(true)}>Select</button> */}
              <button onClick={() => alert("under construction")}>
                Select
              </button>
            </div>
            <div className="landingpage_startbtn">
              <button onClick={() => history.push("/cardPage")}>Start</button>
            </div>
          </div>
        </Col>
        <Col>
          <div></div>
        </Col>
      </Row>
      <VerticalModal
        show={modalShow}
        onHide={() => setmodalShow(false)}
        onSelect={dispatch}
      />
    </>
  );
}

export default LandingPage;
