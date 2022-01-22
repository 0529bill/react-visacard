import React, { Dispatch } from "react";
import { Card, Button } from "react-bootstrap";
import { ModalProp } from "@gadget/VerticalModal";

interface CardProps {
  cardName: string;
  cardId: string;
  onSelectCard: Dispatch<React.SetStateAction<string | null>>;
  setSelectTarget?: () => { value: string };
}

function ModalCard(props: CardProps) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.cardName}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => props.onSelectCard(props.cardId)}
        >
          Add Card
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ModalCard;
