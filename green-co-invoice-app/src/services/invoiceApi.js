import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.REACT_APP_API_URL + "invoice/";

export const getInvoices = async (cpf) => {
  return fetch(`${baseUrl}${cpf}`)
    .then(handleResponse)
    .catch(handleError);
}
