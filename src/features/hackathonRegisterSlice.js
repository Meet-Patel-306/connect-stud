import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hackathonName: "",
  organizerName: "",
  organizerEmail: "",
  hackathonLocation: "",
  startDate: "",
  endDate: "",
  type: "",
  subjects: "",
  teamSize: "",
  winner: "",
  firstRunnerUp: "",
  secondRunnerUp: "",
  hackathonAbout: "",
  registerLink: "",
};

export const hackathonRegisterSlice = createSlice({
  name: "hackathonRegister",
  initialState,
  reducers: {
    getHackathonRegister: (state, actions) => {
      state[actions.payload.name] = actions.payload.value;
      // console.log(state[actions.payload.name]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getHackathonRegister } = hackathonRegisterSlice.actions;

export default hackathonRegisterSlice.reducer;
