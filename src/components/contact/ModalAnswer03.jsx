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
        혜민님이 추구하는 개발자로서의 가치관이 무엇인가요?
      </motion.div>
    </div>
    <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            저는 세상에 이로움을 주는 기술을 개발하고 싶습니다.
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            거창한 것이 아니라 내가 만든 기술로 누군가 한명이라도 도움이 된다면 그것이 이로운 기술이라고 생각합니다.
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            그런 신념으로 사용자 중심의 서비스를 개발하고 싶습니다!💪
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