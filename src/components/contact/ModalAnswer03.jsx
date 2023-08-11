import React,{ useEffect } from 'react';
import { motion } from 'framer-motion';

const ModalAnswer03 = ({variants,controls,bubble}) => {
  useEffect(()=>{
    controls.start('visible');
  },[controls]); 

  return (
    <motion.div 
    variants={variants}
    initial="hidden"
    animate={controls}>
    <div className='bubble_box right'>
      <motion.div 
        className='bubble_text'
        variants={bubble}>
        혜민님의 다른 기록이나 프로젝트는 어디서 볼 수 있나요?
      </motion.div>
    </div>
    <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            저의 프로젝트가 궁금하시다면, Github와 Notion으로 놀러오세요!
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
          <a href="https://github.com/Hyemin0102/" target='blank' rel="noopener noreferrer">
          👉 혜민의 Github 놀러가기</a>
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            <a href="https://amenable-shelf-49d.notion.site/98c800db253143adbff133b35cf06aca" target='blank' rel="noopener noreferrer">
            👉 혜민의 Notion 놀러가기</a>
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            다른 이야기도 궁금하시다면 다시 질문해주세요 :&#41;
          </motion.div>
        </div>
  </motion.div>
  )
}

export default ModalAnswer03