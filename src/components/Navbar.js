import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import {
    Dropdown,
    Menu,
    Button,
    Popup
} from 'semantic-ui-react';
import { LanguageContext } from '../contexts/LanguageContext';
import { AuthContext } from '../contexts/AuthContext';
import logo from '../images/Logo.png'
import { colors } from '../styles/colors';
import messages from '../messages/messages';

const langOptions = [{
        key: 1,
        text: 'Polish',
        value: 'pl',
    },
    {
        key: 2,
        text: 'English',
        value: 'en',
    },
];

const url = 'https://bench-api.applover.pl/api/v1/organization'

const styles = {
    organizationButton: {
        background: colors.PURPLE,
        color: colors.WHITE,
        height: '41px',
    }
}

const request = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Host': 'example.org',
        'Authorization': '',
    }
}

const Navbar = () => {
    const [organizationData, setOrganizationData] = useState({})
    const {
        lang,
        setLang
    } = useContext(LanguageContext);
    const {
        error,
        closeError,
        token
    } = useContext(AuthContext);

    useEffect(() => {}, [error]);

    const getOrganizationData = async () => {
        setOrganizationData('loading...')
        const response = await fetch(url, {
            ...request,
            headers: {
                'Authorization': token,
            }
        });
        const data = await response.json();
        if (data !== 'error') {
            setOrganizationData(Object.entries(data).map(el => <p key={uuid()}>{`${el[0]}:${el[1]}`}</p>))
        } else {
            setOrganizationData(<span>Error occured. Try again. </span>);
        }
    }
    return !error ? (
        <Wrapper>
            <Logo src={logo} />
            <Organization>
                <LanguageWrapper>
                <LanguageTitle>{messages.selectLanguage[lang]}</LanguageTitle>
                  <Menu compact>
                      <Dropdown
                          options={langOptions}
                          simple
                          item
                          onChange={(e, {value}) => setLang(value)}
                          defaultValue={lang} />
                  </Menu>
                </LanguageWrapper>
                  <Popup
                    content={organizationData}
                    on='click'
                    basic
                    trigger={token && <Button style={styles.organizationButton} onClick={getOrganizationData}>{messages.myOrganization[lang]}</Button>}
                  />
            </Organization>
        </Wrapper>

    ) : (
        <ErrorWrapper>
            {error.errorMessage}
            <span onClick={closeError}>✕</span>
        </ErrorWrapper>
    );

};

const Wrapper = styled.div `
    background: ${colors.WHITE};
    height: 80px;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 107px;
`

const Logo = styled.img `
    width: 47px;
    height: 47px;
`

const ErrorWrapper = styled.div `
    display: flex;
    background: ${colors.RED};
    font-size: 16px;
    color: ${colors.WHITE};
    text-align: center;
    justify-content: center;
    height: 80px;
    align-items: center;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
`

const Organization = styled.div `
    display: flex;
    align-items: center;
`

const LanguageWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 10px;
`

const LanguageTitle = styled.span `
    color: ${colors.GRAY_LIGHTER};
    font-size: 14px;
    margin: 0px 10px;
`

export default Navbar;