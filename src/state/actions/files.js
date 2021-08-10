import { 
    ADD_FILE,
    REMOVE_FILE,
    SELECT_FILE
} from "./actionTypes";

export function addFileAction(payload) {
    return dispatch => {
        dispatch({
            type: ADD_FILE,
            payload
        });
    };
};

export function removeFileAction(payload) {
    return dispatch => {
        dispatch({
            type: REMOVE_FILE,
            payload
        });
    };
};

export function selectFileAction(payload) {
    return dispatch => {
        dispatch({
            type: SELECT_FILE,
            payload
        });
    };
};
