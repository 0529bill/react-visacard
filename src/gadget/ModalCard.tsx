import React, { Dispatch } from 'react';
import { Card, Button } from 'react-bootstrap';
import { SelectAction } from '@utils/reducers';
import { SelectCardAction } from '@utils/enums';

interface CardProps {
  cardName: string;
  cardId: string;
  //   onSelectCard: Dispatch<React.SetStateAction<string | null>>;
  onSelectCard: Dispatch<SelectAction>;
  setSelectTarget?: () => { value: string };
  onHide: () => void;
  img: any;
  cardContent: string;
}

const ModalCard: React.FC<CardProps> = React.memo((props) => {
  return (
    <Card
      key={props.cardId}
      style={{ width: '18rem', textAlign: 'center', margin: '30px' }}
    >
      <Card.Img
        src={props.img}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <Card.Body>
        <Card.Title>{props.cardName}</Card.Title>
        <Card.Text>{props.cardContent}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            props.onSelectCard({
              type: SelectCardAction.ADD,
              payload: props.img
            });
            props.onHide();
          }}
        >
          Select this background
        </Button>
      </Card.Body>
    </Card>
  );
});

export default ModalCard;
