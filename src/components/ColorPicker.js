import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Radio, Button } from 'semantic-ui-react'
import { colors } from '../styles/colors';

const doorColors = {
    black: {
        background: colors.BLACK,
    },
    gray: {
        background: colors.GRAY_DOOR,
    },
    white: {
        background: colors.WHITE_DOOR,
    }
}

const ColorPicker = () => {
    const [color, setColor] = useState('black');
    const handleChange = (e, {value}) => setColor(value);
    return (
        <Wrapper>
            <span>Choose color</span>
            <CirclesContainer>
                <Form style={{display: 'flex'}}>
                    <Form.Field>
                        <Picker>
                            <ColorCircle style={{background: colors.BLACK}} />
                            <Radio
                                label='Black'
                                name='radioGroup'
                                value='black'
                                checked={color === 'black'}
                                onChange={handleChange}
                            />
                        </Picker>
                    </Form.Field>
                    <Form.Field>
                        <Picker>
                            <ColorCircle style={{background: colors.GRAY_DOOR}} />
                            <Radio
                                label='Gray'
                                name='radioGroup'
                                value='gray'
                                checked={color === 'gray'}
                                onChange={handleChange}
                            />
                        </Picker>
                    </Form.Field>
                    <Form.Field>
                        <Picker>
                            <ColorCircle style={{background: colors.WHITE_DOOR, border: '1px solid #ccc'}} />
                            <Radio
                                label='White'
                                name='radioGroup'
                                value='white'
                                checked={color === 'white'}
                                onChange={handleChange}
                            />
                        </Picker>
                    </Form.Field>
                </Form>
            </CirclesContainer>
            <Button>SHARE</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const ColorCircle = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 100%;
`

const CirclesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Picker = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
`

export default ColorPicker;