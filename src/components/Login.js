import React from 'react';
import { Input, Button, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components';
import { colors } from '../styles/colors'

const styles = {
    customButtonStyle: {
        background: colors.green,
        color: colors.white
    }
};


const Login = () => {
    return (
        <Wrapper>
            <Title>Log in</Title>
            <Input placeholder='Email address' />
            <Input placeholder='Password' type="password" />
            <Checkbox label='Keep me logged in' />
            <Button style={styles.customButtonStyle}>Login</Button>
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

const Title = styled.h1`
    font-size: 24px;
`

export default Login;