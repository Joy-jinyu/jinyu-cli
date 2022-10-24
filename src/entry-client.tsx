import React from 'react';
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { Layout } from "@";
import { getClientStore } from './store'
import routeConfig from "./routeConfig";
import "./index.less";

const store = getClientStore()
hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <Layout routes={routeConfig} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
