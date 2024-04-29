import { combineReducers } from "redux";
import { setActiveTab } from "../slices/SetActiveSlice";

const rootReducer = combineReducers({
  setTab: setActiveTab,
});

export default rootReducer;
