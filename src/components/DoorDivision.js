import React, { useContext } from 'react';
import styled from 'styled-components';
import { Input, Icon } from 'semantic-ui-react';
import { colors } from '../styles/colors';
import { ConfigurationContext } from '../contexts/ConfigurationContext';
import { changeDoorBeams, changeDoorPosts } from '../actions/actions';

const DoorDivision = () => {

    const [state, dispatch] = useContext(ConfigurationContext);
    const { beams, posts } = state;

    return (
        <Wrapper>
            <span>Door division</span>
            <BarChanger>
                <span>Number of beams</span>
                <BoxValue>{beams}</BoxValue>
                <Icon name='plus' onClick={() => dispatch(changeDoorBeams(beams + 1))}/>
                <Icon name='minus' onClick={() => dispatch(changeDoorBeams(beams - 1))} disabled={beams === 0} />
            </BarChanger>
            <BarChanger>
                <span>Number of posts</span>
                <BoxValue>{posts}</BoxValue>
                <Icon name='plus' onClick={() => dispatch(changeDoorPosts(posts + 1))}/>
                <Icon name='minus' onClick={() => dispatch(changeDoorPosts(posts - 1))} disabled={posts === 0} />
            </BarChanger>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.GRAY_TEXT};
    font-family: 'Robott', sans-serif;
`

const BarChanger = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    * {
        margin: 0px 3px;
    }
    i {
        background: ${colors.BLUE_LIGHTER};
        color: ${colors.GRAY_TEXT};
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
        padding:0;
        margin:0 3px;
    }
`

const BoxValue = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.WHITE};
    width: 24px;
    height: 24px;
    color: ${colors.GRAY_TEXT};
    border: 1px solid ${colors.GRAY_TEXT};
`


export default DoorDivision;