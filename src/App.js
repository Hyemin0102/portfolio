import { useSelector } from "react-redux";
import "./App.css";
import Main from "./components/Main";
import { GlobalStyle } from './theme/GlobalStyle';


function App() {
  const isDark  = useSelector(state=>state.darkmode).isDark;

  return (
    <>
      <GlobalStyle isDark={isDark}/>
      <Main />
    </>
  );
}

export default App;
