import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  news: [],
};

export const newsDataSlice = createSlice({
  name: "newsData",
  initialState,
  reducers: {
    setNews: (state, actions) => {
      const newNewsData = actions.payload.filter(
        (newNews) =>
          !state.news.some((existing) => existing._id === newNews._id)
      );
      state.news = [...state.news, ...newNewsData];
    },
    resetNews: (state, actions) => {
      state.news = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNews, resetNews } = newsDataSlice.actions;

export default newsDataSlice.reducer;
