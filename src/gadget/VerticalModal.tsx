import React, { Dispatch } from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import ModalCard from "@gadget/ModalCard";
export interface ModalProp {
  show: boolean;
  onHide: () => void;
  onSelect: Dispatch<React.SetStateAction<string | null>>;
  setSelectTarget?: Dispatch<React.SetStateAction<boolean>>;
}

function VerticalModal(props: ModalProp) {
  console.log("props", props);
  return window.location.pathname !== "/react-card" ? (
    <>
      <div>嗨</div>
    </>
  ) : (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select your card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <ModalCard
            cardName="card1"
            cardId="card1"
            onSelectCard={props.onSelect}
          />
          <ModalCard
            cardName="card2"
            cardId="card2"
            onSelectCard={props.onSelect}
          />
        </Row>
        {/* <Row>
          <ModalCard cardName="card3" />
          <ModalCard cardName="card4" />
        </Row> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticalModal;
