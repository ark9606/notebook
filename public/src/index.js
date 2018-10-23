import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import Page from "./views/containers/Page";
import store from "./state/store";

const wrapper = document.getElementById("notebook_app");

if(wrapper) {
  render(
    <Provider store={store}>
      <Page />
    </Provider>,
    wrapper);
}
