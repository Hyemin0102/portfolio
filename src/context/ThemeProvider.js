import React, { createContext, useCallback, useContext, useState } from "react";

import { ThemeProvider as StyledProvider } from 'styled-components';
import { darkTheme, lightTheme } from "../theme/Theme.js";


//context 정의
const ThemeContext = createContext({});


//provider로 넘길 context value 지정
const ThemeProvider = ({ children }) => {
  //localstorage 저장은 원페이지의 경우 안해도 상관없지만 페이지 더 생길 경우 대비해 추가
  //선택한 상태로 새로고침시 유지하고싶으면 useState 초기값을 localTheme 로 설정
  //const LocalTheme = window.localStorage.getItem('theme') || 'light';
  const [themeMode, setThemeMode] = useState('light');
  const themeObject = themeMode === 'light'? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode}}>
      <StyledProvider theme={themeObject}>
        {children}
      </StyledProvider>
      
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;


//context 사용해서 발생되는 함수 정의
export function useTheme(){
  const context = useContext(ThemeContext);
  const {themeMode, setThemeMode} = context;

  const toggleTheme = useCallback(()=>{
    if(themeMode === 'light'){
      setThemeMode('dark');
      window.localStorage.setItem('theme','dark');
    }
    else{
      setThemeMode('light');
      window.localStorage.setItem('theme','light');
    }
    // eslint-disable-next-line
  },[themeMode]);
  return [themeMode,toggleTheme];
};



