import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Dropdown, Menu } from 'semantic-ui-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../images/Logo.png'
import { colors } from '../styles/colors';


const Navbar = () => {
    const { lang, setLang } = useContext(LanguageContext);
    const { error, closeError } = useContext(AuthContext);


    useEffect(() => {}, [error])

    const options = [
        { key: 1, text: 'Polish', value: 'pl', },
        { key: 2, text: 'English' , value: 'en', },
      ];
      console.log(lang)
      return !error ? (
        <Wrapper>
            <Logo src={logo} />
            <Menu compact>
                <Dropdown
                    options={options}
                    simple
                    item
                    onChange={(e, {value}) => setLang(value)}
                    defaultValue={lang} />
            </Menu>
        </Wrapper>

      ): (
        <ErrorWrapper>
            {error.errorMessage}
            <span onClick={closeError}>✕</span>
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