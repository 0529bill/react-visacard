import { SelectCardAction, CardActionValidate } from "@utils/enums";

export interface SelectAction {
  type: string;
  payload?: any;
}

export interface SelectState {
  selected: string;
  card_num: any;
  card_holder_first: string;
  card_holder_second: string;
  expiration_year: string;
  expiration_month: string;
  card_cvc: Number;
  error: any;
}

export function selectReducer(
  state: SelectState,
  action: SelectAction
): SelectState {
  let { type, payload } = action;
  switch (type) {
    case CardActionValidate.CARDVALIDATE:
      if (state.card_num.length !== 16) {
        // return {
        //   ...state,
        //   error: { ...state.error, card_num: true },
        // };
        state.error["card_num"] = true;
      } else if (state.card_num.length === 16) {
        state.error["card_num"] = false;
      }

      if (state.card_holder_first.length == 0) {
        state.error["card_holder_first"] = true;
      } else if (state.card_holder_first.length !== 0) {
        state.error["card_holder_first"] = false;
      }

      if (state.card_holder_second.length == 0) {
        state.error["card_holder_second"] = true;
      } else if (state.card_holder_second.length !== 0) {
        state.error["card_holder_second"] = false;
      }

      if (state.expiration_month == "MM") {
        state.error["expiration_month"] = true;
      } else if (state.expiration_month.length !== 0) {
        state.error["expiration_month"] = false;
      }

      if (state.expiration_year == "YY") {
        state.error["expiration_year"] = true;
      } else if (state.expiration_year.length !== 0) {
        state.error["expiration_year"] = false;
      }

      if (state.card_cvc == 0) {
        state.error["card_cvc"] = true;
      } else if (state.expiration_year.length !== 0) {
        state.error["card_cvc"] = false;
      }

      //   [state.card_holder_first, state.card_holder_second].forEach((t) => {
      //     console.log("t", t);
      //     if (t.length == 0) {
      //       console.log("erwerwer");
      //       return {
      //         ...state,
      //         error: { ...state.error, name: true },
      //       };
      //     } else if (t.length !== 0) {
      //       state.error[`${t}`] = false;
      //     }
      //   });

      return { ...state };
    case SelectCardAction.ADD:
      localStorage.setItem("selected", payload);
      return {
        ...state,
        selected: payload,
      };
    case SelectCardAction.CARDNUMSELECTED:
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
      return state;
  }
  return state;
}
