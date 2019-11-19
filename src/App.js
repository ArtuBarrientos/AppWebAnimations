import React, { useState } from 'react';
import './App.css';
import styled,{ ThemeProvider,createGlobalStyle } from 'styled-components';
import Home from './components/Home'

function App() {
  const [theme, setTheme] = useState({ mode: 'light' })

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${() =>
      theme.mode === 'dark' ? '#000' : '#FFF'};
    color: ${() => 
      theme.mode === 'dark' ? '#FFF' : '#000'};
  }
  `;

  const BotonTheme = styled.button`
    border-radius: 20px;
    padding: 1rem 0;
    margin: 1rem;
    width: 10rem;
    border: 1px solid #000;
    background-color: ${theme.mode === 'dark' ? '#000' : '#FFF'};
    color: ${theme.mode === 'dark' ? '#FFF' : '#000'};
    border: 2px solid ${theme.mode === 'dark' ? '#FFF' : '#000'};
`
   const Nav = styled.div`
      display: flex;
      justify-content: space-evenly;
   `

  return (
    <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          {/*<Nav>
             <h1>Material</h1>
              <BotonTheme
                  onClick={()=>
                    setTheme(
                      theme.mode === 'dark' ? {mode: 'light'} : { mode: 'dark'}
                    )
                  }
              >Theme
              </BotonTheme>
            </Nav>*/}
            <div>
                <Home/>
            </div>
        </div>
    </ThemeProvider>
  );
}

export default App;
