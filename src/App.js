import React, { Component } from 'react';
import { LanguageContextProvider } from './contexts/LanguageContext';
import { AuthContextProvider } from './contexts/AuthContext'
import styled from 'styled-components'
import Navbar from './components/Navbar';
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <div className="App">
      <AuthContextProvider>
       <LanguageContextProvider>
        <Navbar />
        <Container>
          <Login />
        </Container>
       </LanguageContextProvider>
       </AuthContextProvider>
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
  font-family: 'Roboto', sans-serif !important;
`

export default App;
