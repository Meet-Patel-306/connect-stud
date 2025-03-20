import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, action) => action.payload,
    clearUserData: () => null,
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, clearUserData } = userDataSlice.actions;

export default userDataSlice.reducer;
