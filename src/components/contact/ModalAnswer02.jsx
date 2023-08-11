import React,{ useEffect } from 'react';
import { motion } from 'framer-motion';

const ModalAnswer02 = ({variants,controls,bubble}) => {
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
        혜민님의 요즘 관심사는 무엇인가요?
      </motion.div>
    </div>
    <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            저는 요즘 새로운 것을 배우고
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            그것을 기록하는게 너무 재미있어요!!
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

export default ModalAnswer02