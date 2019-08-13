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
    const { width, height, doorType, posts, beams, color } = state;
    const windows = (beams + 1)*(posts +1)
    const elements = new Array(windows)
        .fill(null)
        .map((u, i) => i)

    return (
        <Wrapper>
            <Door beams={beams} posts={posts} >
                {elements.map(el => <Window doorColor={doorColors[color]} key={uuid()}/>)}
            </Door>
            {doorType === 'double' && <Door beams={beams} posts={posts} >
            {elements.map(el => <Window doorColor={doorColors[color]} key={uuid()}/>)}
            </Door>}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    border: 2px solid green;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Door = styled.div`
    height: 300px;
    width: 146px;
    display: grid;
    grid-template-rows: repeat(${({beams}) => beams + 1}, 1fr);
    grid-template-columns: repeat(${({posts}) => posts + 1}, 1fr);
    margin: 5px;
`

const Window = styled.div`
    border:4px solid ${({ doorColor}) => doorColor};
    width: auto;
    height: auto;
`

export default Doors;