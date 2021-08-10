import {
    ADD_FILE,
    REMOVE_FILE,
    SELECT_FILE
} from "../actions/actionTypes";

import initialState from './initialState';

export function files(state = initialState.files, action) {
    const newState = state;
    switch (action.type) {
        case ADD_FILE:
            // newState.push(action.payload)
            // return newState
            return [...newState, action.payload];
        case REMOVE_FILE:
            const filteredFiles = newState.filter((file, index) => index !== action.payload);
            return [...filteredFiles];
        default: 
            return state;
    };
};

export function previewFile(state = initialState.previewFile, action) {
    
    switch (action.type) {
        case SELECT_FILE:
            const result = {
                fileDetail: action.payload
            }
            // state.fileDetail = action.payload; // mutating the previous state wrong
            // return state
            return result;
        default:
            return state;
    }
}

export function selectedFiles(state = initialState.selectedFiles, action) {
    switch (action.type) {
        // case SELECT_FILE:
        //     const result = {
        //         fileDetail: action.payload
        //     }
        //     return result;
        default:
            return state;
    }
}
