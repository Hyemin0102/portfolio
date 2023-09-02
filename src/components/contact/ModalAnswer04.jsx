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
        혜민님은 요즘 어떤 기술에 흥미가 있나요?
      </motion.div>
    </div>
    <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            그동안 컴포넌트 기반의 React와 Vue 라이브러리를 애용하고 다양한 프로젝트를 구현하였는데, 
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            최근에는 TypeScript에 흥미가 생겨 공부중입니다.
          </motion.div>
        </div>
        <div className='bubble_box'>
          <motion.div 
            className='bubble_text'
            variants={bubble}
            >
            이 외 JWT 관련 REST API 활용과 AWS 배포도 해보고싶어 프로젝트에 적용시켜 볼 예정입니다.  
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

export default ModalAnswer04