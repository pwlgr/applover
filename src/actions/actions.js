import {
    CHANGE_BEAMS,
    CHANGE_COLOR,
    CHANGE_DOOR_TYPE,
    CHANGE_HEIGHT,
    CHANGE_WIDTH,
    CHANGE_POSTS
} from '../actionTypes/actionTypes';


export const changeDoorType = (doorType) => ({ type: CHANGE_DOOR_TYPE, doorType});
export const changeDoorWidth = (width) => ({ type: CHANGE_WIDTH, width});
export const changeDoorHeight = (height) => ({ type: CHANGE_HEIGHT, height});
export const changeDoorBeams = (beams) => ({ type: CHANGE_BEAMS, beams});
export const changeDoorPosts = (posts) => ({ type: CHANGE_POSTS, posts});
export const changeDoorColor = (color) => ({ type: CHANGE_COLOR, color});