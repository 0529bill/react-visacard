import { SelectCardAction } from "@utils/enums";

interface SelectAction {
  type: SelectCardAction;
  payload: string;
}

interface SelectState {
  selected: string;
}

export function selectReducer(state: SelectState, action: SelectAction) {
  let { type, payload } = action;
  switch (type) {
    case SelectCardAction.ADD:
      localStorage.setItem("selected", payload);
      return {
        ...state,
        selected: payload,
      };
  }
}
