import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";

const Modal = ({item,onClose}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(()=>{
    setIsModalVisible(true); 
  },[]);

  const detailViewClose = () =>{
    setIsModalVisible(false);
    setTimeout(()=>{
      onClose();
    },300)
  }

  return (
    <div className={`modal_detail ${isModalVisible ? 'show' : ''}`}>
      <div className='modal_cont'>
        <button className='modal_close' onClick={detailViewClose}><IoClose/></button>
        <div className='modal_header_wrap'>
            <div className='cont_line'></div>
            <div className="cont_name">{item.name}</div>
            <div className="cont_description">{item.description}</div>
        </div>
        <div className='modal_concept_wrap'>
          <div className='cont_line'></div>
          <p className="cont_concept">
            <span>Concept</span>
            <span>{item.concept}</span>
          </p>
          <p className="cont_tool">
            <span>Tool</span>
            <span className='cont_tool_item'>
            {item.tool.map((tool,toolIndex)=>(
                  <span key={toolIndex} >{tool}</span>
                  ))}
            </span>
          </p>
        </div>
        <div className="modal_btn_wrap">
          <button className="cont_site">WebSite</button>
          <button className="cont_Git">Github</button>
        </div>
        <div className='modal_detail_wrap'>
          <div className='cont_line'></div>
          <div className="cont_script_detail">{item.detail}</div>
        </div>
      </div>
      {/* <div className="modal_bg">
      <img src="images/green.png" alt="" />
      </div> */}
      <div className='modal_pc'>
        <img src="images/iphone_apart.png" alt="" />
        {/* <img src="images/imac24_team.png" alt="" /> */}
      </div>
    </div>
  )
}

export default Modal