import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: true,
  isNews: false,
  isHackathon: false,
  isConnect: false,
};

export const navbarSelectSlice = createSlice({
  name: "navbarSelect",
  initialState,
  reducers: {
    selectHome: (state) => {
      (state.isHome = true),
        (state.isNews = false),
        (state.isHackathon = false),
        (state.isConnect = false);
    },
    selectNews: (state) => {
      (state.isHome = false),
        (state.isNews = true),
        (state.isHackathon = false),
        (state.isConnect = false);
    },
    selectHackathon: (state) => {
      (state.isHome = false),
        (state.isNews = false),
        (state.isHackathon = true),
        (state.isConnect = false);
    },
    selectConnect: (state) => {
      (state.isHome = false),
        (state.isNews = false),
        (state.isHackathon = false),
        (state.isConnect = true);
    },
  },
});

export const { selectHome, selectNews, selectHackathon, selectConnect } =
  navbarSelectSlice.actions;

export default navbarSelectSlice.reducer;
