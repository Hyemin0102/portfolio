import React, { useEffect, useState } from 'react';
import ModalBox from '../contact/ModalBox';
import { motion ,AnimatePresence  } from 'framer-motion';
import { useTheme } from '../../context/ThemeProvider';
import { toHaveErrorMessage } from '@testing-library/jest-dom/matchers';
import { HiOutlineLightBulb } from "react-icons/hi";

const Header = ({scrollId,section}) => {
  const [modal,setModal] = useState(() => false);
  const [ThemeMode, toggleTheme] = useTheme();
  //console.log('ThemeMode header!!!', ThemeMode);

//section 중 클릭 시 보낸 id값과 같은것 찾아서 그것만 targetSection에 넣고 해당 위치로 이동
  const scrollTo =(id)=>{
    const targetSection = section.find((item)=>item.id === id); //section배열중 맞는 id 배열만 가져옴
    window.scrollTo({
      top:targetSection.offsetY - 80,
      behavior:'smooth'
    })
  }

  //Contact 모달창 토글
  const showModal = () =>{
    setModal(show => !show);
  };

  const txtColor = {
    color: ThemeMode === 'dark' ? '#ffffff' : 'initial',
  };


  return (
    <>
      <header>
        <div>
          <ul className={scrollId ? 'scroll_menu':''}>
            <li onClick={()=>scrollTo('about')} className={scrollId === 'about' ? 'scroll_in':''}>About</li>
            <li onClick={()=>scrollTo('portfolio')} className={scrollId === 'portfolio' ? 'scroll_in':''}>Project</li>
            <li onClick={()=>scrollTo('skill')} className={scrollId === 'skill' ? 'scroll_in':''}>Skills</li>
            <li onClick={showModal} className={`contact_box ${modal ? 'contact_box':''}`}>
              Contact</li>
            <li className="header_theme" onClick={toggleTheme} mode={ThemeMode} style={txtColor}><HiOutlineLightBulb /></li>
          </ul>
        </div>
        
      </header>
      
      <AnimatePresence>
    {modal && 
          <motion.div className='modal_fixed' 
              initial={{opacity:0, y:100}}
              animate={{opacity:1, y:0}}
              exit={{ opacity: 0, y: 100 }}
              transition={{
              duration:1
            }}>
              <ModalBox showModal={showModal}/>
          </motion.div>}
    </AnimatePresence>
    </>
  )
}

export default Header