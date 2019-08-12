import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { LanguageContextProvider } from './contexts/LanguageContext';
import { AuthContextProvider } from './contexts/AuthContext'
import { ConfigurationContextProvider } from './contexts/ConfigurationContext';
import Navbar from './components/Navbar';
import Container from './components/Container'


const App = () => {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <LanguageContextProvider>
            <Navbar />
            <ConfigurationContextProvider>
              <Container />
            </ConfigurationContextProvider>
          </LanguageContextProvider>
        </AuthContextProvider>
      </div>
    </Router>
  )
}


export default App;
