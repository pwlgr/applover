import React, { useContext } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v4';
import { ConfigurationContext } from '../contexts/ConfigurationContext'
import { colors } from '../styles/colors';


const doorColors = {
    black: colors.BLACK,
    gray: colors.GRAY_DOOR,
    white: colors.WHITE_DOOR
}

const Doors = () => {
    const [state] = useContext(ConfigurationContext)
    const {
        width,
        height,
        doorType,
        posts,
        beams,
        color
    } = state;
    const windows = (beams + 1) * (posts + 1)
    const elements = new Array(windows)
        .fill(null)
        .map((u, i) => i)
    const WidthDimension = doorType === 'double' ? width * 2 : width

    return (
        <Wrapper>
            <WidthLine doorType={doorType}>
                <WidthNumber>
                    {WidthDimension}
                </WidthNumber>
            </WidthLine>
            <DoorContainer>
                <HeightLine />
                <HeightNumber>{height}</HeightNumber>
                <Door beams={beams} posts={posts}>
                    {elements.map(el => <Window doorColor={doorColors[color]} key={uuid()}/>)}
                </Door>
                {doorType === 'double' && <Door beams={beams} posts={posts}>
                {elements.map(el => <Window doorColor={doorColors[color]} key={uuid()}/>)}
                </Door>}
            </DoorContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    border-right: 1px solid ${colors.GRAY_FILL}
`

const Door = styled.div `
    height: 280px;
    width: 146px;
    display: grid;
    grid-template-rows: repeat(${ ({beams}) => beams + 1}, 1fr);
    grid-template-columns: repeat(${ ({posts}) => posts + 1}, 1fr);
    margin: 3px;
    
`

const Window = styled.div `
    border:4px solid ${ ({ doorColor }) => doorColor};
    width: auto;
    height: auto;
`

const DoorContainer = styled.div `
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeightLine = styled.div `
    height: 280px;
    border-left: 2px solid ${colors.GRAY_DARKER};
    z-index: 0;
`

const HeightNumber = styled.span `
    background: ${colors.WHITE};
    border:1px solid ${colors.GRAY_DARKER};
    right: 10px;
    z-index: 1;
    right: 14px;
    position: relative;
`

const WidthLine = styled.div `
    width: ${ ({ doorType }) => doorType === 'double' ? '295px': '146px'};
    border-bottom: 2px solid ${colors.GRAY_DARKER};
    text-align: center;
    margin-left: 28px;
`

const WidthNumber = styled.span `
    background: ${colors.WHITE};
    border:1px solid ${colors.GRAY_DARKER};
    z-index: 1;
    top: 8px;
    position: relative;
`

export default Doors;