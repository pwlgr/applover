import React from 'react';
import styled from 'styled-components';
import ControlPanel from './ControlPanel';
import DoorDivision from './DoorDivision';
import ColorPicker from './ColorPicker';


const MainView = ({ stepIndex }) => {
    
    return (
        <Wrapper>
            <Product />
            {stepIndex === 0 && <ControlPanel stepIndex={stepIndex} />}
            {stepIndex === 1 && <DoorDivision />}
            {stepIndex === 2 && <ColorPicker />}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

const Product = styled.div`
    height: 200px;
    width: 100px;
    border: 2px solid green;
`

export default MainView;