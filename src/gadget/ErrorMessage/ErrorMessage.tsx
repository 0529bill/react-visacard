import React from 'react';

import './ErrorMessage.css';

interface ErrorMessageState {
  data: {
    card_cvc: null | boolean;
    card_holder_first: null | boolean;
    card_holder_second: null | boolean;
    card_num: null | boolean;
    expiration_month: null | boolean;
    expiration_year: null | boolean;
  };
  id: string;
}

interface Message {
  [index: string]: string;
}

function ErrorMessage(props: ErrorMessageState) {
  const { id, data } = props;
  const message: Message = {
    card_num: 'Card Number must be 16-digit number.',
    card_holder_first: 'First name must not be empty.',
    card_cvc: 'CVC must be 3-digit number.',
    card_holder_second: 'Last name must not be empty.',
    expiration_year: 'Year is empty.',
    expiration_month: 'Month is empty.'
  };
  return (
    <>
      <div className="ErrorMessageContainer">
        {data[id as keyof typeof data] ? message[id] : null}
      </div>
    </>
  );
}

export default ErrorMessage;
