import { createSlice } from "@reduxjs/toolkit";

const setTabSlice = createSlice({
  name: "setTab",
  initialState: {
    activeTab: "login",
  },
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});
export const { setActiveTab } = setTabSlice.actions;
export default setTabSlice.reducer;
