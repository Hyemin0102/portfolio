import React from 'react';
//import classes from "./MainText.module.css";
import { HiOutlineLightBulb } from "react-icons/hi";
import {  useTheme } from '../../context/ThemeProvider';
//import { darkContext, useDarkContext } from '../../store/Context';

const MainText = () => {
  const [ThemeMode, toggleTheme] = useTheme();
  //console.log('ThemeMode',ThemeMode)


  return (
      <div id="mainText" className='main_wrapper'>
          <div className='first_txt main_txt'>
              <h1>
              <span>C</span>
              <span>R</span>
              <span>E</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              <span>V</span>
              <span>E</span>
              </h1>
          </div>
          <div className='second_txt main_txt'>
              <h1>
              <span>F</span>
              <span>R</span>
              <span className='circle' onClick={toggleTheme} mode={ThemeMode} >
                <HiOutlineLightBulb className='main_icon'/>
                {ThemeMode === 'light'?  <span className='theme_txt' style={{'fontWeight':'bold'}}>Turn Off !</span>  :  <span className='theme_txt'>Turn On !</span> } 
              </span>
              <span>N</span>
              <span>T</span>
              <span>E</span>
              <span>N</span>
              <span>D</span>
              </h1>
          </div>
          <div className='third_txt main_txt'>
              <h1>
              <span>D</span>
              <span>E</span>
              <span>V</span>
              <span>E</span>
              <span>L</span>
              <span>O</span>
              <span>P</span>
              <span>E</span>
              <span>R</span>
              </h1>
          </div>
          <div className='bg_img'>
            <p className='bg_color'></p>
            <img src="images/main_profile.webp" alt="main_car"/>
          </div>
      </div>
  )
}

export default MainText