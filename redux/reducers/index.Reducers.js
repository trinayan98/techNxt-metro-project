import { combineReducers } from "redux";
import SetActiveSlice from "../slices/SetActiveSlice";
import SetUploadModalSlice from "../slices/SetUploadModalSlice";

const rootReducer = combineReducers({
  setTab: SetActiveSlice,
  uploadModal: SetUploadModalSlice,
});

export default rootReducer;
