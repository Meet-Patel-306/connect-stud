import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: localStorage.getItem("isDark") === "true",
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, actions) => {
      // console.log(state.isDarkMode);
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDark", state.isDarkMode);
      if (state.isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
