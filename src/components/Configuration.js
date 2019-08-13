import React, { useState } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { colors } from '../styles/colors';
import MainView from './MainView';
import Navigation from './Navigation';

const Configuration = () => {
    const [activeStep, setActiveStep] = useState(0);
    const generateSteps = () => {
        const steps = ['DOOR', 'DOOR DIVISION', 'COLOR']
        return steps.map((step, i) => (
            <Step key={uuid()}>
                <StepCircle
                    key={i}
                    onClick={() => setActiveStep(i)}
                    index={i}
                    activeStep={activeStep}>
                </StepCircle>
                <StepInfo>
                    <span>STEP {i+1}</span>
                    <span>CHOOSE {step}</span>
                </StepInfo>
            </Step>
        ))
    };


    return (
        <Wrapper>
            <Steps>{generateSteps()}</Steps>
                <MainView stepIndex={activeStep}/>
                <Navigation stepIndex={activeStep} navigate={setActiveStep} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    font-family: 'Robot', sans-serif;
`
const Steps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin: 20px;
`

const Step = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 10px 30px;
    font-size: 10px;
    color: ${colors.GRAY_TEXT};

`

const StepCircle = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 100%;
    border: 20px solid ${({index, activeStep}) => index === activeStep ? colors.GRAY_BLUE_LIGHTER : colors.BLUE_LIGHTER};
    background: ${({index, activeStep}) => index === activeStep ? colors.WHITE : colors.BLUE_DARKER};
    box-sizing: border-box;
`

const StepInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 11px;
`

export default Configuration;