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
        혜민님이 개발자가 되고 싶은 이유는 무엇인가요?
      </motion.div>
    </div>
    <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            무엇보다도 '성취감' 에서 오는 재미가 가장 큰 이유인 것 같아요!
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            어려웠던 로직을 스스로 풀어냈을 때의 성취감과 노력하는 만큼 계속 성장할 수 있다는 점이 매우 매력적입니다😆
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