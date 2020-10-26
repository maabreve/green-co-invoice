## GREEN CO INVOICE

### INSTRUCTIONS DEV

1. git clone https://github.com/maabreve/green-co-invoice.git
2. Termnial 1: cd green-co-invoice\green-co-invoice-api && run `npm install` && `npm run start`
3. Termnial 2: cd green-co-invoice\green-co-invoice-app && run `npm install` && `npm run start`
4. Open http://localhost:3000/

### BACKEND

- Rest API
- NestJs
- Typescript

#### Backend Endpoints

- POST: {{api_url}}/consumption:  Post customer diary consumption, with flag generated = false
- POST: {{api_url}}/invoice/generate:  Generate pending invoices, storing into Invoice table
- GET:  {{api_url}}/invoice/cpf: Get all customer invoices, by CPF

##### Explanation

There are two tables, Consumption and Invoice.

The consumption table stores the customer's daily consumption and contains a 'generated' flag, which indicates whether an invoice has already been generated for registration. The endpoint `POST: {{api_url}}/consumption` adds the record to the CONSUMPTION table

The endpoint `POST: {{api_url}}/invoice/generate` is available for the generation of invoice, where all consumptions are grouped by cpf and month, which have not yet been generated and summarized the megabytes, including in the INVOICE table. The idea is to call this service once a month, or when is necessary.

The endpoint `GET:  {{api_url}}/invoice/cpf` fetches all customer invoices, obtained by CPF


### FRONTEND

- React
- Redux/Thunk
- TailwindCss


