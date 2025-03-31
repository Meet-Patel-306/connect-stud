import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hackathons: [],
};

export const hackathonDataSlice = createSlice({
  name: "hackathonData",
  initialState,
  reducers: {
    setHackathons: (state, actions) => {
      const newHackathons = actions.payload.filter(
        (newHackathon) =>
          !state.hackathons.some(
            (existing) => existing._id === newHackathon._id
          )
      );
      state.hackathons = [...state.hackathons, ...newHackathons];
    },
    resetHackathon: (state, actions) => {
      state.hackathons = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHackathons, resetHackathon } = hackathonDataSlice.actions;

export default hackathonDataSlice.reducer;
