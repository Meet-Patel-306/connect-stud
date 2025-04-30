import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allUser: [],
};

export const allUserDataSlice = createSlice({
  name: "allUserData",
  initialState,
  reducers: {
    setAllUserData: (state, action) => {
      const newUserData = action.payload.filter(
        (user) => !state.allUser.some((existing) => existing._id === user._id)
      );
      state.allUser = [...state.allUser, ...newUserData];
      console.log("all user save", state.allUser);
    },
    resetAllUserData: (state, action) => {
      state.allUser = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllUserData, resetAllUserData } = allUserDataSlice.actions;

export const selectUserById = (state, userId) =>
  state.allUserData.allUser.find((user) => user._id === userId);

export default allUserDataSlice.reducer;
