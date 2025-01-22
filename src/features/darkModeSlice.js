import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isDarkMode: true,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state,actions)=>{
        state.isDarkMode = !state.isDarkMode;
        if (!state.isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer