<img width="45%" src="https://github.com/Hyemin0102/portfolio/assets/128768462/a428f691-217c-4eec-80df-2593cb1a164d"/>
<img width="45%" src="https://github.com/Hyemin0102/portfolio/assets/128768462/2d1a9667-a925-42cb-815b-544a7a94d989"/>

# Portfolio
https://frontend-portfolio-hm.netlify.app/

리액트를 활용하여 프론트엔드 개발자 준비 과정에서 개발한 작품과 해당 작품들의 기능을 설명하는 포트폴리오 웹페이지입니다. 

Framer Motion과 Styled Components 라이브러리를 적극 활용하여, 사용자와의 인터랙션을 강조한 동적인 웹페이지를 구현했습니다.

<br>

## ⚙개발 환경
React, Framer-motion, styled-components

<br>

## 🙄Concept Point
* 가독성, 편리성
* 텍스트, 라인, 단순 도형
* 컬러 포인트(main color 3가지)

<br>

## 🚩주요 기능 
* [스크롤 이벤트 (useEffect, useCallback, offsetTop계산, framer-motion)](#scroll-event)
* [다크모드 구현 (Context API, style-components)](#다크모드)
* contact 채팅창 구현 (질문에 맞는 답변 구현, framer-motion)
* 프로젝트 리스트 JSON 데이터로 생성

<br>

## 🔥코드 리뷰
### **다크모드**

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

### **scroll event**
  
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
그리고 useEffect 훅을 사용해 페이지가 처음 랜더링되었을때 setOffsetY와 handleSetScrollId 함수가 호출되고, scroll 발생 시 마다 업데이트되어 실시간으로 section의 id값을 가져옵니다.
```javascript
useEffect(() => {
  setOffsetY();
  handleSetScrollId(); // 초기 스크롤 ID 설정
}, [handleSetScrollId]);
//handleSetScrollId 함수는 스크롤 발생 할 때마다 화면에 보이는 section의 id 값 받아오도록 정의
```

이러한 방식으로 화면에 보여지는 section의 id값에 따라 nav의 스타일을 다르게 주고, 탭 클릭 시 해당 scrollTop값으로 이동하게 구현하였습니다.

포트폴리오를 만들며 이 스크롤 이벤트를 다루는 부분이 가장 복잡하고 어려웠는데 useEffect와 useCallback 함수를 적절하게 사용하지 않으면 불필요한 렌더링이 너무 많이 되거나 혹은 실시간으로 업데이트가 안되거나 하는 문제점이 발생했습니다.

그래도 라이브러리를 이용하지 않고 코드를 직접 짜면서 스크롤 관련 매서드나 리액트 훅 관련하여 많은 공부가 되었습니다.

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






