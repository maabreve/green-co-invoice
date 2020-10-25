import { combineReducers } from "redux";
import invoices from "./invoiceReducers";

const rootReducer = combineReducers({
  invoices,
});

export default rootReducer;
