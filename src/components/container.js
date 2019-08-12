import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';
import Login from './Login';
import Configuration from './Configuration';


const Container = () => {
    const { token } = useContext(AuthContext);
    return (
        <Wrapper>{token ? <Configuration /> : <Login />}
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