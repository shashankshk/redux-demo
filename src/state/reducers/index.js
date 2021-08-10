import { combineReducers } from 'redux';
import * as files from "./files";

const appReducers = combineReducers({
    ...files
});


const rootReducers = (state, action) => {
    return appReducers(state, action);
};

export default rootReducers;