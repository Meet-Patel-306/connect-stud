import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUser: [],
};

export const allUserDataSlice = createSlice({
  name: "allUserData",
  initialState,
  reducers: {
    setAllUserData: (state, actions) => {
      const newUserData = actions.payload.filter(
        (newUserData) =>
          !state.allUser.some((existing) => existing._id === newUserData._id)
      );
      state.allUser = [...state.allUser, ...newUserData];
    },
    resetAllUserData: (state, actions) => {
      state.allUser = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllUserData, resetAllUserData } = allUserDataSlice.actions;

export default allUserDataSlice.reducer;
