import React from 'react';

import { Pagination,EffectFade,Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import project from './project.json';

//fade 시 동일한 목업만 사용해서 겹쳐져도 상관없게 또는 active 슬라이드 상태관리로 클라스
const MokupSlider = ({item}) => {
  //목업 이미지 값만 가져오고 여기서 item.id와 index+1 dl 맞는 아이템만 찾아냄
  //이 때 필터를 사용하면 새로운 배열로 저장하므로 값이 아니라 배열이 저장됨
  //그렇게 되면 findmokupImg[0] 을 map 으로 돌려야함
  const mokupImgArr = project.projects.map((aa) => aa.detailMokupImg); 
  const findmokupImg = mokupImgArr.find((value,index)=> item.id === index +1); //array 1개,


  //const [currentIndex, setCurrentIndex] = useState(0)


  return (
    <Swiper
    modules={[Pagination,EffectFade,Autoplay]}
    spaceBetween={50}
    slidesPerView={1}
    loop
    pagination={{ clickable: true }}
    effect='fade'
    autoplay={{ delay: 3000 }}
        >
      {findmokupImg.map((el,index)=>
        (<SwiperSlide key={index}>
          <img src={el} alt="" />
        </SwiperSlide>)
      )}
    </Swiper>
  )
}

export default MokupSlider;

//map 함수의 콜백 함수에서 JSX를 반환하는 경우, 괄호 ()를 사용하여 여러 줄의 JSX 코드를 감싸주는 것이 권장되는 방식