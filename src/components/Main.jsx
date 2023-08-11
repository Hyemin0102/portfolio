import React, {  useEffect, useState, useCallback } from 'react';


import About from './about/About';
import Portfolio from './portfolio/Portfolio';
import MainText from './maintext/MainText';
import Skill from './skill/Skill';
import Contact from './contact/Contact';
import Header from './header/Header';
//import { useInView } from "framer-motion"; 


const Main = () => {

  const [section, setSection] = useState([
    {id:'mainText', offsetY:0},
    {id:'about', offsetY:0},
    {id:'portfolio', offsetY:0},
    {id:'skill', offsetY:0},
    {id:'contact', offsetY:0},
  ]); 
  const [scrollId, setScrollId] = useState(null); 

//처음 로드됐을 때 각 섹션의 offSetY값 업데이트
  const setOffsetY = useCallback(() => {
    let updateSection = section.map((item) => {
      const El = document.getElementById(item.id);
      const rect = El.getBoundingClientRect();
      const sectionScrollTop = window.scrollY || document.documentElement.scrollTop;
      const offsetY = rect.top + sectionScrollTop - 80;
      return {
        ...item,
        offsetY: offsetY >= 0 ? offsetY : 0,
      };
    });
    setSection(updateSection);
    // eslint-disable-next-line
  },[]);//section 

//스크롤 시 스크롤하고있는 영역 item의 offsetY 랑 비교해서 가져와서 scrollId 할당
  const handleSetScrollId = useCallback(
    () => { 
      const scrollTop = document.documentElement.scrollTop;
      let scrollId = null;
      if(scrollTop === 0){
        setScrollId(null);
        return;
      }
      section.forEach((item)=>{
        if(scrollTop >=item.offsetY-100){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
          scrollId = item.id;
        }
    });
    setScrollId(scrollId);
    // eslint-disable-next-line
  },[scrollId]) //scrollId

useEffect(() => {
  setOffsetY();
  handleSetScrollId(); // 초기 스크롤 ID 설정
  // eslint-disable-next-line
}, [handleSetScrollId]);


useEffect(() => {
  const handleScroll = () => {
    handleSetScrollId();
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [handleSetScrollId]);//handleSetScrollId


//새로고침 시 화면 가장 위로 이동
useEffect(()=>{
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })

},[]);

  return (
    <div>
      <Header scrollId={scrollId} section={section}/>
      <MainText />
      <About />
      <Portfolio/>
      <Skill/>
      <Contact/>
    </div>
  );
};

export default Main