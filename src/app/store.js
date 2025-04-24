import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkModeSlice";
import navbarSelectReducer from "../features/navbarSelectSlice";
import registerDataReducer from "../features/registerDataSlice";
import userDataReducer from "../features/userDataSlice";
import hackathonRegisterReducer from "../features/hackathonRegisterSlice";
import hackathonDataReducer from "../features/hackathonDataSlice";
import newsDataReducer from "../features/newsDataSlice";
import allUserDataReducer from "../features/allUserDataSlice";
export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    navbarSelect: navbarSelectReducer,
    registerData: registerDataReducer,
    userData: userDataReducer,
    hackathonRegister: hackathonRegisterReducer,
    hackathonData: hackathonDataReducer,
    newsData: newsDataReducer,
    allUserData: allUserDataReducer,
  },
});
