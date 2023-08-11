import React, { useEffect } from 'react';
import { motion,useAnimation } from 'framer-motion';

const ModalAnswer01 = ({variants,controls,bubble}) => {

  useEffect(()=>{
    controls.start('visible');
  },[controls]); 

  return (
      <motion.div 
        variants={variants}
        initial="hidden"
        animate={controls}
        >
        <div className='bubble_box right'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            안녕하세요. 만나서 반가워요!
          </motion.div >
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            저도 만나서 반가워요🥰
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            오늘도 좋은 하루 되시길 바랄게요
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

export default ModalAnswer01;