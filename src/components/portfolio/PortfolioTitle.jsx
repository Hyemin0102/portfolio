import React, { useMemo } from 'react';
//import classes from "./PortfolioTitle.module.css";

const PortfolioTitle = ({selectedCategory,scrollTosect}) => {
  //selsectedCategory 가져와서 조건문으로 클라스 지정
  
  const scrollStyle = useMemo(() => {
    return `scrollbar ${selectedCategory === 'React' ? 'sect02' : (selectedCategory === 'Vue' ? 'sect03' : '')}`;
  }, [selectedCategory]);
  //console.log('selectedCategory',selectedCategory)

  //console.log(project.projects)
  return (
  <div className='portfolio_title_wrap'>
    <div className='portfolio_title_inner'>
      <div className='portfolio_title_content'>
        <div className = "scroll-menu">
          <div className='circle-1'></div>
          <div className={scrollStyle}></div>
          <div className='overlay'></div>
        </div>
        <nav>
          <h2 className='title_name'>PROJECT</h2>
          <ul className='nav'>
            <li onClick={()=>scrollTosect('Javascript')} className={selectedCategory === 'Javascript' ? 'active':''}>
              <span className='title_line'></span>
              <span>Javascript</span>
            </li>
            <li onClick={()=>scrollTosect('React')} className={selectedCategory === 'React' ? 'active':''}>
              <span className='title_line'></span>
              <span>React</span>
            </li>
            <li onClick={()=>scrollTosect('Vue')} className={selectedCategory === 'Vue' ? 'active':''}>
              <span className='title_line'></span>
              <span>Vue</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
  )
}

export default PortfolioTitle