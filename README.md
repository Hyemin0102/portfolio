# Portfoilo
프론트엔드 개발자를 준비하며 만든 작품과 기능설명을 담은 포트폴리오 웹페이지입니다.

## ⚙개발 환경
React, Framer-motion, styled-components

## 🚩주요 기능  
* **다크모드 구현**

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

* **contact 채팅창 구현**

## 😊프로젝트를 마치며



