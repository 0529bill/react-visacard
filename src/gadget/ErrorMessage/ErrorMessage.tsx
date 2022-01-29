import React from "react";

import "./ErrorMessage.css";

interface ErrorMessageState {
  data: any;
  id: string;
}

interface Message {
  [index: string]: string;
}

function ErrorMessage(props: ErrorMessageState) {
  let { id, data } = props;

  let message: Message = {
    card_num: "Card Number must be 16-digit number.",
    card_holder_first: "First name must not be empty.",
    card_cvc: "CVC must be 3-digit number.",
    card_holder_second: "Last name must not be empty.",
    expiration_year: "Year is empty.",
    expiration_month: "Month is empty.",
  };
  return (
    <>
      <div className="ErrorMessageContainer">
        {data[id] ? message[id] : null}
      </div>
    </>
  );
}

export default ErrorMessage;
