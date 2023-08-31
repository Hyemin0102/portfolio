<img width="45%" src="https://github.com/Hyemin0102/portfolio/assets/128768462/a428f691-217c-4eec-80df-2593cb1a164d"/>
<img width="45%" src="https://github.com/Hyemin0102/portfolio/assets/128768462/2d1a9667-a925-42cb-815b-544a7a94d989"/>

# Portfolio
https://frontend-portfolio-hm.netlify.app/

리액트를 활용하여 프론트엔드 개발자 준비 과정에서 개발한 작품과 해당 작품들의 기능을 설명하는 포트폴리오 웹페이지입니다. 

Framer Motion과 Styled Components 라이브러리를 적극 활용하여, 사용자와의 인터랙션을 강조한 동적인 웹페이지를 구현했습니다.

<br>

## ⚙개발 환경
React, react-redux, Framer-motion, styled-components

<br>

## 🙄Concept Point
* 가독성, 편리성
* 텍스트, 라인, 단순 도형
* 컬러 포인트(main color 3가지)

<br>

## 🧾목차
* [주요 기능](#주요-기능)
  - 스크롤 이벤트 (useEffect, useCallback, offsetTop계산, framer-motion)
  - 다크모드 구현 (Context API, style-components)
  - 다크모드 구현 (React-redux, style-components)
  - contact 채팅창 구현(useRef, framer-motion)
  - 프로젝트 리스트 JSON 데이터로 관리
* [개선 사항](#개선-사항)
* [문제 해결](#문제-해결)
* [프로젝트를 마치며](#프로젝트를-마치며)

<hr>

<br>

## 🚩주요 기능 
* [스크롤 이벤트 (useEffect, useCallback, offsetTop계산, framer-motion)](#scroll-event)
* [다크모드 구현 (Context API, style-components)](#dark-mode)
* [contact 채팅창 구현(useRef, framer-motion)](#contact-채팅창-구현)
* [프로젝트 리스트 JSON 데이터로 관리](#프로젝트-리스트-JSON-데이터로-관리)

<br>

## 🔥코드 리뷰

### 💻scroll event
  
  원페이지 형식으로 사이트를 구상하다보니 당연히 스크롤 이벤트가 많이 들어가게 되었습니다. 리액트는 framer-motion이나 intersection-observer 등 다양한 scroll 관련 라이브러리가 사용 가능한데 처음 구현해보는거니까 직접 scroll값을 구해서 기능을 구현해보자, 하고 메인 페이지는 순수 스크립트로 이벤트를 구현했습니다.

우선 useState훅으로 각 section의 offSetY값과 현재 화면에서 보여지는 section의 id를 관리합니다.

```javascript
const [section, setSection] = useState([
    {id:'mainText', offsetY:0},
    {id:'about', offsetY:0},
    {id:'portfolio', offsetY:0},
    {id:'skill', offsetY:0},
    {id:'contact', offsetY:0},
  ]);
const [scrollId, setScrollId] = useState(null); 
```
그리고 useCallback 훅으로 section의 offsetY를 구해주는 함수와 스크롤 시 섹션 id 구해주는 함수를 관리해 불필요하게 함수를 재생성 하는 것을 방지했습니다.(섹션 id 구해주는 함수만 의존성 배열로 scroll변수 넣음)
```javascript
 const setOffsetY = useCallback(() => {
    let updateSection = section.map((item) => {
      const El = document.getElementById(item.id);
      const rect = El.getBoundingClientRect();
      const sectionScrollTop = window.scrollY || document.documentElement.scrollTop;
      const offsetY = rect.top + sectionScrollTop - 80;
      return {
        ...item,
        offsetY: offsetY >= 0 ? offsetY : 0,
      };
    });
    setSection(updateSection);
  },[]);
 const handleSetScrollId = useCallback(
    () => { 
      const scrollTop = document.documentElement.scrollTop;
      let scrollId = null;
      section.forEach((item)=>{
        if(scrollTop >=item.offsetY - 100){                                                
          scrollId = item.id;
        }
    });
    setScrollId(scrollId);
  },[scrollId]) //scrollId
```
그리고 useEffect 훅을 사용해 페이지가 랜더링되었을때 setOffsetY와 handleSetScrollId 함수가 호출되고, scroll 발생 시 handlescroll 함수를 호출 해 section의 id값을 가져옵니다.
```javascript
useEffect(() => {
  setOffsetY();
  handleSetScrollId(); // 초기 스크롤 ID 설정

  const handleScroll = () => {
    handleSetScrollId();
  };

  window.addEventListener('scroll', handleScroll);

  //clean-up
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };

}, [handleSetScrollId]);
```

이 때 이벤트 리스너와 같은 외부 리소스가 더 이상 필요하지 않을 때 해당 리소스를 정리하지 않으면 메모리 누수가 발생할 수 있어 클린업 함수를 사용해 컴포넌트가 언마운트 되었을 때 이벤트를 해제해 메모리 누수를 방지하였습니다.
그러면서 불필요한 동작을 줄여 성능 최적화에 도움을 주었습니다.

이러한 방식으로 화면에 보여지는 section의 id값에 따라 nav의 스타일을 다르게 주고, 탭 클릭 시 해당 scrollTop값으로 이동하게 구현하였습니다.

포트폴리오를 만들며 이 스크롤 이벤트를 다루는 부분이 가장 복잡하고 어려웠는데 useEffect와 useCallback 함수를 적절하게 사용하지 않으면 불필요한 렌더링이 너무 많이 되거나 혹은 실시간으로 업데이트가 안되거나 하는 문제점이 발생했습니다.

그래도 라이브러리를 이용하지 않고 코드를 직접 짜면서 스크롤 관련 매서드나 리액트 훅 관련하여 많은 공부가 되었습니다.
<hr>
<br>

### 💻dark-mode

어떤 방식으로 다크모드를 구현할까 고민하다 처음엔 단순히 useContext를 사용해 다크모드 상태를 true, false로 관리하고
  클래스를 다르게 주는 방식을 고안하였습니다.  

  그러나 다크모드 요소 하나하나에 css를 따로 주어야한다는 불편함이 있어 유지보수가 조금 더 용이한 styled-componenets를 사용해 스타일을 적용하여 한 파일에 기본 css와 다크모드 시 css를 관리 할 수 있도록 하였습니다.

  라이트모드, 다크모드에서 적용될 css 설정 파일(Theme.js)과 그것을 한번에 관리해줄 글로벌 css 설정 파일(GlobalStyle.js)을 만들었습니다.

  그리고 이 요소들을 페이지 전역에서 사용 할 수 있도록 context API를 이용해 context를 정의해 다크모드를 구현하였습니다.

```javascript
//context 정의
const ThemeContext = createContext({});
//provider로 넘길 context value 지정
const ThemeProvider = ({ children }) => {
  //localstorage 저장은 원페이지의 경우 안해도 상관없지만 페이지 더 생길 경우 대비해 추가
  //선택한 상태로 새로고침시 유지하고싶으면 useState 초기값을 localTheme 로 설정
  const LocalTheme = window.localStorage.getItem('theme') || 'light';
  const [themeMode, setThemeMode] = useState('light');
  const themeObject = themeMode === 'light'? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode}}>
      <StyledProvider theme={themeObject}>
        {children}
      </StyledProvider>
      
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
//context 사용해서 발생되는 함수 정의
export function useTheme(){
  const context = useContext(ThemeContext);
  const {themeMode, setThemeMode} = context;

  const toggleTheme = useCallback(()=>{
    if(themeMode === 'light'){
      setThemeMode('dark');
      window.localStorage.setItem('theme','dark');
    }
    else{
      setThemeMode('light');
      window.localStorage.setItem('theme','light');
    }
  },[themeMode]);
  return [themeMode,toggleTheme];
};
```
이제 가장 상위요소인 App.js에 글로벌 스타일 컴포넌트와 context provider를 감싸주어 페이지 전체에 해당 요소가 적용될 수 있도록 설정합니다.
```javascript
function App() {
  return (
      <ThemeProvider>
        <GlobalStyle />
        <div>
          <Main />
        </div>
      </ThemeProvider>
  );
}
```
고민했던 부분은 새로고침 시 기본 설정 모드인 라이트모드로 돌아오는데, 이 전에 다크모드를 선택했으면 다크모드로 유지가 될 지 새로고침 시 기본 상태로 돌아올지 였습니다.

여러 페이지가 있었다면 localstorage를 이용해 모드 값을 저장해두었겠지만 원페이지이므로 새로고침 시 기본 라이트 모드로 돌아오도록 구현하되 추후 페이지가 추가 될 경우를 대비해 로컬스토리지 저장 기능도 코딩하였습니다.
<hr>
<br>

### 💻contact 채팅창 구현
조금 더 인터렉션한 웹페이지를 구현하고자 contact 부분을 채팅창 형식으로 만들어 모달 대화 상자를 만들었습니다. 채팅 화면을 스크롤 하기 위해 useRef로 모달 내부의 스크롤 요소를 참조하고, useEffect로 컴포넌트가 렌더링 될 때마다 useRef로 참조한 요소의 가장 아래로 스크롤을 조정했습니다.
```javascript
    const scrollRef = useRef(null);

    useEffect(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });

    <div className='modal_inner' ref={scrollRef}>
         //...생략 
    </div>
```
질문을 클릭 시 showAnswer 라는 함수가 각 질문에 맞는 숫자를 매개변수로 호출이 되는데 이 때 동일한 질문 클릭 시 중복 답변을 방지하기 위해 상태관리에 조건을 추가했습니다.
selectedAnswers상태를 관리하는 setSelectedAnswers 함수 호출 시 함수 인자로 이전 상태인 prev 가 전달되는데, 만약 이미 prev에 해당 숫자가 있으면 이전 상태만 반환되고, 그렇지 않은 경우 이 전 보낸 숫자와 현재 보낸 숫자가 전부 업데이트 됩니다.(전개연산자 사용)
```javascript
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

    //...생략
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
```
그리고 selectedAnswers에 담겨있는 숫자에 따라 맞는 컴포넌트만 화면에 출력되도록 해주었고, 이 때 framer-motion 라이브러리를 사용해 애니메이션 효과를 주었습니다.
```javascript
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
//...생략
         {selectedAnswers.map((answer,index)=>{
              if(answer==='01') return <ModalAnswer01 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              if(answer==='02') return <ModalAnswer02 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              if(answer==='03') return <ModalAnswer03 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              if(answer==='04') return <ModalAnswer04 key={index} variants={containerVariants} controls={controls} bubble={bubbleVariants}/>;
              return null;
            })}
```
<hr>
<br>

### 💻프로젝트 리스트 JSON 데이터로 관리
재사용성 향상과 상태관리를 용이하게 하기 위하여 포트폴리오의 프로젝트 리스트는 JSON파일을 따로 만들어 관리하였습니다.
```javascript
{
  "projects":[
    {
      "id": 1,
      "name" : "Developer", 
      "description":"개발자를 상품화해 판매하는 컨셉의 팀프로젝트 반응형 웹 사이트",
      "detail":"첫번째 팀 프로젝트로 팀원 개인의 개성과 능력을 살리며, 웹페이지 전체 컨셉을 유지하는 것에 중점을 두었습니다. 팀 프로젝트는 Git과 Notion을 통해 협업하였습니다. 메인 캐릭터 소개, Localstorage 데이터를 활용한 캐릭터 구매 영수증 모달창 구현, FAQ페이지를 작업하였습니다.",
      "category":"Javascript",
      "img" :"images/팀프로젝트/1000x730_team.webp",
      "tool" : ["javascript", "jquery","html5", "CSS3"],
      "concept" : "Responsive",
      "detailMokupImg" : ["/images/팀프로젝트/detail_pc_1.webp","/images/팀프로젝트/detail_pc_2.webp","/images/팀프로젝트/detail_pc_3.webp","/images/팀프로젝트/detail_pc_4.webp"],
      "webUrl":"https://bomkyu.github.io/teamProject/",
      "GitUrl":"https://github.com/bomkyu/teamProject"
    },
//...생략
```
이렇게 모든 프로젝트 관련 정보를 JSON파일로 만들어두고, projectArr객체에 값을 담아 사용했습니다. 추후 프로젝트 추가 또는 삭제, 수정 시 JSON 파일만 관리해주어도 아래 코드에 맞게 화면에 출력되므로 관리가 용이할 것으로 예상됩니다.
```javascript
const projectList = () => {
    return projectArr.map((item, index) => {
      const isEvenIndex = index % 2 === 0 ; 
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
```
<hr>
<br>

## 🛠개선 사항
SPA 특성 상 맨 처음 페이지를 로드할때 웹팩에서 압축한 bundle flie을 다운받게 되는데 이 때 인터넷 환경이 느릴 경우에 전체 다운이 받아지기 전까지 화면을 볼 수 없는 불상사가 발생할 수 있습니다. 그래서 그런 점을 보완하기 위해 성능 최적화를 진행해 보았습니다.

포트폴리오 페이지를 만들었기때문에 텍스트나 페이지는 많이 없지만 목업이나 프로젝트 이미지 등, 이미지가 많이 사용되었는데 고화질 이미지를 사용한다고 꽤 큰 이미지를 가져와서 여기서 로딩이 느려지는 것 같았습니다.

이에 이미 성능 최적화 진행하기 전 이미지 사이즈를 줄여서 조금 빨라지긴 했지만 여전히 살짝 버벅 거리는 부분이 발생했습니다.

<br>

## 💡문제 해결
우선, 정확하게 수치로 비교를 해보기 위해 Lighthouse에서 성능 검사를 해보았습니다.

<img src="https://github.com/Hyemin0102/portfolio/assets/128768462/7066ce9e-3db0-4d57-82e2-ab463bfdfd4b">

처음 상태는 57점이고, Opportunities부분에 예상대로 모두 이미지 관련 문제가 발생했습니다.

<img src="https://github.com/Hyemin0102/portfolio/assets/128768462/970ce21d-a9b2-48c8-bba1-f1389654ce2c">

우선 **Serve images in next-gen formats** 의 자세한 부분을 살펴보니.

Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. → PNG나 JPEG보다 Webp, AVIF 형태의 이미지를 사용하라고 알려줍니다.

그래서 전체 이미지를 webp로 변환 후 다시 검사해보니 79점까지 올랐습니다!! 확실히 처음 로딩속도도 빨라진 것 같습니다.
<img src="https://github.com/Hyemin0102/portfolio/assets/128768462/ad6c51c7-bd14-491d-b90c-3bb61545310f">

<br>

## 😊프로젝트를 마치며
리액트를 사용해 포트폴리오를 제작하면서 이론으로 배웠던 다양한 훅을 직접 사용해보며 실전 공부가 많이 되어 뿌듯합니다. 그리고 사용해보니 리액트에 엄청난 매력과 편리성을 느꼈습니다. 컴포넌트 기반으로 페이지를 만들면 왜 유지보수가 편리하고 또 가상DOM을 통해 어떻게 성능이 좋아지는지, 몸소 느낄 수 있는 프로젝트 제작이었습니다. 또 다양하고 편리한 라이브러리나 프레임워크와 호환이 잘 된다는 점도 엄청난 매리트인 것 같습니다. 이런 점 역시 직접 framer-motion, style-components 같은 라이브러리릉 사용해 프로젝트를 제작하며 관련해 느낄 수 있었고, 앞으로 더 능숙하게 활용하기 위하여 많은 프로젝트를 만들며 엽습해야겠습니다. 또 navbar에서 메뉴 클릭 시 route를 사용해 페이지가 넘어가는 것처럼 보이도록 구현하면 어땠을까하는 호기심도 생깁니다. 다음 리액트 프로젝트는 spa 특성에 더 맞게 route를 활용해 여러 페이지로 되어있는 프로젝트를 진행해 봐야겠습니다. 






