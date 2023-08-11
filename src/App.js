import "./App.css";
import Main from "./components/Main";
import { GlobalStyle } from './theme/GlobalStyle';
import ThemeProvider from './context/ThemeProvider';


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

export default App;
