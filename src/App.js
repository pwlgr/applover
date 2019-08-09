import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { LanguageContextProvider } from './contexts/LanguageContext';
import { AuthContextProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar';
import Container from './components/container'


const App = () => {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
        <LanguageContextProvider>
          <Navbar />
          <Container />
        </LanguageContextProvider>
      </AuthContextProvider>
      </div>
  </Router>
  )
}


export default App;
