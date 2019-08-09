import React, { Component } from 'react';
import { LanguageContextProvider } from './contexts/LanguageContext';
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <div className="App">
       <LanguageContextProvider>
        <Navbar />
        <Container>
          <Login />
        </Container>
       </LanguageContextProvider>
      </div>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default App;
