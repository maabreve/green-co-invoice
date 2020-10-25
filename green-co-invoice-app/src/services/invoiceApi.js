import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL + "invoice/";

export const getInvoices = async () => {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
