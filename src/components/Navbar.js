import React, { useContext } from 'react';
import styled from 'styled-components';
import { Dropdown, Menu } from 'semantic-ui-react';
import { LanguageContext } from '../contexts/LanguageContext';
import logo from '../images/Logo.png'


const Navbar = () => {
    const lang = useContext(LanguageContext);
    const options = [
        { key: 1, text: lang, value: 1 },
        { key: 2, text: 'Choice 2', value: 2 },
        { key: 3, text: 'Choice 3', value: 3 },
      ]
    return (
        <Wrapper>
            <Logo src={logo} />
            <Menu compact>
                <Dropdown text='Dropdown' options={options} simple item />
          </Menu>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #fff;
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

export default Navbar;