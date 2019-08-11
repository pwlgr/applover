import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Icon } from 'semantic-ui-react';
import { colors } from '../styles/colors';

const DoorDivision = () => {
    const [beams, setBeams] = useState(4);
    const [posts, setPosts] = useState(2);
    return (
        <Wrapper>
            <span>Door division</span>
            <BarChanger>
                <Input label="Number of beams" placeholder={beams} />
                <Icon name='plus' onClick={() => setBeams(beams + 1)}/>
                <Icon name='minus' onClick={() => setBeams(beams - 1)} disabled={beams === 0} />
            </BarChanger>
            <BarChanger>
                <Input label="Number of posts" placeholder={posts} />
                <Icon name='plus' onClick={() => setPosts(posts + 1)}/>
                <Icon name='minus' onClick={() => setPosts(posts - 1)} disabled={posts === 0} />
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