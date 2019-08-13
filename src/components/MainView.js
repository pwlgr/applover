import React from 'react';
import styled from 'styled-components';
import ControlPanel from './ControlPanel';
import DoorDivision from './DoorDivision';
import ColorPicker from './ColorPicker';
import Doors from './Doors';


const MainView = ({ stepIndex }) => (
    <Wrapper>
        <Doors />
        {stepIndex === 0 && <ControlPanel stepIndex={stepIndex} />}
        {stepIndex === 1 && <DoorDivision />}
        {stepIndex === 2 && <ColorPicker />}
    </Wrapper>
)


const Wrapper = styled.div `
    display: flex;
    height: 100%;
    width:80%;
    margin: 0 auto;
`

export default MainView;