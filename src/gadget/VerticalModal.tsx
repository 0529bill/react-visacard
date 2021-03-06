import React, { Dispatch } from 'react';
import { Modal, Button, Row } from 'react-bootstrap';
import ModalCard from '@gadget/ModalCard';
import visa_background from '@assets/visa_background.jpeg';
import road_visa from '@assets/road_visa.jpeg';
import visa_ocean from '@assets/visa_ocean.jpeg';
import visa_land from '@assets/visa_land.png';

import { SelectAction } from '@utils/reducers';

export interface ModalProp {
  show: boolean;
  onHide: () => void;
  onSelect: Dispatch<SelectAction>;
  setSelectTarget?: Dispatch<React.SetStateAction<boolean>>;
}

function VerticalModal(props: ModalProp) {
  // [cardName, cardId, img, onSelectCard, cardContent]
  const cardData = [
    ['Neon star', 'card1', visa_background, props.onSelect, 'neon background'],
    ['Road', 'card2', road_visa, props.onSelect, 'special edition background'],
    ['Ocean', 'card3', visa_ocean, props.onSelect, 'ocean background'],
    ['land', 'card4', visa_land, props.onSelect, 'land background']
  ];

  return (
    <>
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
          <Row style={{ justifyContent: 'center' }}>
            {cardData.map((t) => {
              return (
                <ModalCard
                  cardName={t[0]}
                  cardId={t[1]}
                  img={t[2]}
                  onSelectCard={t[3]}
                  cardContent={t[4]}
                  onHide={props.onHide}
                />
              );
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default VerticalModal;
