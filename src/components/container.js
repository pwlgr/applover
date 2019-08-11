import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';
import Login from './Login';
import Configuration from './Configuration';


const getCookie = name => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
const Container = () => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    getCookie('auth_token') && setAuthenticated(true);
    return (
        <Wrapper>{getCookie('auth_token') || authenticated   ? <Configuration /> : <Login />}
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