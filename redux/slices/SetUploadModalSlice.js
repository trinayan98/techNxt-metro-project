import { createSlice } from "@reduxjs/toolkit";

const setUploadModalSlice = createSlice({
  name: "uploadModal",
  initialState: {
    showUploadModal: false,
  },
  reducers: {
    setUploadModal: (state, action) => {
      state.showUploadModal = action.payload;
    },
  },
});
export const { setUploadModal } = setUploadModalSlice.actions;
export default setUploadModalSlice.reducer;
