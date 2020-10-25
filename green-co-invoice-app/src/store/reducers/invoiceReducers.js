import * as types from "../actions/actionTypes";
import initialState from "../initialState";

export default function schools(state = initialState.invoices, action) {
  switch (action.type) {
    case types.LOAD_INVOICES_SUCCESS:
      return [...state,  ...action.invoices ];
    default:
      return state;
  }
}
