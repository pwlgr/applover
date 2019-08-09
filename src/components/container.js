import React, { useContext } from 'react';
import styled from 'styled-components';
import {   Route,
} from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
import Login from './Login';
import Main from './main'

const Container = () => {
    const { authenticated } = useContext(AuthContext);
    return (
        <Wrapper>{authenticated ? <Main /> : <Login />}
        </Wrapper>
    )
}

export default Container;

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif !important;
`