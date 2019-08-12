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
                <Input label="Number of beams" placeholder={beams} />
                <Icon name='plus' onClick={() => dispatch(changeDoorBeams(beams + 1))}/>
                <Icon name='minus' onClick={() => dispatch(changeDoorBeams(beams - 1))} disabled={beams === 0} />
            </BarChanger>
            <BarChanger>
                <Input label="Number of posts" placeholder={posts} />
                <Icon name='plus' onClick={() => dispatch(changeDoorPosts(posts + 1))}/>
                <Icon name='minus' onClick={() => dispatch(changeDoorPosts(posts - 1))} disabled={posts === 0} />
            </BarChanger>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const BarChanger = styled.div`
    display: flex;
    height: 24px;
    margin: 10px;
    i {
        background: ${colors.BLUE_LIGHTER};
        color: ${colors.GRAY_TEXT};
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 24px;
        width: 24px;
    }
`


export default DoorDivision;