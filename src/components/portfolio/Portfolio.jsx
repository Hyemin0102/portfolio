import React, { useState, useEffect } from 'react';
import PortfolioDetail from './PortfolioDetail';
import PortfolioTitle from './PortfolioTitle';
import project from './project.json';
import { motion } from "framer-motion"; 

const Portfolio = () => {
  

  const projectJson = project.projects;
  
  const [selectedCategory, setSelsectedCategory] =  useState('');
  //console.log('selsectedCategory',selsectedCategory)
  useEffect(()=>{
    const handleSelectedCategory = () => {
      const portfolioLi = document.getElementsByClassName('portfolio_list');
      const portfolioLiArray = Array.from(portfolioLi);

      const currentLi = portfolioLiArray.find((item)=>{ //li 배열 중 현재 스크롤 영역 찾아냄
        const rect = item.getBoundingClientRect();
        return (
          rect.top < window.innerHeight / 2 &&
          rect.bottom > window.innerHeight /2
          )
      });
      if(currentLi){
        const category = currentLi.querySelector('div.category');
        //console.log('category',category)
        if(category){
          const categoryText = category.textContent;
          setSelsectedCategory(categoryText); 
        }
      }
    }

    window.addEventListener('scroll',handleSelectedCategory); 
    return ()=>{
    window.removeEventListener('scroll',handleSelectedCategory);
    }

  },[selectedCategory])

  
  //li클릭 시 거기서 보내는 인자랑 category 같은거 선택
  const scrollTosect = (category) =>{
    const selectedItem = project.projects.find(
      (item)=> item.category === category); 
      //카테고리 같은거 찾으면 바로 빠져나감, 첫번째 값 가져옴
  
      if(selectedItem){
        const selectedId = selectedItem.id;
        const selectedIdEl = document.getElementById(selectedId)
        //클릭한 li와 같은 카테고리 중 가장 먼저 있는 아이템의 html 요소 찾아냄
        
        if(selectedIdEl){
          const portfolioWrapperEl = document.querySelector('.portfolio_wrapper');
          const scrollOffsetTop = selectedIdEl.offsetTop + portfolioWrapperEl.offsetTop
          window.scrollTo({
            top:scrollOffsetTop,
            behavior:'smooth'
          })
        }
      }
  }

  return (
    <motion.div id='portfolio' className='portfolio_wrapper'
      initial={{opacity:0, y:50}}
      whileInView={{
        opacity:1, 
        y:0,
        transition:{
          duration:1,
          delay:0.2
        }
      }}
      >
      <div>
        <PortfolioTitle  selectedCategory={selectedCategory} scrollTosect={scrollTosect}/>
      </div>
      <div>
        <PortfolioDetail setSelsectedCategory={setSelsectedCategory} projectArr={projectJson}/>
      </div>
    </motion.div>
  )
}

export default Portfolio