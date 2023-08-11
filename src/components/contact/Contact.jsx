import React, { useState } from 'react';
import { motion ,AnimatePresence  } from 'framer-motion';
import ModalBox from './ModalBox';



const Contact = () => {
  const [modal,setModal] = useState(()=>false);
  
  const showModal = () =>{
    setModal(show => !show);
  }
  const goToTop = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  return (
    <div id="contact" className='contact_wrap'>
      <div className="contact_inner">
        <div className="footer_left">
          <div className='repeat_btn' onClick={goToTop}>
            Repeat</div>
          <div className='repeat_copy'>© 2023 HYEMIN CHO</div>
        </div>
        <div className="footer_right">
          <div className="footer_link">
            <ul>
              <li>Link</li>
              <li><a href="https://github.com/Hyemin0102/" target="_blank" rel="noopener noreferrer">Git</a></li>
              <li>
              <a href="https://amenable-shelf-49d.notion.site/98c800db253143adbff133b35cf06aca?pvs=4" target="_blank" rel="noopener noreferrer">Notion</a></li>
              <li>
              <a href="mailto:gkdlt7373@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a></li>
            </ul>
          </div>
          <div className="footer_contact">
            <ul>
              <li>Contact</li>
              <li className='footer_chat' onClick={showModal}>Message</li>
            </ul>
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
    </div>
  )
}

export default Contact