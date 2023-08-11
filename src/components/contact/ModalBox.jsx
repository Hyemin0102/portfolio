import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from "react-icons/io5";
import ModalAnswer01 from './ModalAnswer01';
import ModalAnswer02 from './ModalAnswer02';
import ModalAnswer03 from './ModalAnswer03';
import ModalAnswer04 from './ModalAnswer04';
import { useAnimation } from 'framer-motion';

const ModalBox = ({showModal}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

    const showAnswer=(answer)=>{
      setSelectedAnswers(prev=>{
        if(prev.includes(answer)){
          return prev;
        } else {
          return [...prev, answer];
        }
      })
    };

    const scrollRef = useRef(null);


    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });

    const containerVariants = {
      hidden:{},//framer-motion 에서 사용되는 특정한 상태 이름
      visible:{
        transition:{
          staggerChildren:0.5//자식요소에 0.5씩 적용
        }
      }
    }; 

    const bubbleVariants = {
      hidden:{y:100, opacity:0},
      visible:{y:0, opacity:1}
    };

    const controls = useAnimation();
  //framer-motion에서 제공하는 훅, 이 훅을 사용해 컨트롤러 객체 생성, start, end 기능
    
    

  return (
        <div className="modal_container">
          <div className='modal_header'>
            <div className='modal_title'>
              <div className='avater'>
                <img src="../images/hm_profile.jpg" alt="avata" />
              </div>
              <div className='header_cont'>
                <div className='header_title'>HYEMIN</div>
                <div className='header_subtitle'>
                  저와 이야기하고 싶으신가요?
                </div>
              </div>
            </div>
            <button className='modal_close' onClick={showModal}>
              <IoClose />
            </button>
          </div>
          <div className='modal_inner' ref={scrollRef }>
            <div className='bubble_box'>
              <div className='bubble_text'>
                안녕하세요!
              </div>
            </div>
            <div className='bubble_box'>
              <div className='bubble_text'>
                더 재미있고 기발한 세상을 만들고 싶은 혜민입니다.
              </div>
            </div>
            <div className='bubble_box'>
              <div className='bubble_text'>
                저와 어떤 이야기를 하고 싶나요?
              </div>
            </div>
            <div className='bubble_box'>
              <div className='bubble_text'>
                아래에서 채팅 주제를 골라주세요!
              </div>
            </div>
            <div className='bubble_box bubble_select_wrap'>
              <div className='bubble_select' onClick={()=>showAnswer('01')}>
                <div className='select_cont'>인사하고 싶어요!</div>
              </div>
              <div className='bubble_select' onClick={()=>showAnswer('02')}>
                <div className='select_cont'>혜민님의 요즘 관심사는 무엇인가요?</div>
              </div>
              <div className='bubble_select' onClick={()=>showAnswer('03')}>
                <div className='select_cont'>혜민님의 다른 프로젝트는 어디서 볼 수 있나요?</div>
              </div>
              <div className='bubble_select' onClick={()=>showAnswer('04')}>
                <div className='select_cont'>혜민님과 함께 일하고 싶어요!</div>
              </div>
            </div>
            {selectedAnswers.map((answer,index)=>{
              if(answer==='01') return <ModalAnswer01 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              if(answer==='02') return <ModalAnswer02 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              if(answer==='03') return <ModalAnswer03 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              if(answer==='04') return <ModalAnswer04 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              return null;
            })}
          </div>
        </div>
  )
}

export default ModalBox