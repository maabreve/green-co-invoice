import * as types from "./actionTypes";
import * as invoiceApi from "../../services/invoiceApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadInvoicesSuccess(invoices) {
  return { type: types.LOAD_INVOICES_SUCCESS, invoices };
}

export function loadInvoices() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return invoiceApi
      .getInvoices()
      .then(invoices => {
        dispatch(loadInvoicesSuccess(invoices));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
