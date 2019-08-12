import {
    CHANGE_BEAMS,
    CHANGE_COLOR,
    CHANGE_DOOR_TYPE,
    CHANGE_HEIGHT,
    CHANGE_WIDTH,
    CHANGE_POSTS
} from '../actionTypes/actionTypes';

export const initialState = {
    doorType: 'single',
    width: 120,
    height: 250,
    beams: 4,
    posts: 2,
    color: 'black'
};

export const reducer = (state, action) => {
    switch (action.type) {
        case CHANGE_DOOR_TYPE: return {...state, doorType: action.doorType };
        case CHANGE_WIDTH: return {...state, width: action.width };
        case CHANGE_HEIGHT: return {...state, height: action.height };
        case CHANGE_BEAMS: return {...state, beams: action.beams }
        case CHANGE_POSTS: return {...state, posts: action.posts }
        case CHANGE_COLOR: return {...state, color: action.color }
        default: throw new Error('Unexpected action');
    }
}