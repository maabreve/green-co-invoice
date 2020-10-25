import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import './App.css';
import Toolbar from './components/Toolbar';
import Invoice from './components/Invoice.js';
import * as invoiceActions from "./store/actions/invoiceActions";

const App = ({invoices, actions}) => {
  useEffect(() => {
    if (invoices && invoices.length === 0) {
      actions.loadInvoices().catch(error => {
        console.log("Busca de escolas falhou " + error);
      });
    }
  }, [actions, invoices]);

  return (
    <>
      <Toolbar></Toolbar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Invoice invoices={invoices}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}


App.propTypes = {
  invoices: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    invoices: state.invoices,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadInvoices: bindActionCreators(invoiceActions.loadInvoices, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
