import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkModeSlice";
import navbarSelectReducer from "../features/navbarSelectSlice";
import registerDataReducer from "../features/registerDataSlice";
import userDataReducer from "../features/userDataSlice";
export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    navbarSelect: navbarSelectReducer,
    registerData: registerDataReducer,
    userData: userDataReducer,
  },
});
