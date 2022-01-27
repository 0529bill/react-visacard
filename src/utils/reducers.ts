import { SelectCardAction } from "@utils/enums";

export interface SelectAction {
  type: string;
  payload: any;
}

export interface SelectState {
  selected: string;
  card_num: any;
  card_holder_first: string;
  card_holder_second: string;
  expiration_year: Number | string;
  expiration_month: Number | string;
  card_cvc: Number;
}

export function selectReducer(
  state: SelectState,
  action: SelectAction
): SelectState {
  let { type, payload } = action;
  switch (type) {
    case SelectCardAction.ADD:
      localStorage.setItem("selected", payload);
      return {
        ...state,
        selected: payload,
      };
    case SelectCardAction.CARDNUMSELECTED:
      //   if (payload.length !== 16) {
      //     alert("card number must be 16 digit numbers");
      //   }
      localStorage.setItem("CARDNUMSELECTED", payload);
      return {
        ...state,
        card_num: payload,
      };
    case SelectCardAction.CARDHOLDERFIRST:
      localStorage.setItem("CARDHOLDERFIRST", payload);
      return {
        ...state,
        card_holder_first: payload,
      };
    case SelectCardAction.CARDHOLDERSECOND:
      localStorage.setItem("CARDHOLDERSECOND", payload);
      return {
        ...state,
        card_holder_second: payload,
      };
    case SelectCardAction.EXPIRATIONDATE_YEAR:
      localStorage.setItem("EXPIRATIONDATE_YEAR", payload);
      return {
        ...state,
        expiration_year: payload,
      };
    case SelectCardAction.EXPIRATIONDATE_MONTH:
      localStorage.setItem("EXPIRATIONDATE_MONTH", payload);
      return {
        ...state,
        expiration_month: payload,
      };
    case SelectCardAction.CARDCVCSELECTED:
      localStorage.setItem("CARDCVCSELECTED", payload);
      return {
        ...state,
        card_cvc: payload,
      };
    default:
      break;
  }
  return state;
}
