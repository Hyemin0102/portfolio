import React,{ useEffect } from 'react';
import { motion } from 'framer-motion';

const ModalAnswer04 = ({variants,controls,bubble}) => {
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
        혜민님과 함께 일하고 싶어요!
      </motion.div>
    </div>
    <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            감사합니다💜
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            저도 함께 일할 생각에 너무 설레어요!
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            저에게 이메일을 남겨주세요<br/>
            <a href="mailto:gkdlt7373@gmail.com" target="_blank" rel="noopener noreferrer">👉 gkdlt7373@gmail.com</a>
            
          </motion.div>
        </div>
  </motion.div>
  )
}

export default ModalAnswer04