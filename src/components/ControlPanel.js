import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import {
    Icon,
    Form,
    Radio,
    Modal,
    Input
} from 'semantic-ui-react';
import { colors } from '../styles/colors'
import { ConfigurationContext } from '../contexts/ConfigurationContext';
import {
    changeDoorType,
    changeDoorWidth,
    changeDoorHeight
} from '../actions/actions'

const styles = {
    customModal: {
        width: '680px',
        height: '432px',
        border: `1px solid ${colors.GRAY_DARKER}`,
        display: 'flex',
        flexDirection: 'space-between',
        color: colors.BLUE_DARKER,
        fontFamily: 'Roboto',
        textAlign: 'center'
    }
}

const ControlPanel = () => {
    const [state, dispatch] = useContext(ConfigurationContext);
    const {
        doorType,
        width,
        height
    } = state;
    const [doorTypeDialogVisible, setDoorTypeDialogVisible] = useState(false);

    return (
        <Wrapper>
            <InfoBox>
                Door type <Icon name="info circle" onClick={() => setDoorTypeDialogVisible(true)} />
            </InfoBox>
            <Form>
            <Form.Field>
              <StyledRadio
                label='Single door'
                name='radioGroup'
                value='single'
                checked={doorType === 'single'}
                onChange={(e, { value }) => dispatch(changeDoorType(value))}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label='Double Door'
                name='radioGroup'
                value='double'
                checked={doorType === 'double'}
                onChange={(e, { value }) => dispatch(changeDoorType(value))}
              />
            </Form.Field>
          </Form>
          <Modal
            closeIcon
            open={doorTypeDialogVisible}
            onClose={() => setDoorTypeDialogVisible(false)}
            style={styles.customModal}>
                    <Modal.Content>
                        <DoorType>
                            <ModalHeader>Door type</ModalHeader>
                            <DoorTypeExamples>
                                <div>
                                    <span>Single</span>
                                    <DoorTypeExample />
                                </div>
                                <div>
                                    <span>Double</span>
                                    <DoorTypeExample />
                                </div>
                            </DoorTypeExamples>
                        </DoorType>
                    </Modal.Content>
            </Modal>
            <DoorSizeContent>
                <span>Door size</span>
                <Dimension>
                    <Input label='Width' value={width} onChange={(e) => dispatch(changeDoorWidth(e.target.value))}/>
                    <span>cm</span>
                </Dimension>
                <Dimension>
                    <Input label='Height'  value={height} onChange={(e) => dispatch(changeDoorHeight(e.target.value))}/>
                    <span>cm</span>
                </Dimension>
            </DoorSizeContent>
        </Wrapper>
    )
}

const Wrapper = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    color: ${colors.GRAY_TEXT};
`

const StyledRadio = styled(Radio)`
    label {
        color: ${colors.GRAY_TEXT};
    }
`

const InfoBox = styled.div `
    color: ${colors.GRAY_TEXT};
    i {
        cursor: pointer;
    }
`

const DoorType = styled.div `
    height: 300px;
    width: 100%;
`

const DoorTypeExample = styled.div `
    width: 187px;
    height: 229px;
    background: ${colors.GRAY_FILL};
    margin-top: 20px;
`

const ModalHeader = styled.h2 `
    color: ${colors.BLUE_DARKER};
    border-bottom: 1px solid ${colors.BLUE_DARKER};
    font-weight: 300;
    text-align: left;
`
const DoorTypeExamples = styled.div `
    display: flex;
    justify-content: space-around;
`

const DoorSizeContent = styled.div `
    display: flex;
    flex-direction: column;
    input {
        width: 80px;
    }
    .label {
        width: 70px;
    }
`

const Dimension = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export default ControlPanel;