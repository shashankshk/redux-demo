
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import Reducer from './reducers';

const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : ((window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
const middlewares = [thunk];
if (!process.env.NODE_ENV || process.env.NODE_ENV == 'developement') {
    middlewares.push(logger);
}
const store = () => ({
    ...createStore(
        Reducer,
        composeEnhancers(applyMiddleware(...middlewares))
    ),
});

export default store;
