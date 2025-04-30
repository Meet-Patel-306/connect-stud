import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "dsfs",
  lastName: "ds",
  email: "meetpatel.genai.2024@gmail.com",
  password: "Meet@306",
  phoneNo: "",
  dateOfBirth: "",
  country: "fsd",
  gender: "",
  jobtitle: "",
  biography: "",
  primaryLanguage: "sfsfd",
  languages: [],
  instagram: "",
  linkedin: "",
  github: "",
  portfolio: "",
  skills: [],
  colleges: [],
  experiences: [],
};

export const registerDataSlice = createSlice({
  name: "registerData",
  initialState,
  reducers: {
    getRegisterData: (state, actions) => {
      state[actions.payload.name] = actions.payload.value;
      // console.log(state[actions.payload.name]);
    },
  },
});

// Action creators are generated for each case reducer function
export const { getRegisterData } = registerDataSlice.actions;

export default registerDataSlice.reducer;
