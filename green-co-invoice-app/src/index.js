import React from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import './styles/main.css';
import configureStore from "./store/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import * as serviceWorker from './serviceWorker';

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>,
  document.getElementById("root")
);

serviceWorker.register();
