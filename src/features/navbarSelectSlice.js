import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isHome: true,
  isNews: false,
  isHackthone: false,
  isConnect: false,
}

export const navbarSelectSlice = createSlice({
    name: 'navbarSelect',
    initialState,
    reducers: {
      selectHome: (state)=>{
        state.isHome = true,
        state.isNews = false,
        state.isHackthone = false,
        state.isConnect = false
      },
      selectNews: (state)=>{
        state.isHome = false,
        state.isNews = true,
        state.isHackthone = false,
        state.isConnect = false
      },
      selectHackthone: (state)=>{
        state.isHome = false,
        state.isNews = false,
        state.isHackthone = true,
        state.isConnect = false
      },
      selectConnect: (state)=>{
        state.isHome = false,
        state.isNews = false,
        state.isHackthone = false,
        state.isConnect = true
      },
    },
})

export const { selectHome,selectNews,selectHackthone,selectConnect } = navbarSelectSlice.actions

export default navbarSelectSlice.reducer