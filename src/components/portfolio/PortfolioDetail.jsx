import React, { useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import PortfolioItemDetail from './PortfolioItemDetail';


const PortfolioDetail = ({projectArr}) => {
  const [enterItem, setEnterItem] = useState(null); //mouseenter 관리
  const [modalItem, setModalItem] = useState('');

  const detailViewOpen = (id) => {
    setModalItem(id);
  };
  const detailViewClose = () =>{
    setModalItem('');
  };
  //선택한 item의 id값 받아옴
  const handleMouseEnter=(id)=>{
    setEnterItem(id)
  };

  //선택한 item 없게
  const handleMouseLeave=()=>{
    setEnterItem(null)
  };

  const categoryColor=(category)=>{
    if(category === 'Javascript'){
      return 'border-java';
    }else if(category === 'React'){
      return 'border-react';
    }else if(category === 'Vue'){
      return 'border-vue';
    }
  }

  const projectList = () => {
    return projectArr.map((item, index) => {
      const isEvenIndex = index % 2 === 0 ; //짝수 구분
      const isEnter = enterItem === index + 1; //enterItem의 값 = 그 아이템의 index+1 이 같아야 isEnter가 true

      return (
        <React.Fragment key={index}>
          <li className='portfolio_list' id={index+1}>
            {isEvenIndex ? (
              <>
              <div className={`portfolio_img_wrap ${isEnter ? 'on':''}`}
                onMouseEnter={()=>handleMouseEnter(index+1)}
                onMouseLeave={handleMouseLeave}
                >
                  <img src={item.img} alt="project"/>
                  <div className='detail_wrap'>
                    <div className="more" onClick={()=>detailViewOpen(item.id)}>
                      More View <span><FiArrowUpRight /></span>
                    </div>
                  </div>
              </div>
              <div className="portfolio_txt_wrap">
                <div>
                  <div className='name'>{item.name}</div>
                  <div className='description'>{item.description}</div>
                </div>
                <div className='txt_btn'>
                    <div className={`category ${categoryColor(item.category)}`}>{item.category}</div>
                    <div className='concept'>{item.concept}</div>
                </div>
              </div>
              </>
            ) : (
              <>
                <div className="portfolio_txt_wrap">
                  <div>
                    <div className='name'>{item.name}{/* <span><FiArrowUpRight /></span> */}</div>
                    <div className='description'>{item.description}</div>
                  </div>
                  <div className='txt_btn'>
                    <div className={`category ${categoryColor(item.category)}`}>{item.category}</div>
                    <div className='concept'>{item.concept}</div>
                  </div>
                </div>
                <div className={`portfolio_img_wrap ${isEnter ? 'on':''}`}
                  onMouseEnter={()=>handleMouseEnter(index+1)}
                  onMouseLeave={handleMouseLeave}>
                  <img src={item.img} alt="project" />
                  <div className='detail_wrap'>
                      <div className="more" onClick={()=>detailViewOpen(item.id)}>
                        More View<span><FiArrowUpRight /></span>
                      </div>
                    </div>
                </div>
              </>
            )}
          {modalItem === item.id && <PortfolioItemDetail item={item} onClose={detailViewClose}/>}
          </li>
        </React.Fragment>
      );
    });
  };


  return (
    <ul className='portfolio_detail' >
      {projectList()}
    </ul>
  )
}

export default PortfolioDetail

