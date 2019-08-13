import React, { useContext } from 'react';
import styled from 'styled-components';
import { Form, Radio } from 'semantic-ui-react'
import { colors } from '../styles/colors';
import { ConfigurationContext } from '../contexts/ConfigurationContext';
import { changeDoorColor } from '../actions/actions'
import ShareButton from './ShareButton';


const ColorPicker = () => {
    const [state, dispatch] = useContext(ConfigurationContext);
    const { color } = state;
    const handleChange = (e, { value }) => dispatch(changeDoorColor(value));

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
            <ShareButton state={state} />
        </Wrapper>
    )
}

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const ColorCircle = styled.div `
    height: 35px;
    width: 35px;
    border-radius: 100%;
`

const CirclesContainer = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Picker = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
`

export default ColorPicker;