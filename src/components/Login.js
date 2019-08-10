import React, { useState, useContext } from 'react';
import { Input, Button, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components';
import { colors } from '../styles/colors'
import { AuthContext } from '../contexts/AuthContext'

const styles = {
    customButton: {
        background: colors.green,
        color: colors.white
    },
    customCheckbox: {
        textAlign: 'left'
    }
};

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [keepLoggedIn, setKeepLoggedIn] = useState(false);
    const { login, isLoading }  = useContext(AuthContext);
    const loginParams = {
        email,
        password,
    };
    return (
        <Wrapper>
            <Title>Log in</Title>
            <Input
                placeholder='Email address'
                onChange={(e) => setEmail(e.target.value)} />
            <Input
                placeholder='Password'
                type='password'
                onChange={(e) => setPassword(e.target.value)} />
            <Checkbox
                label='Keep me logged in'
                style={styles.customCheckbox}
                onChange={() => setKeepLoggedIn(!keepLoggedIn)}
                checked={keepLoggedIn} />
            <Button
                style={styles.customButton}
                onClick={() => login(loginParams, keepLoggedIn)}
                disabled={isLoading}>Login</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 397px;
    height: 357px;
    justify-content: space-around;
    text-align: center;
`

const Title = styled.span`
    font-size: 24px;
    color: ${colors.gray};
`

export default Login;