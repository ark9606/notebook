import { combineReducers } from "redux";

import records from "./records";
import form from "./form";
import arrange from "./arrange";


export default combineReducers({
  records,
  form,
  arrange
})
