import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


//createSlice - Redux toolkit 함수로 액션 생성 함수, 리듀서 한번에 정의
const darkModeSlice = createSlice({
  name: "darkmode",
  initialState:{
    isDark: false,
  },
  reducers:{
    toggleDarkMode:(state)=>{
      state.isDark = !state.isDark;
    }
  }
});


export const {toggleDarkMode} = darkModeSlice.actions;

export const store = configureStore({
  reducer:{
    darkmode: darkModeSlice.reducer,
  }
})
