import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Dropdown, Menu } from 'semantic-ui-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../images/Logo.png'
import { colors } from '../styles/colors';


const Navbar = () => {

    const lang = useContext(LanguageContext);
    const { error, closeError, authenticated } = useContext(AuthContext);
    const closeErrorNav = () => {
        closeError();
    }

    useEffect(() => {console.log('rerenderd', error)}, [error])

    const options = [
        { key: 1, text: lang, value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ];
      return !error ? (
        <Wrapper>
            <Logo src={logo} />
            <Menu compact>
                <Dropdown text='Dropdown' options={options} simple item />
            </Menu>
        </Wrapper>

      ): (
        <ErrorWrapper>
            {error.errorMessage}
            <span onClick={closeErrorNav}>✕</span>
        </ErrorWrapper>
    );

};

const Wrapper = styled.div`
    background: ${colors.white};
    height: 80px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 107px;
`

const Logo = styled.img`
    width: 47px;
    height: 47px;
`

const ErrorWrapper = styled.div`
    display: flex;
    background: ${colors.red};
    font-size: 16px;
    color: ${colors.white};
    text-align: center;
    justify-content: center;
    height: 80px;
    align-items: center;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
`

export default Navbar;