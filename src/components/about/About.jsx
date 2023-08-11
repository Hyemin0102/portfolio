//import classes from "./About.module.css";
import React, { useState } from 'react';
import ModalBox from '../contact/ModalBox';
import { motion ,AnimatePresence  } from 'framer-motion';


const About = () => {
  const [modal,setModal] = useState(()=>false);
  
  const showModal = () =>{
    setModal(show => !show);
  }


  return (
      <motion.div id='about' className='about_wrapper'
        initial={{opacity:0, y:100}}
        whileInView={{
          y:0,
          opacity:1,
          transition:{
            duration:1,
            delay:0.2
          }
        }}
      > 
        <div className='about_inner'>
          <div className='about_left'>
            <p>About Me</p>
            <p><img src="/images/about_img.png" alt="어바웃캐릭터" /></p>
          </div>
          <div className='about_right'>
            <div className='right_wrap'>
            <img src="/images/image6.png" alt="" />
              <div className='introduce_top'>
                <p>안녕하세요.</p>
                <p className='line_wrapper'>사용자의 관점에서 더 재미있고 더 이로운 개발을 하고 싶은 조혜민 입니다.
                  <span className='line'></span>
                </p>
                
                <p>새로운 것을 배우는데에 두려움이 없으며 어느 곳에서도 쉽게 융합됩니다.</p>
                <p>다양한 의견을 나누며 소통하는 과정이 행복합니다.  </p>
                <p>함께 일하고 싶은 프론트엔드 개발자로 성장하겠습니다.</p>
              </div>
              <motion.div className='introduce_bottom'
                initial={{opacity:0, y:100}}
                whileInView={{
                  y:0,
                  opacity:1,
                  transition:{
                    duration:1,
                    delay:0.8
                  }
                }}
                >
                <div className='profile'
                >
                  <div className='about_cont'>
                    <p className='profile_line_wrapper'>
                      <span className='profile_line'></span>
                      <span>Name</span>
                    </p>
                    <p>조혜민</p>
                  </div>
                  <div className='about_cont'>
                    <p className='profile_line_wrapper'>
                      <span className='profile_line'></span>
                      <span>Birth</span>
                    </p>
                    <p>1993.01.02</p>
                  </div>
                  <div className='about_cont'>
                    <p className='profile_line_wrapper'>
                      <span className='profile_line'></span>
                      <span>Address</span>
                    </p>
                    <p>경기도 안양시</p>
                  </div>
                  <div className='about_cont'>
                    <p className='profile_line_wrapper'>
                      <span className='profile_line'></span>
                      <span>Education</span>
                    </p>
                    <p className='education'> 
                      <span>2023.01 ~ 2023.07</span>
                      <span>프로젝트기반 프론트엔드(React, Vue) 웹&앱 SW개발자 양성 과정 강남 그린 컴퓨터 아카데미</span>
                    </p>
                  </div>
                  <div className='about_cont'>
                    <p className='profile_line_wrapper'>
                      <span className='profile_line'></span>
                      <span>Career</span>
                    </p>
                    <p className='career_wrap'>
                      <span className='career_inner'>
                        <span>(주)현대이지웰</span>
                        <span> - 복지몰 상품 기획, 관리 및 Web/App UI/UX 협업 개선</span>
                        
                      </span>
                    </p>
                  </div>
                  <div className="link">
                    <a href="https://github.com/Hyemin0102/" target="_blank" rel="noopener noreferrer">
                      <img height="30" width="30" src="https://cdn.simpleicons.org/GitHub/666666" alt="git" />
                    </a>
                    <a href="https://amenable-shelf-49d.notion.site/98c800db253143adbff133b35cf06aca?pvs=4" target="_blank" rel="noopener noreferrer">
                      <img height="30" width="30" src="https://cdn.simpleicons.org/notion/666666" alt="notion" />
                    </a>
                    <a href="mailto:gkdlt7373@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img height="30" width="30" src="https://cdn.simpleicons.org/Gmail/666666" alt="gmail" />
                    </a>
                  </div>
                  
                </div>
                <div className="contact_btn" onClick={showModal}>
                    Chat with ME!
                </div>
              
              </motion.div>
            </div>
          </div>
        </div>
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
      </motion.div>
  )
};

export default About