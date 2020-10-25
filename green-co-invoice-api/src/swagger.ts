export const apiSpec =
{
  "openapi": "3.0.0",
  "info": {
    "title": "Nest boilerplate",
    "description": "NestJs API description",
    "version": "1.0",
    "contact": {}
  },
  "tags": [
    {
      "name": "nestJs",
      "description": ""
    }
  ],
  "servers": [],
  "components": {},
  "paths": {
    "/": {
      "get": {
        "operationId": "AppController_getHello",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        }
      }
    },
    "/invoices": {
      "get": {
        "operationId": "InvoiceController_getAll",
        "parameters": [],
        "responses": {
          "200": {
            "description": ""
          }
        }
      },
      "post": {
        "operationId": "InvoiceController_create",
        "parameters": [],
        "responses": {
          "201": {
            "description": ""
          }
        }
      },
    },
 }
}