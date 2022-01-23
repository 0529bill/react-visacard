import { SelectCardAction } from "@utils/enums";

export interface SelectAction {
  type: string;
  payload: any;
}

export interface SelectState {
  selected: string;
  card_num: any;
  card_holder: string;
  expiration_year: Number;
  expiration_month: Number;
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
      localStorage.setItem("CARDHOLDETRSELECTED", payload);
      return {
        ...state,
        card_num: payload,
      };
    case SelectCardAction.CARDHOLDETRSELECTED:
      localStorage.setItem("CARDHOLDETRSELECTED", payload);
      return {
        ...state,
        card_holder: payload,
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
