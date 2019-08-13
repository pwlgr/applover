import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { colors } from '../styles/colors';

const customStyles = {
    button: {
        fontSize: '14px',
        width: '126px',
    },
    backButton: {
        background: colors.WHITE,
        color: colors.BLUE_DARKER,
        border: `1px solid ${colors.BLUE_DARKER}`
    },
    forwardButton: {
        background: colors.BLUE_DARKER,
        color: colors.WHITE,
        border: `1px solid ${colors.WHITE}`
    }

}

const Navigation = ({ stepIndex, navigate }) => {
    return (
        <Wrapper>
            {stepIndex === 0 ? <Button
                    style={{...customStyles.button, ...customStyles.forwardButton}}
                    onClick={() => navigate(stepIndex+1)}>NEXT STEP</Button> :
            <div>
                <Button
                    style={{...customStyles.button, ...customStyles.backButton }}
                    onClick={() => navigate(stepIndex-1)}>BACK</Button>
                <Button
                    style={{...customStyles.button, ...customStyles.forwardButton }}
                    onClick={() => stepIndex === 2 ? alert('Ready to order!') : navigate(stepIndex+1)}>NEXT STEP</Button>
            </div>}
        </Wrapper>
    )
}




const Wrapper = styled.div`
    display: flex;
    width:80%;
    margin:0 auto;
    justify-content: flex-end;
`

const BackButton = styled(Button)`
    background: ${colors.WHITE};
    font-size: 14px;
    width: 126px;
`

const ForwardButton = styled(Button)`
    background: ${colors.BLUE_DARKER};
    font-size: 14px;
`

export default Navigation;