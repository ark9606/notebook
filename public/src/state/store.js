import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunk from 'redux-thunk';

import AppReducer from "./duck";

export default createStore(
  AppReducer,
  applyMiddleware(createLogger, thunk)
);