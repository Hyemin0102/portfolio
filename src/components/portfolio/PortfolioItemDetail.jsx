import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import MokupSlider from './MokupSlider';


const PortfolioItemDetail = ({item,onClose}) => {
  

  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(()=>{
    setIsModalVisible(true);
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () =>{
      const scrollY = document.body.style.top;
    document.body.style.cssText = '';
    window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }

  },[]);

  //console.log(window.scrollY)

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
          <button className="cont_site"><a href={item.webUrl} target="_blank" rel="noopener noreferrer">WebSite</a></button>
          {item.name === 'Sulwhasoo' ? <button className="cont_Git"><a href={item.MoUrl} target="_blank" rel="noopener noreferrer">Mobile</a></button> : ''}
          <button className="cont_Git"><a href={item.GitUrl} target="_blank" rel="noopener noreferrer">Github</a></button>
        </div>
        <div className='modal_detail_wrap'>
          <div className='cont_line'></div>
          <div className="cont_script_detail">{item.detail}</div>
        </div>
        <div className='slide_img'>
        <MokupSlider item={item}/>
        </div>
      </div>
      
    </div>
  )
}

export default PortfolioItemDetail